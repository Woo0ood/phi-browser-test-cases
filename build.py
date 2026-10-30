#!/usr/bin/env python3
"""Build the public, static test case pages without external dependencies."""
import html
import json
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / 'src' / 'tab-closing'
OUTPUT = ROOT / 'tab-closing'
LAYOUTS = {'once': 'Common', 'performance': 'Performance', 'balanced': 'Balanced', 'comfortable': 'Comfortable'}
CODES = {'once': 'COMMON', 'performance': 'PER', 'balanced': 'BAL', 'comfortable': 'COM'}


def expanded_cases(spec):
    for section in spec['sections']:
        for case in section['cases']:
            for layout in case['layouts']:
                for language in case.get('languages', ['']):
                    for variant in case.get('variants', [{'id': '', 'label': ''}]):
                        key = case['id'] + '-' + CODES[layout] + ('-' + language if language else '') + ('-' + variant['id'] if variant['id'] else '')
                        yield section, case, layout, language, variant, key


def direction(text, layout):
    return text.replace('{before}', 'Close Tabs to the Left' if layout == 'comfortable' else 'Close Tabs Above').replace('{after}', 'Close Tabs to the Right' if layout == 'comfortable' else 'Close Tabs Below')


def markdown(spec):
    lines = ['# Phi Browser tab closing test cases', '', 'Every case starts as Not run. Record a separate result for each layout, language and input variant.', '', 'Use disposable pages and protect personal pins, bookmarks, drafts and other windows.', '', 'Online checklist: https://woo0ood.github.io/phi-browser-test-cases/tab-closing/', '']
    previous = None
    for section, case, layout, language, variant, key in expanded_cases(spec):
        if previous != section['id']:
            lines.extend(['## ' + section['id'] + ' ' + section['title'], '', section['summary'], ''])
            previous = section['id']
        lines.extend(['### ' + key + ' ' + case['title'], '', 'Priority: ' + case['priority'] + '; layout: ' + LAYOUTS[layout] + ('; language: ' + language if language else '') + ('; variant: ' + variant['label'] if variant['label'] else ''), '', 'Before: ' + direction(case['pre'], layout), '', 'Steps:', ''])
        lines.extend(str(i) + '. ' + direction(step, layout) for i, step in enumerate(case['steps'], 1))
        lines.extend(['', 'Expected:', ''])
        lines.extend('- ' + direction(item, layout) for item in case['expected'])
        lines.extend(['', 'Reset: ' + case['reset'], '', 'Evidence: ' + case['evidence'], '', 'Result: Not run. Notes:', ''])
    return '\n'.join(lines)


def main():
    spec = json.loads((SOURCE / 'cases.json').read_text())
    template = (SOURCE / 'template.html').read_text()
    assert template.count('__CASES__') == 1
    OUTPUT.mkdir(exist_ok=True)
    data = json.dumps(spec, ensure_ascii=False).replace('<', '\\u003c').replace('>', '\\u003e').replace('&', '\\u0026')
    (OUTPUT / 'index.html').write_text(template.replace('__CASES__', data))
    (OUTPUT / 'handbook.md').write_text(markdown(spec))
    for name in ['app.js', 'style.css']:
        shutil.copyfile(SOURCE / name, OUTPUT / name)
    shutil.copytree(SOURCE / 'fixtures', OUTPUT / 'fixtures', dirs_exist_ok=True)
    (ROOT / '.nojekyll').touch()
    (ROOT / 'index.html').write_text('''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Public manual test cases for Phi Browser."><link rel="icon" href="data:,"><title>Phi Browser test cases</title><link rel="stylesheet" href="tab-closing/style.css"></head><body><main style="max-width:760px;margin:0 auto;padding:48px 20px"><div class="eyebrow">PHI BROWSER · MANUAL TEST CASES</div><h1>Browser test cases</h1><p class="lede">Step-by-step checks, disposable test pages and locally recorded results.</p><div class="panel"><h2><a href="tab-closing/#overview">Tab closing</a></h2><p>Double-click and positional closing across three layouts, split views, pins, groups and bookmarks.</p><p class="muted">166 base cases · 512 execution points · English instructions</p></div><p class="muted">No analytics or result-upload service. Notes remain in your browser until you choose to export and share them.</p><p><a href="https://github.com/Woo0ood/phi-browser-test-cases">Repository</a></p></main></body></html>''')
    print(f'Built {sum(len(s["cases"]) for s in spec["sections"])} base cases / {sum(1 for _ in expanded_cases(spec))} execution points.')


if __name__ == '__main__':
    main()
