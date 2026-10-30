(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const spec = JSON.parse($('handbook-data').textContent);
  const storageKey = 'phi-public-tab-closing-v1';
  const layouts = {once: 'Common', performance: 'Performance', balanced: 'Balanced', comfortable: 'Comfortable'};
  const codes = {once: 'COMMON', performance: 'PER', balanced: 'BAL', comfortable: 'COM'};
  const statuses = {todo: 'Not run', pass: 'Passed', fail: 'Failed', blocked: 'Blocked', skip: 'Skipped'};
  const metaKeys = ['tester', 'run', 'version', 'system', 'device', 'language'];
  const smokeIds = new Set(['ENV-01','ENV-02','ENV-03','SET-01','SET-03','SET-05','DBL-02','DBL-04','POS-03','SPL-03','PIN-02','GRP-05','BMK-04','LIFE-01','VIS-05']);
  const smokeHorizontal = new Set(['SET-03','DBL-02','POS-03','SPL-03','BMK-04']);
  let saved = {}, storageError = '';
  try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); }
  catch { storageError = 'Local records could not be read. Export your results before refreshing or closing this page.'; }
  if (!saved || typeof saved !== 'object' || Array.isArray(saved)) saved = {};
  const state = {meta: {}, results: {}};
  for (const key of metaKeys) state.meta[key] = typeof saved.meta?.[key] === 'string' ? saved.meta[key].slice(0, 400) : '';
  const units = [];
  for (const group of spec.sections) for (const item of group.cases) for (const layout of item.layouts) for (const language of item.languages || ['']) for (const variant of item.variants || [{id: '', label: ''}]) {
    const key = item.id + '-' + codes[layout] + (language ? '-' + language : '') + (variant.id ? '-' + variant.id : '');
    const old = saved.results?.[key];
    if (old && Object.hasOwn(statuses, old.status)) {
      state.results[key] = {status: old.status};
      for (const field of ['note','at','version','run','revision']) state.results[key][field] = typeof old[field] === 'string' ? old[field].slice(0, field === 'note' ? 12000 : 400) : '';
    }
    units.push({...item, key, layout, language, variant, group: group.id, smoke: smokeIds.has(item.id) && (layout === 'once' || layout === 'performance' || layout === 'comfortable' && smokeHorizontal.has(item.id))});
  }
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const message = text => { $('message').textContent = text; };
  const current = record => record && record.version === state.meta.version && record.run === state.meta.run && record.revision === spec.revision;
  const result = unit => current(state.results[unit.key]) ? state.results[unit.key].status : 'todo';
  const direction = (text, layout) => text.replaceAll('{before}', layout === 'comfortable' ? 'Close Tabs to the Left' : 'Close Tabs Above').replaceAll('{after}', layout === 'comfortable' ? 'Close Tabs to the Right' : 'Close Tabs Below');
  const list = (items, layout) => '<ol>' + items.map(text => '<li>' + escape(direction(text, layout)) + '</li>').join('') + '</ol>';
  const elements = new Map(), sections = new Map();
  function save() {
    try { localStorage.setItem(storageKey, JSON.stringify({schemaVersion: 1, revision: spec.revision, ...state})); }
    catch { storageError = 'Results cannot be saved in this browser. Export JSON now; refreshing or closing may lose this run.'; }
    $('storage-warning').hidden = !storageError; $('storage-warning').textContent = storageError;
  }
  function freshRecord(status, note) { return {status, note, at: new Date().toISOString(), version: state.meta.version, run: state.meta.run, revision: spec.revision}; }
  for (const group of spec.sections) {
    const anchor = document.createElement('a'); anchor.href = '#sec-' + group.id; anchor.textContent = group.id + ' ' + group.title; $('section-links').append(anchor);
    const section = document.createElement('section'); section.id = 'sec-' + group.id;
    section.innerHTML = '<h2>' + escape(group.id + ' ' + group.title) + '</h2><p class="muted">' + escape(group.summary) + '</p>';
    sections.set(group.id, section); $('checklist').append(section);
    for (const unit of units.filter(u => u.group === group.id)) {
      const article = document.createElement('article'); article.className = 'case'; article.id = unit.key;
      article.innerHTML = '<div class="row between"><div class="row"><a class="mono" href="#' + unit.key + '">' + unit.key + '</a><span class="pill priority-' + unit.priority + '">' + unit.priority + '</span><span class="pill">' + escape(layouts[unit.layout] + (unit.language ? ' · ' + unit.language : '') + (unit.variant.label ? ' · ' + unit.variant.label : '')) + '</span><span class="pill">' + (unit.kind === 'exploratory' ? 'Exploratory' : 'Acceptance / regression') + '</span></div></div><h3>' + escape(unit.title) + '</h3><p class="pre"><strong>Before:</strong> ' + escape(direction(unit.pre, unit.layout)) + '</p><h4>Steps</h4>' + list(unit.steps, unit.layout) + '<h4>Expected</h4>' + list(unit.expected, unit.layout) + '<details><summary>Reset and evidence</summary><p><strong>Reset:</strong> ' + escape(unit.reset) + '</p><p><strong>Evidence:</strong> ' + escape(unit.evidence) + '</p></details><div class="result-bar"><div class="status-buttons" role="group" aria-label="' + unit.key + ' result">' + Object.entries(statuses).map(([key, label]) => '<button type="button" data-result="' + key + '" aria-pressed="false">' + label + '</button>').join('') + '</div><label class="sr-only" for="note-' + unit.key + '">' + unit.key + ' notes</label><textarea id="note-' + unit.key + '" maxlength="12000" placeholder="For a failure or blocked case, note the switch values, starting order, active page, clicked anchor, actual survivors, dialog choices and screenshot names."></textarea><p class="stamp"></p></div>';
      const note = article.querySelector('textarea'); note.value = state.results[unit.key]?.note || '';
      note.addEventListener('input', () => { state.results[unit.key] = freshRecord(result(unit), note.value); save(); update(); });
      for (const button of article.querySelectorAll('[data-result]')) button.addEventListener('click', () => {
        if ((!state.meta.run.trim() || !state.meta.version.trim()) && button.dataset.result !== 'todo') {
          message('Enter a Run ID and App version before recording a result.');
          document.querySelector('[data-meta="' + (!state.meta.run.trim() ? 'run' : 'version') + '"]').focus(); return;
        }
        state.results[unit.key] = freshRecord(button.dataset.result, note.value); save(); update();
      });
      elements.set(unit.key, article); section.append(article);
    }
  }
  function matches(unit) {
    const layout = $('layout-filter').value, priority = $('priority-filter').value, status = $('status-filter').value, kind = $('kind-filter').value;
    const query = $('search').value.trim().toLocaleLowerCase(), actual = result(unit);
    return (layout === 'all' || unit.layout === layout || layout !== 'once' && unit.layout === 'once') &&
      (priority === 'all' || unit.priority === priority || priority === 'P01' && unit.priority !== 'P2') &&
      (status === 'all' || actual === status || status === 'open' && ['todo','fail','blocked'].includes(actual)) &&
      (kind === 'all' || unit.kind === kind) && (!$('smoke-filter').checked || unit.smoke) &&
      (!query || [unit.key,unit.title,unit.pre,unit.language,unit.variant.label,...unit.steps,...unit.expected].join(' ').toLocaleLowerCase().includes(query));
  }
  function update() {
    const counts = {todo:0, pass:0, fail:0, blocked:0, skip:0}, visibleGroups = new Set();
    let visible = 0, p0Open = 0;
    for (const unit of units) {
      const actual = result(unit), el = elements.get(unit.key), record = state.results[unit.key]; counts[actual]++;
      if (unit.priority === 'P0' && actual !== 'pass') p0Open++;
      el.dataset.status = actual;
      for (const button of el.querySelectorAll('[data-result]')) button.setAttribute('aria-pressed', String(button.dataset.result === actual));
      el.querySelector('.stamp').textContent = record ? (current(record) ? 'Recorded: ' : 'Previous version/run/revision; currently Not run: ') + (record.at ? new Date(record.at).toLocaleString('en') : '—') + ' · ' + (record.version || 'No version') + ' · ' + (record.run || 'No run ID') : 'Not run in this session';
      el.hidden = !matches(unit); if (!el.hidden) { visible++; visibleGroups.add(unit.group); }
    }
    for (const [id, section] of sections) section.hidden = !visibleGroups.has(id);
    $('stats').innerHTML = '<span class="stat"><strong>' + units.length + '</strong>Total</span>' + Object.entries(counts).map(([key, value]) => '<span class="stat ' + key + '"><strong>' + value + '</strong>' + statuses[key] + '</span>').join('') + '<span class="stat"><strong>' + p0Open + '</strong>P0 not passed</span>';
    $('progress').max = units.length; $('progress').value = units.length - counts.todo;
    $('visible-count').textContent = 'Showing ' + visible + ' / ' + units.length + ' execution points. Counts and exports always include all cases. Smoke checklist: ' + units.filter(u => u.smoke).length + '.';
    $('empty').hidden = visible !== 0;
    for (const anchor of $('section-links').querySelectorAll('a')) anchor.setAttribute('aria-disabled', String(!visibleGroups.has(anchor.hash.slice(5))));
  }
  for (const input of document.querySelectorAll('[data-meta]')) {
    input.maxLength = 400; input.value = state.meta[input.dataset.meta];
    input.addEventListener('input', () => { state.meta[input.dataset.meta] = input.value; save(); update(); });
  }
  for (const id of ['layout-filter','priority-filter','status-filter','kind-filter','smoke-filter']) $(id).addEventListener('change', update);
  $('search').addEventListener('input', update);
  function report() {
    const counts = {todo:0, pass:0, fail:0, blocked:0, skip:0}; for (const unit of units) counts[result(unit)]++;
    let text = '# Phi Browser tab closing test report\n\nChecklist revision: ' + spec.revision + '\nExported: ' + new Date().toISOString() + '\n';
    for (const key of metaKeys) text += key + ': ' + (state.meta[key] || 'Not provided') + '\n';
    text += '\nAll ' + units.length + ' execution points: ' + Object.entries(counts).map(([key, value]) => statuses[key] + ' ' + value).join(' / ') + '\n\n';
    for (const priority of ['P0','P1']) text += priority + ' not passed: ' + (units.filter(u => u.priority === priority && result(u) !== 'pass').map(u => u.key + ' (' + statuses[result(u)] + ')').join(', ') || 'None') + '\n\n';
    for (const unit of units) {
      const record = state.results[unit.key], actual = result(unit);
      text += '## ' + unit.key + ' ' + unit.title + '\n- Priority: ' + unit.priority + '\n- Layout: ' + layouts[unit.layout] + (unit.language ? '; language: ' + unit.language : '') + (unit.variant.label ? '; variant: ' + unit.variant.label : '') + '\n- Type: ' + (unit.kind === 'exploratory' ? 'Exploratory' : 'Acceptance / regression') + '\n- Result: ' + statuses[actual] + '\n';
      if (record) text += '- Recorded version/run/revision: ' + [record.version,record.run,record.revision].map(v => v || 'Not provided').join(' / ') + '\n- Recorded at: ' + (record.at || '—') + '\n';
      text += '- Notes: ' + (record?.note || (['fail','blocked','skip'].includes(actual) ? '[Add the reason and evidence]' : '—')) + '\n\n';
    }
    return text;
  }
  function download(name, content, type) {
    const url = URL.createObjectURL(new Blob([content], {type})), anchor = document.createElement('a');
    anchor.href = url; anchor.download = name; document.body.append(anchor); anchor.click(); anchor.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function showReport(text) { $('report-label').hidden = false; $('report-fallback').value = text; }
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); message('Copied. Reports include all cases, regardless of filters.'); }
    catch { showReport(text); $('report-fallback').focus(); $('report-fallback').select(); message('Automatic copying is unavailable. Select and copy the displayed text.'); }
  }
  $('copy-report').addEventListener('click', () => copy(report()));
  $('show-report').addEventListener('click', () => { showReport(report()); message('Complete report preview is ready, including filtered-out cases.'); });
  $('download-report').addEventListener('click', () => download('phi-tab-closing-report.md', report(), 'text/markdown;charset=utf-8'));
  $('export-json').addEventListener('click', () => download('phi-tab-closing-results.json', JSON.stringify({schemaVersion:1, revision:spec.revision, exportedAt:new Date().toISOString(), meta:state.meta, results:state.results, execution:units.map(u => ({key:u.key,priority:u.priority,kind:u.kind,layout:u.layout,language:u.language,variant:u.variant.label,status:result(u)}))}, null, 2), 'application/json'));
  $('reset').addEventListener('click', () => {
    if (!confirm('Clear all locally stored results and notes for this checklist? This cannot be undone. Export JSON first. Run details will be kept.')) return;
    state.results = {}; for (const el of elements.values()) el.querySelector('textarea').value = ''; save(); update(); message('Results and notes cleared. Run details were kept.');
  });
  function fixtureURL(name) {
    const url = new URL('fixtures/', location.href); url.searchParams.set('tab', name); url.searchParams.set('run', $('fixture-run').value || 'manual'); url.searchParams.set('kind', $('fixture-kind').value); return url.href;
  }
  function updateFixtures() {
    $('fixture-links').replaceChildren();
    for (const name of ['A','B','C','D','E','F','P','Q','M','N']) { const a = document.createElement('a'); a.href = fixtureURL(name); a.target = '_blank'; a.rel = 'noopener'; a.textContent = name; a.setAttribute('aria-label', 'Open test page ' + name); $('fixture-links').append(a); }
    const custom = fixtureURL($('fixture-name').value || 'P'); $('custom-fixture').href = custom; $('fixture-url').value = custom;
  }
  for (const id of ['fixture-run','fixture-kind','fixture-name']) $(id).addEventListener('input', updateFixtures);
  $('copy-fixture').addEventListener('click', () => copy($('fixture-url').value));
  $('copy-sequence').addEventListener('click', () => copy(['A','B','C','D','E','F'].map(fixtureURL).join('\n')));
  function updateLanguage() {
    $('language-rows').replaceChildren();
    for (const [purpose, value] of Object.entries(spec.labels[$('language-select').value])) {
      const row = document.createElement('tr'); for (const text of [purpose, value]) { const cell = document.createElement('td'); cell.textContent = text; row.append(cell); } $('language-rows').append(row);
    }
  }
  $('language-select').addEventListener('change', updateLanguage);
  $('scope-count').textContent = spec.sections.reduce((sum, g) => sum + g.cases.length, 0) + ' base cases · ' + units.length + ' execution points, expanded by layout, language and input variant · P0 core / P1 regression / P2 conditional and exploratory';
  for (const entry of spec.coverage) { const row = document.createElement('tr'); for (const text of [entry.dimension,entry.scope,entry.cases.join(', ')]) { const cell = document.createElement('td'); cell.textContent = text; row.append(cell); } $('coverage-rows').append(row); }
  save(); updateFixtures(); updateLanguage(); update();
})();
