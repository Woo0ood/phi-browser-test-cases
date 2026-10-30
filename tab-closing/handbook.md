# Phi Browser tab closing test cases

Every case starts as Not run. Record a separate result for each layout, language and input variant.

Use disposable pages and protect personal pins, bookmarks, drafts and other windows.

Online checklist: https://woo0ood.github.io/phi-browser-test-cases/tab-closing/

## ENV Test preparation

Identify the version and environment, use disposable pages and record a reproducible starting state.

### ENV-01-COMMON Identify the version under test

Priority: P0; layout: Common

Before: A Phi Browser version with both tab-closing options is installed.

Steps:

1. Record the app version, macOS version, chip and interface language in the run details.
2. Open Settings > Advanced and find the two tab-closing switches in the second card.

Expected:

- The running version is identifiable.
- If the switches are unavailable, record the version limitation instead of testing a different feature.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### ENV-02-COMMON Use a separate test Space

Priority: P0; layout: Common

Before: Use disposable test pages; keep work pages and drafts outside the test window.

Steps:

1. Create a Space named TC-QA.
2. Record the original layout, switches and shortcuts.
3. Check that all pages chosen for closing belong to this test.

Expected:

- Ordinary closing stays within the test Space and window.
- Pins may be shared between Spaces; change only pins created for this test.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### ENV-03-COMMON Establish a stable starting order

Priority: P0; layout: Common

Before: Use the page generator with one batch identifier.

Steps:

1. Open A through F one at a time.
2. Drag them into A, B, C, D, E, F order if necessary and wait for the list to settle.
3. Recreate each case's starting order before running it.

Expected:

- A is first and F is last in the displayed order.
- Judge the result by the actual tab order rather than opening time.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### ENV-04-COMMON Identify a page that stays open

Priority: P1; layout: Common

Before: Open a normal test page with an empty marker field.

Steps:

1. Enter a random marker and note its opening ID.
2. Switch away and return to the page.

Expected:

- Both the marker and opening ID remain unchanged.
- Use both values when checking that a protected page stayed open; a saved entry alone is insufficient.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### ENV-05-COMMON Record supported test environments

Priority: P0; layout: Common

Before: Have access to the app versions and devices you plan to test.

Steps:

1. Create a separate run for each macOS version, chip and app version.
2. Run the applicable cases in each of the three layouts.
3. Mark unavailable features or devices as Blocked or Skipped with a reason.

Expected:

- Each result identifies the tested environment.
- Results from one device or version do not imply coverage of every environment.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### ENV-06-COMMON Compare individual pages and final survivors

Priority: P0; layout: Common

Before: Prepare uniquely identified A-F pages and markers in every protected page.

Steps:

1. Capture the order, split pairs, group membership, active page and selection before acting.
2. Include separate pages with matching URLs or titles and compare their markers after closing.

Expected:

- Compare individual pages, not just names, URLs or counts.
- Record the actual surviving pages and dialog choices; do not mark an unverified result as Passed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

## SET Independent preferences

The second Advanced settings card has no heading. Double-click closing defaults off; positional closing defaults on.

### SET-01-COMMON Two switches in the second settings card

Priority: P0; layout: Common

Before: Open Settings > Advanced.

Steps:

1. Inspect the cards from top to bottom.
2. Read both switch labels and descriptions, scrolling if necessary.

Expected:

- The first card contains page display options; the second contains only Double-click to close tabs and Close tabs by position.
- The second card has no heading; labels, descriptions and switches remain readable.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-02-COMMON Default values in a fresh installation

Priority: P1; layout: Common

Before: Use a separate test installation with neither preference previously changed; a new Profile alone is insufficient.

Steps:

1. Open Advanced before changing either switch.
2. Record both initial values.

Expected:

- Double-click to close tabs is off; Close tabs by position is on.
- If a fresh environment is unavailable, mark Blocked rather than clearing personal preferences.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-03-PER Disabling positional closing hides tab actions

Priority: P0; layout: Performance

Before: Prepare A/B/C and leave the double-click switch unchanged.

Steps:

1. Turn Close tabs by position off.
2. Close Settings and right-click B.

Expected:

- Close Tabs Above and Close Tabs Below are absent.
- Close and Close Other Tabs remain available when applicable; the double-click switch has not changed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-03-BAL Disabling positional closing hides tab actions

Priority: P0; layout: Balanced

Before: Prepare A/B/C and leave the double-click switch unchanged.

Steps:

1. Turn Close tabs by position off.
2. Close Settings and right-click B.

Expected:

- Close Tabs Above and Close Tabs Below are absent.
- Close and Close Other Tabs remain available when applicable; the double-click switch has not changed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-03-COM Disabling positional closing hides tab actions

Priority: P0; layout: Comfortable

Before: Prepare A/B/C and leave the double-click switch unchanged.

Steps:

1. Turn Close tabs by position off.
2. Close Settings and right-click B.

Expected:

- Close Tabs to the Left and Close Tabs to the Right are absent.
- Close and Close Other Tabs remain available when applicable; the double-click switch has not changed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-04-PER Disabling positional closing hides group actions

Priority: P0; layout: Performance

Before: Prepare A, G[B,C], D with positional closing off.

Steps:

1. Right-click the group heading.
2. Right-click member B.

Expected:

- Neither menu contains the new directional actions.
- Existing group actions remain available.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-04-BAL Disabling positional closing hides group actions

Priority: P0; layout: Balanced

Before: Prepare A, G[B,C], D with positional closing off.

Steps:

1. Right-click the group heading.
2. Right-click member B.

Expected:

- Neither menu contains the new directional actions.
- Existing group actions remain available.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-04-COM Disabling positional closing hides group actions

Priority: P0; layout: Comfortable

Before: Prepare A, G[B,C], D with positional closing off.

Steps:

1. Right-click the group heading.
2. Right-click member B.

Expected:

- Neither menu contains the new directional actions.
- Existing group actions remain available.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-05-PER Re-enabling positional closing takes effect immediately

Priority: P0; layout: Performance

Before: Prepare A/B/C and TC-G[D,E] with positional closing off.

Steps:

1. Turn Close tabs by position on without restarting.
2. Reopen B's menu and the group-heading menu.

Expected:

- The directional actions return immediately with labels appropriate to the current layout.
- The double-click preference keeps its previous value.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-05-BAL Re-enabling positional closing takes effect immediately

Priority: P0; layout: Balanced

Before: Prepare A/B/C and TC-G[D,E] with positional closing off.

Steps:

1. Turn Close tabs by position on without restarting.
2. Reopen B's menu and the group-heading menu.

Expected:

- The directional actions return immediately with labels appropriate to the current layout.
- The double-click preference keeps its previous value.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-05-COM Re-enabling positional closing takes effect immediately

Priority: P0; layout: Comfortable

Before: Prepare A/B/C and TC-G[D,E] with positional closing off.

Steps:

1. Turn Close tabs by position on without restarting.
2. Reopen B's menu and the group-heading menu.

Expected:

- The directional actions return immediately with labels appropriate to the current layout.
- The double-click preference keeps its previous value.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-06-PER-off-off The four switch combinations are independent

Priority: P0; layout: Performance; variant: Double-click off / positional off

Before: Prepare fresh A/B/C pages for each switch combination shown on this case.

Steps:

1. Set only the specified combination.
2. Double-click a disposable tab, then inspect another tab's menu.

Expected:

- Only the double-click switch controls the gesture.
- Only the positional switch controls the directional actions; Close Other Tabs is independent.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-06-PER-on-off The four switch combinations are independent

Priority: P0; layout: Performance; variant: Double-click on / positional off

Before: Prepare fresh A/B/C pages for each switch combination shown on this case.

Steps:

1. Set only the specified combination.
2. Double-click a disposable tab, then inspect another tab's menu.

Expected:

- Only the double-click switch controls the gesture.
- Only the positional switch controls the directional actions; Close Other Tabs is independent.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-06-PER-off-on The four switch combinations are independent

Priority: P0; layout: Performance; variant: Double-click off / positional on

Before: Prepare fresh A/B/C pages for each switch combination shown on this case.

Steps:

1. Set only the specified combination.
2. Double-click a disposable tab, then inspect another tab's menu.

Expected:

- Only the double-click switch controls the gesture.
- Only the positional switch controls the directional actions; Close Other Tabs is independent.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-06-PER-on-on The four switch combinations are independent

Priority: P0; layout: Performance; variant: Double-click on / positional on

Before: Prepare fresh A/B/C pages for each switch combination shown on this case.

Steps:

1. Set only the specified combination.
2. Double-click a disposable tab, then inspect another tab's menu.

Expected:

- Only the double-click switch controls the gesture.
- Only the positional switch controls the directional actions; Close Other Tabs is independent.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-06-BAL-off-off The four switch combinations are independent

Priority: P0; layout: Balanced; variant: Double-click off / positional off

Before: Prepare fresh A/B/C pages for each switch combination shown on this case.

Steps:

1. Set only the specified combination.
2. Double-click a disposable tab, then inspect another tab's menu.

Expected:

- Only the double-click switch controls the gesture.
- Only the positional switch controls the directional actions; Close Other Tabs is independent.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-06-BAL-on-off The four switch combinations are independent

Priority: P0; layout: Balanced; variant: Double-click on / positional off

Before: Prepare fresh A/B/C pages for each switch combination shown on this case.

Steps:

1. Set only the specified combination.
2. Double-click a disposable tab, then inspect another tab's menu.

Expected:

- Only the double-click switch controls the gesture.
- Only the positional switch controls the directional actions; Close Other Tabs is independent.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-06-BAL-off-on The four switch combinations are independent

Priority: P0; layout: Balanced; variant: Double-click off / positional on

Before: Prepare fresh A/B/C pages for each switch combination shown on this case.

Steps:

1. Set only the specified combination.
2. Double-click a disposable tab, then inspect another tab's menu.

Expected:

- Only the double-click switch controls the gesture.
- Only the positional switch controls the directional actions; Close Other Tabs is independent.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-06-BAL-on-on The four switch combinations are independent

Priority: P0; layout: Balanced; variant: Double-click on / positional on

Before: Prepare fresh A/B/C pages for each switch combination shown on this case.

Steps:

1. Set only the specified combination.
2. Double-click a disposable tab, then inspect another tab's menu.

Expected:

- Only the double-click switch controls the gesture.
- Only the positional switch controls the directional actions; Close Other Tabs is independent.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-06-COM-off-off The four switch combinations are independent

Priority: P0; layout: Comfortable; variant: Double-click off / positional off

Before: Prepare fresh A/B/C pages for each switch combination shown on this case.

Steps:

1. Set only the specified combination.
2. Double-click a disposable tab, then inspect another tab's menu.

Expected:

- Only the double-click switch controls the gesture.
- Only the positional switch controls the directional actions; Close Other Tabs is independent.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-06-COM-on-off The four switch combinations are independent

Priority: P0; layout: Comfortable; variant: Double-click on / positional off

Before: Prepare fresh A/B/C pages for each switch combination shown on this case.

Steps:

1. Set only the specified combination.
2. Double-click a disposable tab, then inspect another tab's menu.

Expected:

- Only the double-click switch controls the gesture.
- Only the positional switch controls the directional actions; Close Other Tabs is independent.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-06-COM-off-on The four switch combinations are independent

Priority: P0; layout: Comfortable; variant: Double-click off / positional on

Before: Prepare fresh A/B/C pages for each switch combination shown on this case.

Steps:

1. Set only the specified combination.
2. Double-click a disposable tab, then inspect another tab's menu.

Expected:

- Only the double-click switch controls the gesture.
- Only the positional switch controls the directional actions; Close Other Tabs is independent.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-06-COM-on-on The four switch combinations are independent

Priority: P0; layout: Comfortable; variant: Double-click on / positional on

Before: Prepare fresh A/B/C pages for each switch combination shown on this case.

Steps:

1. Set only the specified combination.
2. Double-click a disposable tab, then inspect another tab's menu.

Expected:

- Only the double-click switch controls the gesture.
- Only the positional switch controls the directional actions; Close Other Tabs is independent.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-07-COMMON Preferences survive a restart

Priority: P0; layout: Common

Before: Record the original preferences and protect any personal unsaved work.

Steps:

1. Set different values, such as double-click on and positional closing off.
2. Quit normally and reopen the same app under the same macOS user.
3. Inspect Settings and the tab and group menus.

Expected:

- Both preferences retain their values.
- Menus follow the saved positional preference.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-08-COMMON Preferences are shared across windows and Spaces

Priority: P1; layout: Common

Before: Have test windows W1/W2 and Spaces S1/S2 in the same app.

Steps:

1. Turn positional closing off in W1/S1.
2. Reopen menus in W2 and S2.
3. Turn it on again in either window.

Expected:

- Newly opened menus in the same app follow the latest preference.
- Separate tabs, Spaces and Profiles do not require separate switch changes; this does not establish sharing between different app installations.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-09-COMMON-off Updating preserves the double-click preference

Priority: P0; layout: Common; variant: Double-click off before update

Before: Use a disposable installation of an older version that already offers double-click closing and an approved update.

Steps:

1. Set double-click closing to the value shown on this case and quit normally.
2. Update the app and inspect the settings card and gesture.

Expected:

- The existing double-click value is retained.
- Positional closing defaults on if it has never been configured.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-09-COMMON-on Updating preserves the double-click preference

Priority: P0; layout: Common; variant: Double-click on before update

Before: Use a disposable installation of an older version that already offers double-click closing and an approved update.

Steps:

1. Set double-click closing to the value shown on this case and quit normally.
2. Update the app and inspect the settings card and gesture.

Expected:

- The existing double-click value is retained.
- Positional closing defaults on if it has never been configured.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-10-PER Changes apply to existing and new tabs

Priority: P0; layout: Performance

Before: Prepare A/B/C and G[D,E] with both switches off.

Steps:

1. Enable double-click closing and immediately test existing B, then a newly opened tab.
2. Disable it again and test ordinary tabs, group members, ordinary splits and grouped splits.

Expected:

- Enabling requires no restart or recreation of existing tabs.
- Disabling stops the closing gesture on all four surfaces while normal selection remains available.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-10-BAL Changes apply to existing and new tabs

Priority: P0; layout: Balanced

Before: Prepare A/B/C and G[D,E] with both switches off.

Steps:

1. Enable double-click closing and immediately test existing B, then a newly opened tab.
2. Disable it again and test ordinary tabs, group members, ordinary splits and grouped splits.

Expected:

- Enabling requires no restart or recreation of existing tabs.
- Disabling stops the closing gesture on all four surfaces while normal selection remains available.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SET-10-COM Changes apply to existing and new tabs

Priority: P0; layout: Comfortable

Before: Prepare A/B/C and G[D,E] with both switches off.

Steps:

1. Enable double-click closing and immediately test existing B, then a newly opened tab.
2. Disable it again and test ordinary tabs, group members, ordinary splits and grouped splits.

Expected:

- Enabling requires no restart or recreation of existing tabs.
- Disabling stops the closing gesture on all four surfaces while normal selection remains available.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

## DBL Double-click closing

A double-click closes one ordinary page. Within a split, only the clicked pane closes.

### DBL-01-PER Double-click with the preference off

Priority: P0; layout: Performance

Before: Prepare A/B/C with C active and double-click closing off.

Steps:

1. Double-click B's title.
2. Repeat on B's icon.

Expected:

- B activates normally and A/B/C all remain.
- Title and icon areas behave consistently.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-01-BAL Double-click with the preference off

Priority: P0; layout: Balanced

Before: Prepare A/B/C with C active and double-click closing off.

Steps:

1. Double-click B's title.
2. Repeat on B's icon.

Expected:

- B activates normally and A/B/C all remain.
- Title and icon areas behave consistently.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-01-COM Double-click with the preference off

Priority: P0; layout: Comfortable

Before: Prepare A/B/C with C active and double-click closing off.

Steps:

1. Double-click B's title.
2. Repeat on B's icon.

Expected:

- B activates normally and A/B/C all remain.
- Title and icon areas behave consistently.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-02-PER Double-click the active tab

Priority: P0; layout: Performance

Before: Prepare A/B/C with B active and double-click closing on.

Steps:

1. Double-click B's title once.
2. Wait for the list to settle.

Expected:

- Only B closes; A/C remain.
- A surviving page becomes active without stale B content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-02-BAL Double-click the active tab

Priority: P0; layout: Balanced

Before: Prepare A/B/C with B active and double-click closing on.

Steps:

1. Double-click B's title once.
2. Wait for the list to settle.

Expected:

- Only B closes; A/C remain.
- A surviving page becomes active without stale B content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-02-COM Double-click the active tab

Priority: P0; layout: Comfortable

Before: Prepare A/B/C with B active and double-click closing on.

Steps:

1. Double-click B's title once.
2. Wait for the list to settle.

Expected:

- Only B closes; A/C remain.
- A surviving page becomes active without stale B content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-03-PER Double-click an inactive tab

Priority: P0; layout: Performance

Before: Prepare A/B/C with C active and double-click closing on.

Steps:

1. Double-click B's title.
2. Recreate the sequence and repeat on B's icon.

Expected:

- Each attempt closes only B.
- A first click that activates B does not change the closing target.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-03-BAL Double-click an inactive tab

Priority: P0; layout: Balanced

Before: Prepare A/B/C with C active and double-click closing on.

Steps:

1. Double-click B's title.
2. Recreate the sequence and repeat on B's icon.

Expected:

- Each attempt closes only B.
- A first click that activates B does not change the closing target.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-03-COM Double-click an inactive tab

Priority: P0; layout: Comfortable

Before: Prepare A/B/C with C active and double-click closing on.

Steps:

1. Double-click B's title.
2. Recreate the sequence and repeat on B's icon.

Expected:

- Each attempt closes only B.
- A first click that activates B does not change the closing target.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-04-PER Close only the first split pane

Priority: P0; layout: Performance

Before: Prepare A, S[B+C], D with double-click closing on.

Steps:

1. Double-click the tab area for pane B.
2. Inspect C and the surrounding tabs.

Expected:

- Only B closes; C continues as an ordinary page and A/D remain.
- C is not closed with its partner.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-04-BAL Close only the first split pane

Priority: P0; layout: Balanced

Before: Prepare A, S[B+C], D with double-click closing on.

Steps:

1. Double-click the tab area for pane B.
2. Inspect C and the surrounding tabs.

Expected:

- Only B closes; C continues as an ordinary page and A/D remain.
- C is not closed with its partner.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-04-COM Close only the first split pane

Priority: P0; layout: Comfortable

Before: Prepare A, S[B+C], D with double-click closing on.

Steps:

1. Double-click the tab area for pane B.
2. Inspect C and the surrounding tabs.

Expected:

- Only B closes; C continues as an ordinary page and A/D remain.
- C is not closed with its partner.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-05-PER Close the other or unfocused split pane

Priority: P0; layout: Performance

Before: Prepare A, S[B+C], D with B focused and double-click closing on.

Steps:

1. Double-click C's half of the split tab.
2. Recreate, swap the panes and double-click C again.

Expected:

- Each attempt closes C only and retains B.
- Pane focus and position do not change the target.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-05-BAL Close the other or unfocused split pane

Priority: P0; layout: Balanced

Before: Prepare A, S[B+C], D with B focused and double-click closing on.

Steps:

1. Double-click C's half of the split tab.
2. Recreate, swap the panes and double-click C again.

Expected:

- Each attempt closes C only and retains B.
- Pane focus and position do not change the target.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-05-COM Close the other or unfocused split pane

Priority: P0; layout: Comfortable

Before: Prepare A, S[B+C], D with B focused and double-click closing on.

Steps:

1. Double-click C's half of the split tab.
2. Recreate, swap the panes and double-click C again.

Expected:

- Each attempt closes C only and retains B.
- Pane focus and position do not change the target.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-06-PER Double-click a split inside a group

Priority: P0; layout: Performance

Before: Prepare G[A,S[B+C],D] with double-click closing on.

Steps:

1. Double-click B's half.
2. Recreate and double-click C's half.

Expected:

- Only the clicked pane closes each time.
- Its partner and A/D retain their group membership; the gesture is not ignored or applied twice.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-06-BAL Double-click a split inside a group

Priority: P0; layout: Balanced

Before: Prepare G[A,S[B+C],D] with double-click closing on.

Steps:

1. Double-click B's half.
2. Recreate and double-click C's half.

Expected:

- Only the clicked pane closes each time.
- Its partner and A/D retain their group membership; the gesture is not ignored or applied twice.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-06-COM Double-click a split inside a group

Priority: P0; layout: Comfortable

Before: Prepare G[A,S[B+C],D] with double-click closing on.

Steps:

1. Double-click B's half.
2. Recreate and double-click C's half.

Expected:

- Only the clicked pane closes each time.
- Its partner and A/D retain their group membership; the gesture is not ignored or applied twice.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-07-PER-command Modified double-clicks preserve existing actions

Priority: P1; layout: Performance; variant: Command

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Hold the modifier shown on this case and double-click B using a real mouse or trackpad.

Expected:

- The optional double-click closing gesture does not close B.
- Existing selection, split or context actions may still occur; record those separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-07-PER-shift Modified double-clicks preserve existing actions

Priority: P1; layout: Performance; variant: Shift

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Hold the modifier shown on this case and double-click B using a real mouse or trackpad.

Expected:

- The optional double-click closing gesture does not close B.
- Existing selection, split or context actions may still occur; record those separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-07-PER-option Modified double-clicks preserve existing actions

Priority: P1; layout: Performance; variant: Option

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Hold the modifier shown on this case and double-click B using a real mouse or trackpad.

Expected:

- The optional double-click closing gesture does not close B.
- Existing selection, split or context actions may still occur; record those separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-07-PER-control Modified double-clicks preserve existing actions

Priority: P1; layout: Performance; variant: Control

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Hold the modifier shown on this case and double-click B using a real mouse or trackpad.

Expected:

- The optional double-click closing gesture does not close B.
- Existing selection, split or context actions may still occur; record those separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-07-BAL-command Modified double-clicks preserve existing actions

Priority: P1; layout: Balanced; variant: Command

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Hold the modifier shown on this case and double-click B using a real mouse or trackpad.

Expected:

- The optional double-click closing gesture does not close B.
- Existing selection, split or context actions may still occur; record those separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-07-BAL-shift Modified double-clicks preserve existing actions

Priority: P1; layout: Balanced; variant: Shift

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Hold the modifier shown on this case and double-click B using a real mouse or trackpad.

Expected:

- The optional double-click closing gesture does not close B.
- Existing selection, split or context actions may still occur; record those separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-07-BAL-option Modified double-clicks preserve existing actions

Priority: P1; layout: Balanced; variant: Option

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Hold the modifier shown on this case and double-click B using a real mouse or trackpad.

Expected:

- The optional double-click closing gesture does not close B.
- Existing selection, split or context actions may still occur; record those separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-07-BAL-control Modified double-clicks preserve existing actions

Priority: P1; layout: Balanced; variant: Control

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Hold the modifier shown on this case and double-click B using a real mouse or trackpad.

Expected:

- The optional double-click closing gesture does not close B.
- Existing selection, split or context actions may still occur; record those separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-07-COM-command Modified double-clicks preserve existing actions

Priority: P1; layout: Comfortable; variant: Command

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Hold the modifier shown on this case and double-click B using a real mouse or trackpad.

Expected:

- The optional double-click closing gesture does not close B.
- Existing selection, split or context actions may still occur; record those separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-07-COM-shift Modified double-clicks preserve existing actions

Priority: P1; layout: Comfortable; variant: Shift

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Hold the modifier shown on this case and double-click B using a real mouse or trackpad.

Expected:

- The optional double-click closing gesture does not close B.
- Existing selection, split or context actions may still occur; record those separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-07-COM-option Modified double-clicks preserve existing actions

Priority: P1; layout: Comfortable; variant: Option

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Hold the modifier shown on this case and double-click B using a real mouse or trackpad.

Expected:

- The optional double-click closing gesture does not close B.
- Existing selection, split or context actions may still occur; record those separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-07-COM-control Modified double-clicks preserve existing actions

Priority: P1; layout: Comfortable; variant: Control

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Hold the modifier shown on this case and double-click B using a real mouse or trackpad.

Expected:

- The optional double-click closing gesture does not close B.
- Existing selection, split or context actions may still occur; record those separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-08-PER Distinguish selection, dragging and the close button

Priority: P1; layout: Performance

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Single-click B.
2. Drag B to another position.
3. Click C's close button once.

Expected:

- Selection and dragging do not close B.
- The close button closes C only and does not trigger another close.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-08-BAL Distinguish selection, dragging and the close button

Priority: P1; layout: Balanced

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Single-click B.
2. Drag B to another position.
3. Click C's close button once.

Expected:

- Selection and dragging do not close B.
- The close button closes C only and does not trigger another close.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-08-COM Distinguish selection, dragging and the close button

Priority: P1; layout: Comfortable

Before: Prepare A/B/C with double-click closing on.

Steps:

1. Single-click B.
2. Drag B to another position.
3. Click C's close button once.

Expected:

- Selection and dragging do not close B.
- The close button closes C only and does not trigger another close.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-09-PER Pins and bookmarks retain their double-click actions

Priority: P1; layout: Performance

Before: Create and open test pin P and saved bookmark M; record their markers and existing actions.

Steps:

1. Double-click the saved entries with the preference off and then on.
2. For P, navigate to another test page before checking any existing return-to-saved-address action.

Expected:

- The ordinary-tab closing preference does not replace saved-entry actions.
- Saved entries and unrelated ordinary tabs are not removed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-09-BAL Pins and bookmarks retain their double-click actions

Priority: P1; layout: Balanced

Before: Create and open test pin P and saved bookmark M; record their markers and existing actions.

Steps:

1. Double-click the saved entries with the preference off and then on.
2. For P, navigate to another test page before checking any existing return-to-saved-address action.

Expected:

- The ordinary-tab closing preference does not replace saved-entry actions.
- Saved entries and unrelated ordinary tabs are not removed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-09-COM Pins and bookmarks retain their double-click actions

Priority: P1; layout: Comfortable

Before: Create and open test pin P and saved bookmark M; record their markers and existing actions.

Steps:

1. Double-click the saved entries with the preference off and then on.
2. For P, navigate to another test page before checking any existing return-to-saved-address action.

Expected:

- The ordinary-tab closing preference does not replace saved-entry actions.
- Saved entries and unrelated ordinary tabs are not removed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-10-PER Close an ordinary group member

Priority: P0; layout: Performance

Before: Prepare A, G[B,C,D], E with double-click closing on.

Steps:

1. Double-click C while active.
2. Recreate and repeat while C is inactive.

Expected:

- Only C closes; A/B/D/E remain.
- B/D retain their original group.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-10-BAL Close an ordinary group member

Priority: P0; layout: Balanced

Before: Prepare A, G[B,C,D], E with double-click closing on.

Steps:

1. Double-click C while active.
2. Recreate and repeat while C is inactive.

Expected:

- Only C closes; A/B/D/E remain.
- B/D retain their original group.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-10-COM Close an ordinary group member

Priority: P0; layout: Comfortable

Before: Prepare A, G[B,C,D], E with double-click closing on.

Steps:

1. Double-click C while active.
2. Recreate and repeat while C is inactive.

Expected:

- Only C closes; A/B/D/E remain.
- B/D retain their original group.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-11-PER Close a Space's last ordinary tab

Priority: P0; layout: Performance

Before: S1 contains only A; another Space S2 contains marked X/Y pages. Double-click closing is on.

Steps:

1. Note the markers in S2 and double-click A in S1.
2. Inspect the resulting window or placeholder and return to S2.

Expected:

- A closes without losing other Spaces, pins or bookmarks.
- The existing last-tab behavior applies without a crash, freeze or stale tab.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-11-BAL Close a Space's last ordinary tab

Priority: P0; layout: Balanced

Before: S1 contains only A; another Space S2 contains marked X/Y pages. Double-click closing is on.

Steps:

1. Note the markers in S2 and double-click A in S1.
2. Inspect the resulting window or placeholder and return to S2.

Expected:

- A closes without losing other Spaces, pins or bookmarks.
- The existing last-tab behavior applies without a crash, freeze or stale tab.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-11-COM Close a Space's last ordinary tab

Priority: P0; layout: Comfortable

Before: S1 contains only A; another Space S2 contains marked X/Y pages. Double-click closing is on.

Steps:

1. Note the markers in S2 and double-click A in S1.
2. Inspect the resulting window or placeholder and return to S2.

Expected:

- A closes without losing other Spaces, pins or bookmarks.
- The existing last-tab behavior applies without a crash, freeze or stale tab.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-12-PER Close a window's only ordinary tab

Priority: P0; layout: Performance

Before: A disposable window contains only A; keep other windows outside the test.

Steps:

1. Double-click A.
2. Recreate the setup and compare with A's existing close button.

Expected:

- Both actions follow the same last-tab behavior.
- Other windows remain unaffected and the app does not crash; a particular empty-window result is not required.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-12-BAL Close a window's only ordinary tab

Priority: P0; layout: Balanced

Before: A disposable window contains only A; keep other windows outside the test.

Steps:

1. Double-click A.
2. Recreate the setup and compare with A's existing close button.

Expected:

- Both actions follow the same last-tab behavior.
- Other windows remain unaffected and the app does not crash; a particular empty-window result is not required.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-12-COM Close a window's only ordinary tab

Priority: P0; layout: Comfortable

Before: A disposable window contains only A; keep other windows outside the test.

Steps:

1. Double-click A.
2. Recreate the setup and compare with A's existing close button.

Expected:

- Both actions follow the same last-tab behavior.
- Other windows remain unaffected and the app does not crash; a particular empty-window result is not required.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-13-PER-cancel Unsaved page confirmation after double-click

Priority: P0; layout: Performance; variant: Cancel

Before: Prepare A/B/C; B is an unsaved-changes page with entered text. Double-click closing is on.

Steps:

1. Double-click B and choose the Cancel or Leave variant shown on this case.
2. Inspect B's draft, A/C and any repeated prompts.

Expected:

- Cancel retains B and its draft; Leave closes only B.
- Confirmation is not bypassed and neighboring tabs are not closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-13-PER-leave Unsaved page confirmation after double-click

Priority: P0; layout: Performance; variant: Confirm / Leave

Before: Prepare A/B/C; B is an unsaved-changes page with entered text. Double-click closing is on.

Steps:

1. Double-click B and choose the Cancel or Leave variant shown on this case.
2. Inspect B's draft, A/C and any repeated prompts.

Expected:

- Cancel retains B and its draft; Leave closes only B.
- Confirmation is not bypassed and neighboring tabs are not closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-13-BAL-cancel Unsaved page confirmation after double-click

Priority: P0; layout: Balanced; variant: Cancel

Before: Prepare A/B/C; B is an unsaved-changes page with entered text. Double-click closing is on.

Steps:

1. Double-click B and choose the Cancel or Leave variant shown on this case.
2. Inspect B's draft, A/C and any repeated prompts.

Expected:

- Cancel retains B and its draft; Leave closes only B.
- Confirmation is not bypassed and neighboring tabs are not closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-13-BAL-leave Unsaved page confirmation after double-click

Priority: P0; layout: Balanced; variant: Confirm / Leave

Before: Prepare A/B/C; B is an unsaved-changes page with entered text. Double-click closing is on.

Steps:

1. Double-click B and choose the Cancel or Leave variant shown on this case.
2. Inspect B's draft, A/C and any repeated prompts.

Expected:

- Cancel retains B and its draft; Leave closes only B.
- Confirmation is not bypassed and neighboring tabs are not closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-13-COM-cancel Unsaved page confirmation after double-click

Priority: P0; layout: Comfortable; variant: Cancel

Before: Prepare A/B/C; B is an unsaved-changes page with entered text. Double-click closing is on.

Steps:

1. Double-click B and choose the Cancel or Leave variant shown on this case.
2. Inspect B's draft, A/C and any repeated prompts.

Expected:

- Cancel retains B and its draft; Leave closes only B.
- Confirmation is not bypassed and neighboring tabs are not closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-13-COM-leave Unsaved page confirmation after double-click

Priority: P0; layout: Comfortable; variant: Confirm / Leave

Before: Prepare A/B/C; B is an unsaved-changes page with entered text. Double-click closing is on.

Steps:

1. Double-click B and choose the Cancel or Leave variant shown on this case.
2. Inspect B's draft, A/C and any repeated prompts.

Expected:

- Cancel retains B and its draft; Leave closes only B.
- Confirmation is not bypassed and neighboring tabs are not closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-14-PER-cancel Double-click an unsaved split pane

Priority: P0; layout: Performance; variant: Cancel

Before: Prepare A, S[B+C], D; B has unsaved test text and double-click closing is on.

Steps:

1. Double-click B's half and choose this case's dialog response.
2. Inspect C's marker and A/D.

Expected:

- Cancel retains B's draft without destroying C.
- Leave closes only B; C becomes an ordinary page with its marker intact and A/D remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-14-PER-leave Double-click an unsaved split pane

Priority: P0; layout: Performance; variant: Confirm / Leave

Before: Prepare A, S[B+C], D; B has unsaved test text and double-click closing is on.

Steps:

1. Double-click B's half and choose this case's dialog response.
2. Inspect C's marker and A/D.

Expected:

- Cancel retains B's draft without destroying C.
- Leave closes only B; C becomes an ordinary page with its marker intact and A/D remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-14-BAL-cancel Double-click an unsaved split pane

Priority: P0; layout: Balanced; variant: Cancel

Before: Prepare A, S[B+C], D; B has unsaved test text and double-click closing is on.

Steps:

1. Double-click B's half and choose this case's dialog response.
2. Inspect C's marker and A/D.

Expected:

- Cancel retains B's draft without destroying C.
- Leave closes only B; C becomes an ordinary page with its marker intact and A/D remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-14-BAL-leave Double-click an unsaved split pane

Priority: P0; layout: Balanced; variant: Confirm / Leave

Before: Prepare A, S[B+C], D; B has unsaved test text and double-click closing is on.

Steps:

1. Double-click B's half and choose this case's dialog response.
2. Inspect C's marker and A/D.

Expected:

- Cancel retains B's draft without destroying C.
- Leave closes only B; C becomes an ordinary page with its marker intact and A/D remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-14-COM-cancel Double-click an unsaved split pane

Priority: P0; layout: Comfortable; variant: Cancel

Before: Prepare A, S[B+C], D; B has unsaved test text and double-click closing is on.

Steps:

1. Double-click B's half and choose this case's dialog response.
2. Inspect C's marker and A/D.

Expected:

- Cancel retains B's draft without destroying C.
- Leave closes only B; C becomes an ordinary page with its marker intact and A/D remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-14-COM-leave Double-click an unsaved split pane

Priority: P0; layout: Comfortable; variant: Confirm / Leave

Before: Prepare A, S[B+C], D; B has unsaved test text and double-click closing is on.

Steps:

1. Double-click B's half and choose this case's dialog response.
2. Inspect C's marker and A/D.

Expected:

- Cancel retains B's draft without destroying C.
- Leave closes only B; C becomes an ordinary page with its marker intact and A/D remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-15-PER The untouched split partner has unsaved text

Priority: P0; layout: Performance

Before: Prepare A, S[B+C], D; B is normal and C has unsaved test text. Double-click closing is on.

Steps:

1. Double-click B's half.
2. Compare C's draft and opening ID.

Expected:

- Only B closes and the original C stays open.
- No leave prompt is requested for C, because C is not being closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-15-BAL The untouched split partner has unsaved text

Priority: P0; layout: Balanced

Before: Prepare A, S[B+C], D; B is normal and C has unsaved test text. Double-click closing is on.

Steps:

1. Double-click B's half.
2. Compare C's draft and opening ID.

Expected:

- Only B closes and the original C stays open.
- No leave prompt is requested for C, because C is not being closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-15-COM The untouched split partner has unsaved text

Priority: P0; layout: Comfortable

Before: Prepare A, S[B+C], D; B is normal and C has unsaved test text. Double-click closing is on.

Steps:

1. Double-click B's half.
2. Compare C's draft and opening ID.

Expected:

- Only B closes and the original C stays open.
- No leave prompt is requested for C, because C is not being closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-16-PER Split panes with double-click closing off

Priority: P0; layout: Performance

Before: Prepare an ordinary S[B+C] and a grouped S[B+C], surrounded by other tabs.

Steps:

1. Double-click each half in each setup with the preference off.
2. Inspect the focused pane and survivors.

Expected:

- Both panes remain and normal pane activation still works.
- The preference applies to both ordinary and grouped splits.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-16-BAL Split panes with double-click closing off

Priority: P0; layout: Balanced

Before: Prepare an ordinary S[B+C] and a grouped S[B+C], surrounded by other tabs.

Steps:

1. Double-click each half in each setup with the preference off.
2. Inspect the focused pane and survivors.

Expected:

- Both panes remain and normal pane activation still works.
- The preference applies to both ordinary and grouped splits.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-16-COM Split panes with double-click closing off

Priority: P0; layout: Comfortable

Before: Prepare an ordinary S[B+C] and a grouped S[B+C], surrounded by other tabs.

Steps:

1. Double-click each half in each setup with the preference off.
2. Inspect the focused pane and survivors.

Expected:

- Both panes remain and normal pane activation still works.
- The preference applies to both ordinary and grouped splits.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-17-PER-command Modified double-clicks on split panes

Priority: P1; layout: Performance; variant: Command

Before: Prepare ordinary and grouped splits with double-click closing on.

Steps:

1. Hold this case's modifier and double-click one half.
2. Recreate and repeat on the other half.

Expected:

- The optional closing gesture does not run on either half.
- Existing modifier actions remain available in both setups.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-17-PER-shift Modified double-clicks on split panes

Priority: P1; layout: Performance; variant: Shift

Before: Prepare ordinary and grouped splits with double-click closing on.

Steps:

1. Hold this case's modifier and double-click one half.
2. Recreate and repeat on the other half.

Expected:

- The optional closing gesture does not run on either half.
- Existing modifier actions remain available in both setups.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-17-PER-option Modified double-clicks on split panes

Priority: P1; layout: Performance; variant: Option

Before: Prepare ordinary and grouped splits with double-click closing on.

Steps:

1. Hold this case's modifier and double-click one half.
2. Recreate and repeat on the other half.

Expected:

- The optional closing gesture does not run on either half.
- Existing modifier actions remain available in both setups.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-17-PER-control Modified double-clicks on split panes

Priority: P1; layout: Performance; variant: Control

Before: Prepare ordinary and grouped splits with double-click closing on.

Steps:

1. Hold this case's modifier and double-click one half.
2. Recreate and repeat on the other half.

Expected:

- The optional closing gesture does not run on either half.
- Existing modifier actions remain available in both setups.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-17-BAL-command Modified double-clicks on split panes

Priority: P1; layout: Balanced; variant: Command

Before: Prepare ordinary and grouped splits with double-click closing on.

Steps:

1. Hold this case's modifier and double-click one half.
2. Recreate and repeat on the other half.

Expected:

- The optional closing gesture does not run on either half.
- Existing modifier actions remain available in both setups.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-17-BAL-shift Modified double-clicks on split panes

Priority: P1; layout: Balanced; variant: Shift

Before: Prepare ordinary and grouped splits with double-click closing on.

Steps:

1. Hold this case's modifier and double-click one half.
2. Recreate and repeat on the other half.

Expected:

- The optional closing gesture does not run on either half.
- Existing modifier actions remain available in both setups.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-17-BAL-option Modified double-clicks on split panes

Priority: P1; layout: Balanced; variant: Option

Before: Prepare ordinary and grouped splits with double-click closing on.

Steps:

1. Hold this case's modifier and double-click one half.
2. Recreate and repeat on the other half.

Expected:

- The optional closing gesture does not run on either half.
- Existing modifier actions remain available in both setups.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-17-BAL-control Modified double-clicks on split panes

Priority: P1; layout: Balanced; variant: Control

Before: Prepare ordinary and grouped splits with double-click closing on.

Steps:

1. Hold this case's modifier and double-click one half.
2. Recreate and repeat on the other half.

Expected:

- The optional closing gesture does not run on either half.
- Existing modifier actions remain available in both setups.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-17-COM-command Modified double-clicks on split panes

Priority: P1; layout: Comfortable; variant: Command

Before: Prepare ordinary and grouped splits with double-click closing on.

Steps:

1. Hold this case's modifier and double-click one half.
2. Recreate and repeat on the other half.

Expected:

- The optional closing gesture does not run on either half.
- Existing modifier actions remain available in both setups.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-17-COM-shift Modified double-clicks on split panes

Priority: P1; layout: Comfortable; variant: Shift

Before: Prepare ordinary and grouped splits with double-click closing on.

Steps:

1. Hold this case's modifier and double-click one half.
2. Recreate and repeat on the other half.

Expected:

- The optional closing gesture does not run on either half.
- Existing modifier actions remain available in both setups.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-17-COM-option Modified double-clicks on split panes

Priority: P1; layout: Comfortable; variant: Option

Before: Prepare ordinary and grouped splits with double-click closing on.

Steps:

1. Hold this case's modifier and double-click one half.
2. Recreate and repeat on the other half.

Expected:

- The optional closing gesture does not run on either half.
- Existing modifier actions remain available in both setups.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-17-COM-control Modified double-clicks on split panes

Priority: P1; layout: Comfortable; variant: Control

Before: Prepare ordinary and grouped splits with double-click closing on.

Steps:

1. Hold this case's modifier and double-click one half.
2. Recreate and repeat on the other half.

Expected:

- The optional closing gesture does not run on either half.
- Existing modifier actions remain available in both setups.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-18-PER Double-click while multiple tabs are selected

Priority: P1; layout: Performance

Before: Prepare A/B/C/D with B/C selected and double-click closing on.

Steps:

1. Release modifiers and double-click B.
2. Recreate with S[B+C] and D selected, then double-click one split half.

Expected:

- Only the clicked page closes, rather than the previous selection.
- The untouched split partner and other selected pages are not closed by the gesture.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-18-BAL Double-click while multiple tabs are selected

Priority: P1; layout: Balanced

Before: Prepare A/B/C/D with B/C selected and double-click closing on.

Steps:

1. Release modifiers and double-click B.
2. Recreate with S[B+C] and D selected, then double-click one split half.

Expected:

- Only the clicked page closes, rather than the previous selection.
- The untouched split partner and other selected pages are not closed by the gesture.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-18-COM Double-click while multiple tabs are selected

Priority: P1; layout: Comfortable

Before: Prepare A/B/C/D with B/C selected and double-click closing on.

Steps:

1. Release modifiers and double-click B.
2. Recreate with S[B+C] and D selected, then double-click one split half.

Expected:

- Only the clicked page closes, rather than the previous selection.
- The untouched split partner and other selected pages are not closed by the gesture.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-19-PER Double-click mute and close controls

Priority: P0; layout: Performance

Before: Prepare ordinary tabs and grouped splits with test audio and visible mute/close controls.

Steps:

1. Double-click the mute control.
2. Recreate and double-click the close control.
3. Repeat on ordinary tabs.

Expected:

- Mute does not invoke tab-body double-click closing.
- Close controls do not additionally close a partner or neighbor; markers in surviving pages remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-19-BAL Double-click mute and close controls

Priority: P0; layout: Balanced

Before: Prepare ordinary tabs and grouped splits with test audio and visible mute/close controls.

Steps:

1. Double-click the mute control.
2. Recreate and double-click the close control.
3. Repeat on ordinary tabs.

Expected:

- Mute does not invoke tab-body double-click closing.
- Close controls do not additionally close a partner or neighbor; markers in surviving pages remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-19-COM Double-click mute and close controls

Priority: P0; layout: Comfortable

Before: Prepare ordinary tabs and grouped splits with test audio and visible mute/close controls.

Steps:

1. Double-click the mute control.
2. Recreate and double-click the close control.
3. Repeat on ordinary tabs.

Expected:

- Mute does not invoke tab-body double-click closing.
- Close controls do not additionally close a partner or neighbor; markers in surviving pages remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-20-PER Blank areas and non-tab surfaces

Priority: P1; layout: Performance

Before: Prepare ordinary tabs, a split, a group and a bookmark folder with double-click closing on.

Steps:

1. Double-click blank tab-bar/sidebar space, the gap between split halves, a group heading, its disclosure control and a bookmark folder.

Expected:

- These surfaces do not become ordinary-tab close targets.
- Existing create, expand or edit actions may occur without closing unrelated tabs.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-20-BAL Blank areas and non-tab surfaces

Priority: P1; layout: Balanced

Before: Prepare ordinary tabs, a split, a group and a bookmark folder with double-click closing on.

Steps:

1. Double-click blank tab-bar/sidebar space, the gap between split halves, a group heading, its disclosure control and a bookmark folder.

Expected:

- These surfaces do not become ordinary-tab close targets.
- Existing create, expand or edit actions may occur without closing unrelated tabs.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-20-COM Blank areas and non-tab surfaces

Priority: P1; layout: Comfortable

Before: Prepare ordinary tabs, a split, a group and a bookmark folder with double-click closing on.

Steps:

1. Double-click blank tab-bar/sidebar space, the gap between split halves, a group heading, its disclosure control and a bookmark folder.

Expected:

- These surfaces do not become ordinary-tab close targets.
- Existing create, expand or edit actions may occur without closing unrelated tabs.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-21-PER Rapid triple-clicks and a scrolled list

Priority: P1; layout: Performance

Before: Prepare A/B/C/D with markers in C/D and double-click closing on.

Steps:

1. Triple-click B rapidly and stop input while the list settles.
2. Recreate and repeat on B inside a group after scrolling a long list.

Expected:

- No unrelated neighbor closes because the original tab disappeared.
- Record a video if the motion appears to form a second distinct gesture.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-21-BAL Rapid triple-clicks and a scrolled list

Priority: P1; layout: Balanced

Before: Prepare A/B/C/D with markers in C/D and double-click closing on.

Steps:

1. Triple-click B rapidly and stop input while the list settles.
2. Recreate and repeat on B inside a group after scrolling a long list.

Expected:

- No unrelated neighbor closes because the original tab disappeared.
- Record a video if the motion appears to form a second distinct gesture.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-21-COM Rapid triple-clicks and a scrolled list

Priority: P1; layout: Comfortable

Before: Prepare A/B/C/D with markers in C/D and double-click closing on.

Steps:

1. Triple-click B rapidly and stop input while the list settles.
2. Recreate and repeat on B inside a group after scrolling a long list.

Expected:

- No unrelated neighbor closes because the original tab disappeared.
- Record a video if the motion appears to form a second distinct gesture.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-22-PER Slow single clicks and drag release

Priority: P1; layout: Performance

Before: Prepare A/B/C with double-click closing on; note the system double-click interval.

Steps:

1. Click B twice farther apart than that interval.
2. Drag and release B, then single-click it.
3. Repeat with ordinary and grouped splits.

Expected:

- Slow clicks activate without closing.
- Finishing a drag does not produce an extra close; moved pages retain their markers.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-22-BAL Slow single clicks and drag release

Priority: P1; layout: Balanced

Before: Prepare A/B/C with double-click closing on; note the system double-click interval.

Steps:

1. Click B twice farther apart than that interval.
2. Drag and release B, then single-click it.
3. Repeat with ordinary and grouped splits.

Expected:

- Slow clicks activate without closing.
- Finishing a drag does not produce an extra close; moved pages retain their markers.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-22-COM Slow single clicks and drag release

Priority: P1; layout: Comfortable

Before: Prepare A/B/C with double-click closing on; note the system double-click interval.

Steps:

1. Click B twice farther apart than that interval.
2. Drag and release B, then single-click it.
3. Repeat with ordinary and grouped splits.

Expected:

- Slow clicks activate without closing.
- Finishing a drag does not produce an extra close; moved pages retain their markers.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-23-PER Double-click saved split entries

Priority: P0; layout: Performance

Before: Prepare a pinned split PS and split bookmark MS; distinguish saved entries from ordinary copies.

Steps:

1. With the preference off and on, double-click both halves of PS and the saved MS entry.
2. Check already-open and closed entries using their existing actions.

Expected:

- Saved entries retain their existing double-click behavior.
- Saved pairs are not split apart or deleted; unrelated pages are unaffected.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-23-BAL Double-click saved split entries

Priority: P0; layout: Balanced

Before: Prepare a pinned split PS and split bookmark MS; distinguish saved entries from ordinary copies.

Steps:

1. With the preference off and on, double-click both halves of PS and the saved MS entry.
2. Check already-open and closed entries using their existing actions.

Expected:

- Saved entries retain their existing double-click behavior.
- Saved pairs are not split apart or deleted; unrelated pages are unaffected.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### DBL-23-COM Double-click saved split entries

Priority: P0; layout: Comfortable

Before: Prepare a pinned split PS and split bookmark MS; distinguish saved entries from ordinary copies.

Steps:

1. With the preference off and on, double-click both halves of PS and the saved MS entry.
2. Check already-open and closed entries using their existing actions.

Expected:

- Saved entries retain their existing double-click behavior.
- Saved pairs are not split apart or deleted; unrelated pages are unaffected.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

## POS Close tabs by position

The clicked tab anchors the range in the current tab order, even when another page is active.

### POS-01-PER Close preceding tabs from the middle

Priority: P0; layout: Performance

Before: Prepare A/B/C/D/E/F with D active and positional closing on.

Steps:

1. Right-click D and choose Close Tabs Above.

Expected:

- A/B/C close; D/E/F remain in order.
- D remains active.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-01-BAL Close preceding tabs from the middle

Priority: P0; layout: Balanced

Before: Prepare A/B/C/D/E/F with D active and positional closing on.

Steps:

1. Right-click D and choose Close Tabs Above.

Expected:

- A/B/C close; D/E/F remain in order.
- D remains active.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-01-COM Close preceding tabs from the middle

Priority: P0; layout: Comfortable

Before: Prepare A/B/C/D/E/F with D active and positional closing on.

Steps:

1. Right-click D and choose Close Tabs to the Left.

Expected:

- A/B/C close; D/E/F remain in order.
- D remains active.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-02-PER Close following tabs from the middle

Priority: P0; layout: Performance

Before: Prepare A/B/C/D/E/F with C active and positional closing on.

Steps:

1. Right-click C and choose Close Tabs Below.

Expected:

- D/E/F close; A/B/C remain.
- C remains active.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-02-BAL Close following tabs from the middle

Priority: P0; layout: Balanced

Before: Prepare A/B/C/D/E/F with C active and positional closing on.

Steps:

1. Right-click C and choose Close Tabs Below.

Expected:

- D/E/F close; A/B/C remain.
- C remains active.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-02-COM Close following tabs from the middle

Priority: P0; layout: Comfortable

Before: Prepare A/B/C/D/E/F with C active and positional closing on.

Steps:

1. Right-click C and choose Close Tabs to the Right.

Expected:

- D/E/F close; A/B/C remain.
- C remains active.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-03-PER Inactive anchor with the active page retained

Priority: P0; layout: Performance

Before: Prepare A/B/C/D/E/F with F active and positional closing on.

Steps:

1. Right-click C and choose Close Tabs Above.

Expected:

- Only A/B close; C/D/E/F remain.
- The anchor is C rather than F, and F is not unnecessarily deactivated.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-03-BAL Inactive anchor with the active page retained

Priority: P0; layout: Balanced

Before: Prepare A/B/C/D/E/F with F active and positional closing on.

Steps:

1. Right-click C and choose Close Tabs Above.

Expected:

- Only A/B close; C/D/E/F remain.
- The anchor is C rather than F, and F is not unnecessarily deactivated.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-03-COM Inactive anchor with the active page retained

Priority: P0; layout: Comfortable

Before: Prepare A/B/C/D/E/F with F active and positional closing on.

Steps:

1. Right-click C and choose Close Tabs to the Left.

Expected:

- Only A/B close; C/D/E/F remain.
- The anchor is C rather than F, and F is not unnecessarily deactivated.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-04-PER Inactive anchor with the active page targeted

Priority: P0; layout: Performance

Before: Prepare A/B/C/D/E/F with F active and positional closing on.

Steps:

1. Right-click C and choose Close Tabs Below.

Expected:

- Only D/E/F close; A/B/C remain.
- A surviving page becomes active without stale or blank content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-04-BAL Inactive anchor with the active page targeted

Priority: P0; layout: Balanced

Before: Prepare A/B/C/D/E/F with F active and positional closing on.

Steps:

1. Right-click C and choose Close Tabs Below.

Expected:

- Only D/E/F close; A/B/C remain.
- A surviving page becomes active without stale or blank content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-04-COM Inactive anchor with the active page targeted

Priority: P0; layout: Comfortable

Before: Prepare A/B/C/D/E/F with F active and positional closing on.

Steps:

1. Right-click C and choose Close Tabs to the Right.

Expected:

- Only D/E/F close; A/B/C remain.
- A surviving page becomes active without stale or blank content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-05-PER First, last and only tab boundaries

Priority: P0; layout: Performance

Before: Prepare A/B/C, then a separate setup with only ordinary A. Positional closing is on.

Steps:

1. Check Close Tabs Above on A and Close Tabs Below on C.
2. With only A, inspect both directions.

Expected:

- Empty directions are present but disabled.
- Both are disabled for the only ordinary tab; protected entries do not count as targets.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-05-BAL First, last and only tab boundaries

Priority: P0; layout: Balanced

Before: Prepare A/B/C, then a separate setup with only ordinary A. Positional closing is on.

Steps:

1. Check Close Tabs Above on A and Close Tabs Below on C.
2. With only A, inspect both directions.

Expected:

- Empty directions are present but disabled.
- Both are disabled for the only ordinary tab; protected entries do not count as targets.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-05-COM First, last and only tab boundaries

Priority: P0; layout: Comfortable

Before: Prepare A/B/C, then a separate setup with only ordinary A. Positional closing is on.

Steps:

1. Check Close Tabs to the Left on A and Close Tabs to the Right on C.
2. With only A, inspect both directions.

Expected:

- Empty directions are present but disabled.
- Both are disabled for the only ordinary tab; protected entries do not count as targets.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-06-PER Use the order after dragging

Priority: P0; layout: Performance

Before: Prepare A/B/C/D with positional closing on.

Steps:

1. Drag D before A and wait for D/A/B/C order.
2. Right-click B and choose Close Tabs Above.

Expected:

- D/A close; B/C remain.
- The result follows the updated order rather than the original opening order.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-06-BAL Use the order after dragging

Priority: P0; layout: Balanced

Before: Prepare A/B/C/D with positional closing on.

Steps:

1. Drag D before A and wait for D/A/B/C order.
2. Right-click B and choose Close Tabs Above.

Expected:

- D/A close; B/C remain.
- The result follows the updated order rather than the original opening order.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-06-COM Use the order after dragging

Priority: P0; layout: Comfortable

Before: Prepare A/B/C/D with positional closing on.

Steps:

1. Drag D before A and wait for D/A/B/C order.
2. Right-click B and choose Close Tabs to the Left.

Expected:

- D/A close; B/C remain.
- The result follows the updated order rather than the original opening order.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-07-COMMON Changing layout updates direction labels

Priority: P1; layout: Common

Before: Prepare A/B/C/D with positional closing on.

Steps:

1. Change from Performance to Comfortable and reopen C's menu.
2. Change to Balanced and reopen it again.

Expected:

- Comfortable uses Left/Right and Balanced uses Above/Below.
- Ordering and protection rules remain consistent; split-pane orientation does not determine tab-bar directions.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-08-PER Include targets outside the visible area

Priority: P1; layout: Performance

Before: Prepare at least 20 uniquely named tabs and use the tenth as anchor.

Steps:

1. Scroll so some preceding and following tabs are off screen.
2. Close one direction and compare with the complete starting order.

Expected:

- All eligible targets close, including off-screen pages.
- Scrolling does not change the anchor or restrict closing to visible rows.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-08-BAL Include targets outside the visible area

Priority: P1; layout: Balanced

Before: Prepare at least 20 uniquely named tabs and use the tenth as anchor.

Steps:

1. Scroll so some preceding and following tabs are off screen.
2. Close one direction and compare with the complete starting order.

Expected:

- All eligible targets close, including off-screen pages.
- Scrolling does not change the anchor or restrict closing to visible rows.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-08-COM Include targets outside the visible area

Priority: P1; layout: Comfortable

Before: Prepare at least 20 uniquely named tabs and use the tenth as anchor.

Steps:

1. Scroll so some preceding and following tabs are off screen.
2. Close one direction and compare with the complete starting order.

Expected:

- All eligible targets close, including off-screen pages.
- Scrolling does not change the anchor or restrict closing to visible rows.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-09-PER Right-click title and icon areas

Priority: P1; layout: Performance

Before: Prepare A/B/C with positional closing on.

Steps:

1. Right-click B's title and icon separately.
2. Repeat with a long title and a loading page.
3. Inspect blank-space behavior separately.

Expected:

- Both tab hit areas anchor on B.
- A blank area does not act as an old tab or target all pages.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-09-BAL Right-click title and icon areas

Priority: P1; layout: Balanced

Before: Prepare A/B/C with positional closing on.

Steps:

1. Right-click B's title and icon separately.
2. Repeat with a long title and a loading page.
3. Inspect blank-space behavior separately.

Expected:

- Both tab hit areas anchor on B.
- A blank area does not act as an old tab or target all pages.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-09-COM Right-click title and icon areas

Priority: P1; layout: Comfortable

Before: Prepare A/B/C with positional closing on.

Steps:

1. Right-click B's title and icon separately.
2. Repeat with a long title and a loading page.
3. Inspect blank-space behavior separately.

Expected:

- Both tab hit areas anchor on B.
- A blank area does not act as an old tab or target all pages.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-10-PER Protected entries do not enable an empty range

Priority: P0; layout: Performance

Before: Prepare ordinary A/B plus pins and, in vertical layouts, opened bookmark pages.

Steps:

1. Inspect the outer directions on first A and last B.
2. Keep only ordinary B with protected entries and inspect both directions and Close Other Tabs.

Expected:

- Protected entries do not enable an otherwise empty range.
- With only B eligible, no other-tab action reloads, activates or closes a protected page.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-10-BAL Protected entries do not enable an empty range

Priority: P0; layout: Balanced

Before: Prepare ordinary A/B plus pins and, in vertical layouts, opened bookmark pages.

Steps:

1. Inspect the outer directions on first A and last B.
2. Keep only ordinary B with protected entries and inspect both directions and Close Other Tabs.

Expected:

- Protected entries do not enable an otherwise empty range.
- With only B eligible, no other-tab action reloads, activates or closes a protected page.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-10-COM Protected entries do not enable an empty range

Priority: P0; layout: Comfortable

Before: Prepare ordinary A/B plus pins and, in vertical layouts, opened bookmark pages.

Steps:

1. Inspect the outer directions on first A and last B.
2. Keep only ordinary B with protected entries and inspect both directions and Close Other Tabs.

Expected:

- Protected entries do not enable an otherwise empty range.
- With only B eligible, no other-tab action reloads, activates or closes a protected page.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-11-PER Separate pages with the same URL and title

Priority: P0; layout: Performance

Before: Prepare three separate pages with matching URL/title but markers A/B/C, in that order.

Steps:

1. From middle B, close preceding tabs.
2. Recreate and close following tabs.

Expected:

- Only A closes in the first run and only C in the second.
- The original B remains; matching URLs, titles or icons do not merge separate targets.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-11-BAL Separate pages with the same URL and title

Priority: P0; layout: Balanced

Before: Prepare three separate pages with matching URL/title but markers A/B/C, in that order.

Steps:

1. From middle B, close preceding tabs.
2. Recreate and close following tabs.

Expected:

- Only A closes in the first run and only C in the second.
- The original B remains; matching URLs, titles or icons do not merge separate targets.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-11-COM Separate pages with the same URL and title

Priority: P0; layout: Comfortable

Before: Prepare three separate pages with matching URL/title but markers A/B/C, in that order.

Steps:

1. From middle B, close preceding tabs.
2. Recreate and close following tabs.

Expected:

- Only A closes in the first run and only C in the second.
- The original B remains; matching URLs, titles or icons do not merge separate targets.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-12-PER Navigate the anchor before closing

Priority: P1; layout: Performance

Before: Prepare A/B/C, then navigate B to another ordinary page; positional closing is on.

Steps:

1. Wait for the title to update and close one direction from B.
2. Repeat with a load-error or untitled page as B.

Expected:

- B stays open and anchors by its current position.
- Old URLs or titles do not change which neighboring pages close.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-12-BAL Navigate the anchor before closing

Priority: P1; layout: Balanced

Before: Prepare A/B/C, then navigate B to another ordinary page; positional closing is on.

Steps:

1. Wait for the title to update and close one direction from B.
2. Repeat with a load-error or untitled page as B.

Expected:

- B stays open and anchors by its current position.
- Old URLs or titles do not change which neighboring pages close.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-12-COM Navigate the anchor before closing

Priority: P1; layout: Comfortable

Before: Prepare A/B/C, then navigate B to another ordinary page; positional closing is on.

Steps:

1. Wait for the title to update and close one direction from B.
2. Repeat with a load-error or untitled page as B.

Expected:

- B stays open and anchors by its current position.
- Old URLs or titles do not change which neighboring pages close.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-13-PER Cancel and operate the menu by keyboard

Priority: P1; layout: Performance

Before: Prepare marked A/B/C with positional closing on.

Steps:

1. Open B's menu and press Escape; reopen and dismiss it by clicking outside.
2. Reopen, choose the preceding action with arrow keys and press Return.

Expected:

- Dismissing the menu closes nothing and does not trigger a delayed action.
- Keyboard execution closes A only; B/C remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-13-BAL Cancel and operate the menu by keyboard

Priority: P1; layout: Balanced

Before: Prepare marked A/B/C with positional closing on.

Steps:

1. Open B's menu and press Escape; reopen and dismiss it by clicking outside.
2. Reopen, choose the preceding action with arrow keys and press Return.

Expected:

- Dismissing the menu closes nothing and does not trigger a delayed action.
- Keyboard execution closes A only; B/C remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-13-COM Cancel and operate the menu by keyboard

Priority: P1; layout: Comfortable

Before: Prepare marked A/B/C with positional closing on.

Steps:

1. Open B's menu and press Escape; reopen and dismiss it by clicking outside.
2. Reopen, choose the preceding action with arrow keys and press Return.

Expected:

- Dismissing the menu closes nothing and does not trigger a delayed action.
- Keyboard execution closes A only; B/C remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-14-PER Direction availability after repeated closes

Priority: P0; layout: Performance

Before: Prepare A/B/C/D/E with positional closing on.

Steps:

1. From C, close preceding tabs and inspect that direction again.
2. Close following tabs and inspect both directions and Close Other Tabs.

Expected:

- The first result is C/D/E; the second is C only.
- Empty actions become disabled without closing the anchor or another Space.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-14-BAL Direction availability after repeated closes

Priority: P0; layout: Balanced

Before: Prepare A/B/C/D/E with positional closing on.

Steps:

1. From C, close preceding tabs and inspect that direction again.
2. Close following tabs and inspect both directions and Close Other Tabs.

Expected:

- The first result is C/D/E; the second is C only.
- Empty actions become disabled without closing the anchor or another Space.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-14-COM Direction availability after repeated closes

Priority: P0; layout: Comfortable

Before: Prepare A/B/C/D/E with positional closing on.

Steps:

1. From C, close preceding tabs and inspect that direction again.
2. Close following tabs and inspect both directions and Close Other Tabs.

Expected:

- The first result is C/D/E; the second is C only.
- Empty actions become disabled without closing the anchor or another Space.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-15-PER No ordinary tabs means no invented anchor

Priority: P0; layout: Performance

Before: Use a separate Space containing only test pins/bookmarks and no ordinary page; mark pages in another Space.

Steps:

1. Right-click blank tab-bar/sidebar areas.
2. If an existing directional or Close Other Tabs shortcut is available, try it without an ordinary tab focused.

Expected:

- No old tab is used as an anchor and saved entries are not opened to create targets.
- Other Spaces and windows remain unchanged and the app does not crash.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-15-BAL No ordinary tabs means no invented anchor

Priority: P0; layout: Balanced

Before: Use a separate Space containing only test pins/bookmarks and no ordinary page; mark pages in another Space.

Steps:

1. Right-click blank tab-bar/sidebar areas.
2. If an existing directional or Close Other Tabs shortcut is available, try it without an ordinary tab focused.

Expected:

- No old tab is used as an anchor and saved entries are not opened to create targets.
- Other Spaces and windows remain unchanged and the app does not crash.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### POS-15-COM No ordinary tabs means no invented anchor

Priority: P0; layout: Comfortable

Before: Use a separate Space containing only test pins/bookmarks and no ordinary page; mark pages in another Space.

Steps:

1. Right-click blank tab-bar/sidebar areas.
2. If an existing directional or Close Other Tabs shortcut is available, try it without an ordinary tab focused.

Expected:

- No old tab is used as an anchor and saved entries are not opened to create targets.
- Other Spaces and windows remain unchanged and the app does not crash.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

## SPL Split views

Directional closing and Close Other Tabs treat ordinary splits as complete units. Confirmation can still leave a partially completed batch.

### SPL-01-PER Retain a split anchor when closing before it

Priority: P0; layout: Performance

Before: Prepare A, S[B+C], D, E with positional closing on.

Steps:

1. Right-click either split half and choose Close Tabs Above.

Expected:

- Only A closes; B/C/D/E remain.
- B/C stay paired with their original markers.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-01-BAL Retain a split anchor when closing before it

Priority: P0; layout: Balanced

Before: Prepare A, S[B+C], D, E with positional closing on.

Steps:

1. Right-click either split half and choose Close Tabs Above.

Expected:

- Only A closes; B/C/D/E remain.
- B/C stay paired with their original markers.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-01-COM Retain a split anchor when closing before it

Priority: P0; layout: Comfortable

Before: Prepare A, S[B+C], D, E with positional closing on.

Steps:

1. Right-click either split half and choose Close Tabs to the Left.

Expected:

- Only A closes; B/C/D/E remain.
- B/C stay paired with their original markers.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-02-PER Retain a split anchor when closing after it

Priority: P0; layout: Performance

Before: Prepare A, S[B+C], D, E with positional closing on.

Steps:

1. Right-click the other split half and choose Close Tabs Below.

Expected:

- D/E close; A/B/C remain.
- The split anchor stays intact regardless of pane focus or position.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-02-BAL Retain a split anchor when closing after it

Priority: P0; layout: Balanced

Before: Prepare A, S[B+C], D, E with positional closing on.

Steps:

1. Right-click the other split half and choose Close Tabs Below.

Expected:

- D/E close; A/B/C remain.
- The split anchor stays intact regardless of pane focus or position.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-02-COM Retain a split anchor when closing after it

Priority: P0; layout: Comfortable

Before: Prepare A, S[B+C], D, E with positional closing on.

Steps:

1. Right-click the other split half and choose Close Tabs to the Right.

Expected:

- D/E close; A/B/C remain.
- The split anchor stays intact regardless of pane focus or position.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-03-PER Close both panes of a target split

Priority: P0; layout: Performance

Before: Prepare A, S[B+C], D, E with positional closing on.

Steps:

1. From E, close preceding tabs.
2. Recreate and from A close following tabs.

Expected:

- Both B/C close each time; no orphan pane remains.
- The anchor survives and the other survivors match the chosen direction.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-03-BAL Close both panes of a target split

Priority: P0; layout: Balanced

Before: Prepare A, S[B+C], D, E with positional closing on.

Steps:

1. From E, close preceding tabs.
2. Recreate and from A close following tabs.

Expected:

- Both B/C close each time; no orphan pane remains.
- The anchor survives and the other survivors match the chosen direction.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-03-COM Close both panes of a target split

Priority: P0; layout: Comfortable

Before: Prepare A, S[B+C], D, E with positional closing on.

Steps:

1. From E, close preceding tabs.
2. Recreate and from A close following tabs.

Expected:

- Both B/C close each time; no orphan pane remains.
- The anchor survives and the other survivors match the chosen direction.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-04-PER Swap panes and change split orientation

Priority: P1; layout: Performance

Before: Prepare A, S[B+C], D with positional closing on.

Steps:

1. Swap B/C, then change the split to a top/bottom arrangement.
2. From the split, choose Close Tabs Below.

Expected:

- D closes and both split pages remain.
- Tab-bar directions follow the browser layout rather than the arrangement inside the split.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-04-BAL Swap panes and change split orientation

Priority: P1; layout: Balanced

Before: Prepare A, S[B+C], D with positional closing on.

Steps:

1. Swap B/C, then change the split to a top/bottom arrangement.
2. From the split, choose Close Tabs Below.

Expected:

- D closes and both split pages remain.
- Tab-bar directions follow the browser layout rather than the arrangement inside the split.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-04-COM Swap panes and change split orientation

Priority: P1; layout: Comfortable

Before: Prepare A, S[B+C], D with positional closing on.

Steps:

1. Swap B/C, then change the split to a top/bottom arrangement.
2. From the split, choose Close Tabs to the Right.

Expected:

- D closes and both split pages remain.
- Tab-bar directions follow the browser layout rather than the arrangement inside the split.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-05-PER Close Other Tabs retains the whole split

Priority: P0; layout: Performance

Before: Prepare A, S[B+C], D and pin P; also keep a saved bookmark M, opened as a protected page only in vertical layouts.

Steps:

1. From B or C, choose Close Other Tabs.

Expected:

- A/D close and B/C stay paired.
- P, the saved bookmark and any protected bookmark page remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-05-BAL Close Other Tabs retains the whole split

Priority: P0; layout: Balanced

Before: Prepare A, S[B+C], D and pin P; also keep a saved bookmark M, opened as a protected page only in vertical layouts.

Steps:

1. From B or C, choose Close Other Tabs.

Expected:

- A/D close and B/C stay paired.
- P, the saved bookmark and any protected bookmark page remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-05-COM Close Other Tabs retains the whole split

Priority: P0; layout: Comfortable

Before: Prepare A, S[B+C], D and pin P; also keep a saved bookmark M, opened as a protected page only in vertical layouts.

Steps:

1. From B or C, choose Close Other Tabs.

Expected:

- A/D close and B/C stay paired.
- P, the saved bookmark and any protected bookmark page remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-06-PER Target one of several splits

Priority: P1; layout: Performance

Before: Prepare A, S1[B+C], D, S2[E+F], G with positional closing on.

Steps:

1. From D, choose Close Tabs Below.

Expected:

- E/F/G close; A/S1/D remain.
- S1 stays paired and neither target pane is left behind.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-06-BAL Target one of several splits

Priority: P1; layout: Balanced

Before: Prepare A, S1[B+C], D, S2[E+F], G with positional closing on.

Steps:

1. From D, choose Close Tabs Below.

Expected:

- E/F/G close; A/S1/D remain.
- S1 stays paired and neither target pane is left behind.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-06-COM Target one of several splits

Priority: P1; layout: Comfortable

Before: Prepare A, S1[B+C], D, S2[E+F], G with positional closing on.

Steps:

1. From D, choose Close Tabs to the Right.

Expected:

- E/F/G close; A/S1/D remain.
- S1 stays paired and neither target pane is left behind.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-07-PER A split anchor inside a group

Priority: P1; layout: Performance

Before: Prepare A, G[B,S[C+D],E], F with positional closing on.

Steps:

1. From either half of S, choose Close Tabs Below.

Expected:

- E/F close; A/B/C/D remain.
- C/D retain their split and group membership.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-07-BAL A split anchor inside a group

Priority: P1; layout: Balanced

Before: Prepare A, G[B,S[C+D],E], F with positional closing on.

Steps:

1. From either half of S, choose Close Tabs Below.

Expected:

- E/F close; A/B/C/D remain.
- C/D retain their split and group membership.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-07-COM A split anchor inside a group

Priority: P1; layout: Comfortable

Before: Prepare A, G[B,S[C+D],E], F with positional closing on.

Steps:

1. From either half of S, choose Close Tabs to the Right.

Expected:

- E/F close; A/B/C/D remain.
- C/D retain their split and group membership.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-08-PER Reopen closed split pages

Priority: P2; layout: Performance

Before: Prepare A, S[B+C], D without unsaved text.

Steps:

1. From A, close following tabs and record the result.
2. Use Recently Closed or Command-Shift-T, repeating as necessary.

Expected:

- Record which URLs reopen.
- Record pairing, orientation, size ratio and group membership separately; this exploratory case does not assume that one reopen action restores an entire split.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-08-BAL Reopen closed split pages

Priority: P2; layout: Balanced

Before: Prepare A, S[B+C], D without unsaved text.

Steps:

1. From A, close following tabs and record the result.
2. Use Recently Closed or Command-Shift-T, repeating as necessary.

Expected:

- Record which URLs reopen.
- Record pairing, orientation, size ratio and group membership separately; this exploratory case does not assume that one reopen action restores an entire split.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-08-COM Reopen closed split pages

Priority: P2; layout: Comfortable

Before: Prepare A, S[B+C], D without unsaved text.

Steps:

1. From A, close following tabs and record the result.
2. Use Recently Closed or Command-Shift-T, repeating as necessary.

Expected:

- Record which URLs reopen.
- Record pairing, orientation, size ratio and group membership separately; this exploratory case does not assume that one reopen action restores an entire split.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-09-PER A single split has no other-tab targets

Priority: P0; layout: Performance

Before: The ordinary area contains only S[B+C], with pins and saved bookmarks outside it.

Steps:

1. From each half, inspect both directions and Close Other Tabs.

Expected:

- All three actions have no ordinary target and are disabled.
- Neither partner counts as another tab; both original pages and protected entries remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-09-BAL A single split has no other-tab targets

Priority: P0; layout: Balanced

Before: The ordinary area contains only S[B+C], with pins and saved bookmarks outside it.

Steps:

1. From each half, inspect both directions and Close Other Tabs.

Expected:

- All three actions have no ordinary target and are disabled.
- Neither partner counts as another tab; both original pages and protected entries remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-09-COM A single split has no other-tab targets

Priority: P0; layout: Comfortable

Before: The ordinary area contains only S[B+C], with pins and saved bookmarks outside it.

Steps:

1. From each half, inspect both directions and Close Other Tabs.

Expected:

- All three actions have no ordinary target and are disabled.
- Neither partner counts as another tab; both original pages and protected entries remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-10-PER Splits at the first and last positions

Priority: P0; layout: Performance

Before: Prepare S[B+C], D, S[E+F] with positional closing on.

Steps:

1. Inspect before the first split and after the last split.
2. Recreate and close either direction from D.

Expected:

- The outer empty directions are disabled.
- From D, preceding closes B/C only and following closes E/F only.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-10-BAL Splits at the first and last positions

Priority: P0; layout: Balanced

Before: Prepare S[B+C], D, S[E+F] with positional closing on.

Steps:

1. Inspect before the first split and after the last split.
2. Recreate and close either direction from D.

Expected:

- The outer empty directions are disabled.
- From D, preceding closes B/C only and following closes E/F only.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-10-COM Splits at the first and last positions

Priority: P0; layout: Comfortable

Before: Prepare S[B+C], D, S[E+F] with positional closing on.

Steps:

1. Inspect before the first split and after the last split.
2. Recreate and close either direction from D.

Expected:

- The outer empty directions are disabled.
- From D, preceding closes B/C only and following closes E/F only.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-11-PER-cancel One target pane has unsaved changes

Priority: P0; layout: Performance; variant: Cancel

Before: Prepare A, S[B+C], D; B has unsaved text and C is normal.

Steps:

1. From A, close following tabs and choose this case's Cancel or Leave response for B.
2. Record B/C/D individually.
3. Recreate with the unsaved page on the other side.

Expected:

- Leave allows all targets to close while A remains.
- Cancel retains B and its draft; other targets may already close. The remaining page stays usable even if the split dissolves.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-11-PER-leave One target pane has unsaved changes

Priority: P0; layout: Performance; variant: Confirm / Leave

Before: Prepare A, S[B+C], D; B has unsaved text and C is normal.

Steps:

1. From A, close following tabs and choose this case's Cancel or Leave response for B.
2. Record B/C/D individually.
3. Recreate with the unsaved page on the other side.

Expected:

- Leave allows all targets to close while A remains.
- Cancel retains B and its draft; other targets may already close. The remaining page stays usable even if the split dissolves.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-11-BAL-cancel One target pane has unsaved changes

Priority: P0; layout: Balanced; variant: Cancel

Before: Prepare A, S[B+C], D; B has unsaved text and C is normal.

Steps:

1. From A, close following tabs and choose this case's Cancel or Leave response for B.
2. Record B/C/D individually.
3. Recreate with the unsaved page on the other side.

Expected:

- Leave allows all targets to close while A remains.
- Cancel retains B and its draft; other targets may already close. The remaining page stays usable even if the split dissolves.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-11-BAL-leave One target pane has unsaved changes

Priority: P0; layout: Balanced; variant: Confirm / Leave

Before: Prepare A, S[B+C], D; B has unsaved text and C is normal.

Steps:

1. From A, close following tabs and choose this case's Cancel or Leave response for B.
2. Record B/C/D individually.
3. Recreate with the unsaved page on the other side.

Expected:

- Leave allows all targets to close while A remains.
- Cancel retains B and its draft; other targets may already close. The remaining page stays usable even if the split dissolves.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-11-COM-cancel One target pane has unsaved changes

Priority: P0; layout: Comfortable; variant: Cancel

Before: Prepare A, S[B+C], D; B has unsaved text and C is normal.

Steps:

1. From A, close following tabs and choose this case's Cancel or Leave response for B.
2. Record B/C/D individually.
3. Recreate with the unsaved page on the other side.

Expected:

- Leave allows all targets to close while A remains.
- Cancel retains B and its draft; other targets may already close. The remaining page stays usable even if the split dissolves.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-11-COM-leave One target pane has unsaved changes

Priority: P0; layout: Comfortable; variant: Confirm / Leave

Before: Prepare A, S[B+C], D; B has unsaved text and C is normal.

Steps:

1. From A, close following tabs and choose this case's Cancel or Leave response for B.
2. Record B/C/D individually.
3. Recreate with the unsaved page on the other side.

Expected:

- Leave allows all targets to close while A remains.
- Cancel retains B and its draft; other targets may already close. The remaining page stays usable even if the split dissolves.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-12-PER Both target panes have unsaved changes

Priority: P1; layout: Performance

Before: Prepare A, S[B+C] with different drafts in B/C.

Steps:

1. From A, close following tabs.
2. If separate prompts appear, cancel one and accept the other; record any combined prompt instead of assuming a fixed number.

Expected:

- A canceled document and its text remain; accepted closes follow the displayed confirmation.
- No endless prompts or later disappearance of the canceled document occurs.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-12-BAL Both target panes have unsaved changes

Priority: P1; layout: Balanced

Before: Prepare A, S[B+C] with different drafts in B/C.

Steps:

1. From A, close following tabs.
2. If separate prompts appear, cancel one and accept the other; record any combined prompt instead of assuming a fixed number.

Expected:

- A canceled document and its text remain; accepted closes follow the displayed confirmation.
- No endless prompts or later disappearance of the canceled document occurs.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-12-COM Both target panes have unsaved changes

Priority: P1; layout: Comfortable

Before: Prepare A, S[B+C] with different drafts in B/C.

Steps:

1. From A, close following tabs.
2. If separate prompts appear, cancel one and accept the other; record any combined prompt instead of assuming a fixed number.

Expected:

- A canceled document and its text remain; accepted closes follow the displayed confirmation.
- No endless prompts or later disappearance of the canceled document occurs.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-13-PER Preserve the split anchor's page state and ratio

Priority: P1; layout: Performance

Before: Prepare A, S[B+C], D with a non-default split ratio and markers in B/C.

Steps:

1. From S, close preceding tabs.
2. Recreate and test following tabs and Close Other Tabs separately.

Expected:

- Both original panes retain their markers, opening IDs, pairing, orientation and ratio.
- Preserving a split does not reopen or replace its pages.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-13-BAL Preserve the split anchor's page state and ratio

Priority: P1; layout: Balanced

Before: Prepare A, S[B+C], D with a non-default split ratio and markers in B/C.

Steps:

1. From S, close preceding tabs.
2. Recreate and test following tabs and Close Other Tabs separately.

Expected:

- Both original panes retain their markers, opening IDs, pairing, orientation and ratio.
- Preserving a split does not reopen or replace its pages.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-13-COM Preserve the split anchor's page state and ratio

Priority: P1; layout: Comfortable

Before: Prepare A, S[B+C], D with a non-default split ratio and markers in B/C.

Steps:

1. From S, close preceding tabs.
2. Recreate and test following tabs and Close Other Tabs separately.

Expected:

- Both original panes retain their markers, opening IDs, pairing, orientation and ratio.
- Preserving a split does not reopen or replace its pages.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-14-PER Recalculate after separating or re-pairing panes

Priority: P1; layout: Performance

Before: Prepare A, S[B+C], D with positional closing on.

Steps:

1. Separate B/C using the existing split action, note their order and close following tabs from B.
2. Recreate, pair C/D instead and close following tabs from A.

Expected:

- Separated pages follow their current individual positions without protecting an old partner.
- Re-paired targets close as the new complete pair.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-14-BAL Recalculate after separating or re-pairing panes

Priority: P1; layout: Balanced

Before: Prepare A, S[B+C], D with positional closing on.

Steps:

1. Separate B/C using the existing split action, note their order and close following tabs from B.
2. Recreate, pair C/D instead and close following tabs from A.

Expected:

- Separated pages follow their current individual positions without protecting an old partner.
- Re-paired targets close as the new complete pair.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-14-COM Recalculate after separating or re-pairing panes

Priority: P1; layout: Comfortable

Before: Prepare A, S[B+C], D with positional closing on.

Steps:

1. Separate B/C using the existing split action, note their order and close following tabs from B.
2. Recreate, pair C/D instead and close following tabs from A.

Expected:

- Separated pages follow their current individual positions without protecting an old partner.
- Re-paired targets close as the new complete pair.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-15-PER Group heading protects its internal split

Priority: P0; layout: Performance

Before: Prepare A, G[B,S[C+D],E], F with positional closing on.

Steps:

1. From the group heading, close preceding and following tabs in separate runs.
2. Repeat while the group is collapsed.

Expected:

- Only A closes before the group and only F after it.
- All members and the C/D split retain their original markers.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-15-BAL Group heading protects its internal split

Priority: P0; layout: Balanced

Before: Prepare A, G[B,S[C+D],E], F with positional closing on.

Steps:

1. From the group heading, close preceding and following tabs in separate runs.
2. Repeat while the group is collapsed.

Expected:

- Only A closes before the group and only F after it.
- All members and the C/D split retain their original markers.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-15-COM Group heading protects its internal split

Priority: P0; layout: Comfortable

Before: Prepare A, G[B,S[C+D],E], F with positional closing on.

Steps:

1. From the group heading, close preceding and following tabs in separate runs.
2. Repeat while the group is collapsed.

Expected:

- Only A closes before the group and only F after it.
- All members and the C/D split retain their original markers.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-16-PER A split with one protected pane

Priority: P2; layout: Performance

Before: Run only if the normal UI permits a split containing a pin/bookmark page and an ordinary partner.

Steps:

1. Record both pages and from an outside ordinary tab test directional closing and Close Other Tabs.
2. If this arrangement is unavailable, mark Skipped with the UI limitation.

Expected:

- A protected pane protects the entire pair from ordinary batch closing.
- An arrangement that cannot be created through normal UI is not counted as a pass.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-16-BAL A split with one protected pane

Priority: P2; layout: Balanced

Before: Run only if the normal UI permits a split containing a pin/bookmark page and an ordinary partner.

Steps:

1. Record both pages and from an outside ordinary tab test directional closing and Close Other Tabs.
2. If this arrangement is unavailable, mark Skipped with the UI limitation.

Expected:

- A protected pane protects the entire pair from ordinary batch closing.
- An arrangement that cannot be created through normal UI is not counted as a pass.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SPL-16-COM A split with one protected pane

Priority: P2; layout: Comfortable

Before: Run only if the normal UI permits a split containing a pin/bookmark page and an ordinary partner.

Steps:

1. Record both pages and from an outside ordinary tab test directional closing and Close Other Tabs.
2. If this arrangement is unavailable, mark Skipped with the UI limitation.

Expected:

- A protected pane protects the entire pair from ordinary batch closing.
- An arrangement that cannot be created through normal UI is not counted as a pass.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

## PIN Pinned tabs and splits

Ordinary batch closing protects pins. Explicitly closing an open pin does not remove its saved entry.

### PIN-01-PER Directional closing protects an open pin

Priority: P0; layout: Performance

Before: Open test pin P with a marker and ordinary A/B/C.

Steps:

1. From B, close preceding tabs.
2. Recreate the ordinary sequence and close following tabs.
3. Return to P and compare its marker and opening ID.

Expected:

- Only ordinary directional targets close.
- Both P's saved entry and original open page remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-01-BAL Directional closing protects an open pin

Priority: P0; layout: Balanced

Before: Open test pin P with a marker and ordinary A/B/C.

Steps:

1. From B, close preceding tabs.
2. Recreate the ordinary sequence and close following tabs.
3. Return to P and compare its marker and opening ID.

Expected:

- Only ordinary directional targets close.
- Both P's saved entry and original open page remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-01-COM Directional closing protects an open pin

Priority: P0; layout: Comfortable

Before: Open test pin P with a marker and ordinary A/B/C.

Steps:

1. From B, close preceding tabs.
2. Recreate the ordinary sequence and close following tabs.
3. Return to P and compare its marker and opening ID.

Expected:

- Only ordinary directional targets close.
- Both P's saved entry and original open page remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-02-PER Close Other Tabs protects all pins

Priority: P0; layout: Performance

Before: Open test pins P/Q with markers and ordinary A/B/C.

Steps:

1. From B, choose Close Other Tabs.
2. Inspect P/Q.

Expected:

- Only A/C close.
- B/P/Q remain, with pin markers and opening IDs unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-02-BAL Close Other Tabs protects all pins

Priority: P0; layout: Balanced

Before: Open test pins P/Q with markers and ordinary A/B/C.

Steps:

1. From B, choose Close Other Tabs.
2. Inspect P/Q.

Expected:

- Only A/C close.
- B/P/Q remain, with pin markers and opening IDs unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-02-COM Close Other Tabs protects all pins

Priority: P0; layout: Comfortable

Before: Open test pins P/Q with markers and ordinary A/B/C.

Steps:

1. From B, choose Close Other Tabs.
2. Inspect P/Q.

Expected:

- Only A/C close.
- B/P/Q remain, with pin markers and opening IDs unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-03-PER Saved pins have no positional menu items

Priority: P0; layout: Performance

Before: Prepare an open test pin P, a closed test pin Q and a pinned split.

Steps:

1. Right-click each saved entry.

Expected:

- The new directional actions are absent.
- Existing explicit Close remains available when applicable; a closed entry does not become an ordinary anchor.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-03-BAL Saved pins have no positional menu items

Priority: P0; layout: Balanced

Before: Prepare an open test pin P, a closed test pin Q and a pinned split.

Steps:

1. Right-click each saved entry.

Expected:

- The new directional actions are absent.
- Existing explicit Close remains available when applicable; a closed entry does not become an ordinary anchor.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-03-COM Saved pins have no positional menu items

Priority: P0; layout: Comfortable

Before: Prepare an open test pin P, a closed test pin Q and a pinned split.

Steps:

1. Right-click each saved entry.

Expected:

- The new directional actions are absent.
- Existing explicit Close remains available when applicable; a closed entry does not become an ordinary anchor.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-04-PER Protect a pinned split as a whole

Priority: P0; layout: Performance

Before: Open pinned split PS[P+Q] with separate markers and ordinary A/B/C.

Steps:

1. From B, test Close Other Tabs or a directional close.
2. Inspect both PS panes.

Expected:

- Both original pages, markers and the saved pair remain.
- Neither half is accidentally targeted as an ordinary tab.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-04-BAL Protect a pinned split as a whole

Priority: P0; layout: Balanced

Before: Open pinned split PS[P+Q] with separate markers and ordinary A/B/C.

Steps:

1. From B, test Close Other Tabs or a directional close.
2. Inspect both PS panes.

Expected:

- Both original pages, markers and the saved pair remain.
- Neither half is accidentally targeted as an ordinary tab.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-04-COM Protect a pinned split as a whole

Priority: P0; layout: Comfortable

Before: Open pinned split PS[P+Q] with separate markers and ordinary A/B/C.

Steps:

1. From B, test Close Other Tabs or a directional close.
2. Inspect both PS panes.

Expected:

- Both original pages, markers and the saved pair remain.
- Neither half is accidentally targeted as an ordinary tab.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-05-PER Explicitly close and reopen a pinned split

Priority: P0; layout: Performance

Before: Open test pinned split PS[P+Q].

Steps:

1. Choose Close from PS's own menu.
2. Check that one saved combined pin remains.
3. Click that entry to reopen it.

Expected:

- Both live pages close without unpinning the saved pair.
- P/Q reopen as the saved split with the saved arrangement.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-05-BAL Explicitly close and reopen a pinned split

Priority: P0; layout: Balanced

Before: Open test pinned split PS[P+Q].

Steps:

1. Choose Close from PS's own menu.
2. Check that one saved combined pin remains.
3. Click that entry to reopen it.

Expected:

- Both live pages close without unpinning the saved pair.
- P/Q reopen as the saved split with the saved arrangement.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-05-COM Explicitly close and reopen a pinned split

Priority: P0; layout: Comfortable

Before: Open test pinned split PS[P+Q].

Steps:

1. Choose Close from PS's own menu.
2. Check that one saved combined pin remains.
3. Click that entry to reopen it.

Expected:

- Both live pages close without unpinning the saved pair.
- P/Q reopen as the saved split with the saved arrangement.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-06-PER Close Other Tabs from a pin

Priority: P1; layout: Performance

Before: Save test pin P and pinned split PS; prepare ordinary A/B/C.

Steps:

1. Choose the existing Close Other Tabs action from P.
2. If also offered while P is closed, repeat that setup separately.

Expected:

- Ordinary A/B/C close; other pins and saved pairs remain.
- Pin ordering does not determine ordinary directional ranges; existing empty-window behavior applies.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-06-COM Close Other Tabs from a pin

Priority: P1; layout: Comfortable

Before: Save test pin P and pinned split PS; prepare ordinary A/B/C.

Steps:

1. Choose the existing Close Other Tabs action from P.
2. If also offered while P is closed, repeat that setup separately.

Expected:

- Ordinary A/B/C close; other pins and saved pairs remain.
- Pin ordering does not determine ordinary directional ranges; existing empty-window behavior applies.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-07-PER An unpinned page becomes eligible

Priority: P0; layout: Performance

Before: Open test pin P and ordinary A/B with positional closing on.

Steps:

1. Unpin P using the normal UI and arrange A/P/B.
2. From A, close following tabs.

Expected:

- P/B close and A remains.
- Protection does not remain after unpinning; unrelated saved entries are unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-07-BAL An unpinned page becomes eligible

Priority: P0; layout: Balanced

Before: Open test pin P and ordinary A/B with positional closing on.

Steps:

1. Unpin P using the normal UI and arrange A/P/B.
2. From A, close following tabs.

Expected:

- P/B close and A remains.
- Protection does not remain after unpinning; unrelated saved entries are unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-07-COM An unpinned page becomes eligible

Priority: P0; layout: Comfortable

Before: Open test pin P and ordinary A/B with positional closing on.

Steps:

1. Unpin P using the normal UI and arrange A/P/B.
2. From A, close following tabs.

Expected:

- P/B close and A remains.
- Protection does not remain after unpinning; unrelated saved entries are unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-08-PER Pinning immediately protects a page

Priority: P0; layout: Performance

Before: Prepare A/P/B with a marker in P and positional closing on.

Steps:

1. Pin P and confirm it moves into the pinned area.
2. From A, close following tabs and then Close Other Tabs.

Expected:

- B closes while P's original page and saved entry remain.
- Recently opened menus or the previous order do not leave P eligible.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-08-BAL Pinning immediately protects a page

Priority: P0; layout: Balanced

Before: Prepare A/P/B with a marker in P and positional closing on.

Steps:

1. Pin P and confirm it moves into the pinned area.
2. From A, close following tabs and then Close Other Tabs.

Expected:

- B closes while P's original page and saved entry remain.
- Recently opened menus or the previous order do not leave P eligible.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-08-COM Pinning immediately protects a page

Priority: P0; layout: Comfortable

Before: Prepare A/P/B with a marker in P and positional closing on.

Steps:

1. Pin P and confirm it moves into the pinned area.
2. From A, close following tabs and then Close Other Tabs.

Expected:

- B closes while P's original page and saved entry remain.
- Recently opened menus or the previous order do not leave P eligible.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-09-PER Closed pins are not opened by batch closing

Priority: P1; layout: Performance

Before: Save but do not open test pin P and pinned split PS; prepare A/B/C.

Steps:

1. From B, test each direction and Close Other Tabs in separate runs.
2. Check the entries remain closed, then open them manually.

Expected:

- Batch closing does not open or load saved pins.
- Saved addresses, pairing and layout remain intact.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-09-BAL Closed pins are not opened by batch closing

Priority: P1; layout: Balanced

Before: Save but do not open test pin P and pinned split PS; prepare A/B/C.

Steps:

1. From B, test each direction and Close Other Tabs in separate runs.
2. Check the entries remain closed, then open them manually.

Expected:

- Batch closing does not open or load saved pins.
- Saved addresses, pairing and layout remain intact.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-09-COM Closed pins are not opened by batch closing

Priority: P1; layout: Comfortable

Before: Save but do not open test pin P and pinned split PS; prepare A/B/C.

Steps:

1. From B, test each direction and Close Other Tabs in separate runs.
2. Check the entries remain closed, then open them manually.

Expected:

- Batch closing does not open or load saved pins.
- Saved addresses, pairing and layout remain intact.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-10-PER An ordinary copy of a pinned URL can close

Priority: P0; layout: Performance

Before: Open marked pin P and ordinary A/P2/B, where P2 has the same URL as P.

Steps:

1. From A, close following tabs.

Expected:

- P2/B close and the original P remains.
- Sharing a URL does not give the ordinary copy pin protection.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-10-BAL An ordinary copy of a pinned URL can close

Priority: P0; layout: Balanced

Before: Open marked pin P and ordinary A/P2/B, where P2 has the same URL as P.

Steps:

1. From A, close following tabs.

Expected:

- P2/B close and the original P remains.
- Sharing a URL does not give the ordinary copy pin protection.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-10-COM An ordinary copy of a pinned URL can close

Priority: P0; layout: Comfortable

Before: Open marked pin P and ordinary A/P2/B, where P2 has the same URL as P.

Steps:

1. From A, close following tabs.

Expected:

- P2/B close and the original P remains.
- Sharing a URL does not give the ordinary copy pin protection.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-11-PER An unpinned split becomes eligible

Priority: P1; layout: Performance

Before: Prepare test pinned split PS[P+Q] and ordinary A/B.

Steps:

1. Unpin PS and arrange ordinary A/S[P+Q]/B.
2. From A, close following tabs.

Expected:

- P/Q/B close and A remains.
- No orphan pane or stale pin entry remains; unrelated pins are unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-11-BAL An unpinned split becomes eligible

Priority: P1; layout: Balanced

Before: Prepare test pinned split PS[P+Q] and ordinary A/B.

Steps:

1. Unpin PS and arrange ordinary A/S[P+Q]/B.
2. From A, close following tabs.

Expected:

- P/Q/B close and A remains.
- No orphan pane or stale pin entry remains; unrelated pins are unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### PIN-11-COM An unpinned split becomes eligible

Priority: P1; layout: Comfortable

Before: Prepare test pinned split PS[P+Q] and ordinary A/B.

Steps:

1. Unpin PS and arrange ordinary A/S[P+Q]/B.
2. From A, close following tabs.

Expected:

- P/Q/B close and A remains.
- No orphan pane or stale pin entry remains; unrelated pins are unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

## GRP Tab groups

A member anchors at its own position; a group heading protects all members, including collapsed ones.

### GRP-01-PER Close preceding tabs from a group member

Priority: P0; layout: Performance

Before: Prepare A, G[B,C,D], E with positional closing on.

Steps:

1. From member C, choose Close Tabs Above.

Expected:

- A/B close; C/D/E remain.
- C/D retain the group name, color and expansion state.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-01-BAL Close preceding tabs from a group member

Priority: P0; layout: Balanced

Before: Prepare A, G[B,C,D], E with positional closing on.

Steps:

1. From member C, choose Close Tabs Above.

Expected:

- A/B close; C/D/E remain.
- C/D retain the group name, color and expansion state.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-01-COM Close preceding tabs from a group member

Priority: P0; layout: Comfortable

Before: Prepare A, G[B,C,D], E with positional closing on.

Steps:

1. From member C, choose Close Tabs to the Left.

Expected:

- A/B close; C/D/E remain.
- C/D retain the group name, color and expansion state.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-02-PER A member's following range extends outside the group

Priority: P0; layout: Performance

Before: Prepare A, G[B,C,D], E with positional closing on.

Steps:

1. From C, choose Close Tabs Below.

Expected:

- D/E close; A/B/C remain.
- The range is neither restricted to G nor expanded to include B.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-02-BAL A member's following range extends outside the group

Priority: P0; layout: Balanced

Before: Prepare A, G[B,C,D], E with positional closing on.

Steps:

1. From C, choose Close Tabs Below.

Expected:

- D/E close; A/B/C remain.
- The range is neither restricted to G nor expanded to include B.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-02-COM A member's following range extends outside the group

Priority: P0; layout: Comfortable

Before: Prepare A, G[B,C,D], E with positional closing on.

Steps:

1. From C, choose Close Tabs to the Right.

Expected:

- D/E close; A/B/C remain.
- The range is neither restricted to G nor expanded to include B.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-03-PER Group heading protects all members before it

Priority: P0; layout: Performance

Before: Prepare A, G[B,C,D], E with positional closing on.

Steps:

1. Right-click G's heading and choose the group action for preceding tabs.

Expected:

- Only A closes; the whole group and E remain.
- The boundary is the complete group, independent of its active member.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-03-BAL Group heading protects all members before it

Priority: P0; layout: Balanced

Before: Prepare A, G[B,C,D], E with positional closing on.

Steps:

1. Right-click G's heading and choose the group action for preceding tabs.

Expected:

- Only A closes; the whole group and E remain.
- The boundary is the complete group, independent of its active member.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-03-COM Group heading protects all members before it

Priority: P0; layout: Comfortable

Before: Prepare A, G[B,C,D], E with positional closing on.

Steps:

1. Right-click G's heading and choose the group action for preceding tabs.

Expected:

- Only A closes; the whole group and E remain.
- The boundary is the complete group, independent of its active member.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-04-PER Group heading protects all members after it

Priority: P0; layout: Performance

Before: Prepare A, G[B,C,D], E with positional closing on.

Steps:

1. Right-click G's heading and choose the group action for following tabs.

Expected:

- Only E closes; A and the whole group remain.
- The label clearly refers to the area outside the group.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-04-BAL Group heading protects all members after it

Priority: P0; layout: Balanced

Before: Prepare A, G[B,C,D], E with positional closing on.

Steps:

1. Right-click G's heading and choose the group action for following tabs.

Expected:

- Only E closes; A and the whole group remain.
- The label clearly refers to the area outside the group.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-04-COM Group heading protects all members after it

Priority: P0; layout: Comfortable

Before: Prepare A, G[B,C,D], E with positional closing on.

Steps:

1. Right-click G's heading and choose the group action for following tabs.

Expected:

- Only E closes; A and the whole group remain.
- The label clearly refers to the area outside the group.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-05-PER Collapsed group as the anchor

Priority: P0; layout: Performance

Before: Prepare A, collapsed G[B,C,D], E with positional closing on.

Steps:

1. Close a direction from G's heading without expanding it.
2. Expand G and inspect all members.

Expected:

- The result matches the expanded-group case.
- Every hidden member survives.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-05-BAL Collapsed group as the anchor

Priority: P0; layout: Balanced

Before: Prepare A, collapsed G[B,C,D], E with positional closing on.

Steps:

1. Close a direction from G's heading without expanding it.
2. Expand G and inspect all members.

Expected:

- The result matches the expanded-group case.
- Every hidden member survives.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-05-COM Collapsed group as the anchor

Priority: P0; layout: Comfortable

Before: Prepare A, collapsed G[B,C,D], E with positional closing on.

Steps:

1. Close a direction from G's heading without expanding it.
2. Expand G and inspect all members.

Expected:

- The result matches the expanded-group case.
- Every hidden member survives.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-06-PER Cancel closing an entire collapsed group

Priority: P0; layout: Performance

Before: Prepare disposable collapsed G[B,C], D with positional closing on.

Steps:

1. From D, close preceding tabs.
2. Cancel any displayed group-deletion confirmation.
3. Expand G.

Expected:

- The existing confirmation is respected and canceled G/B/C remain.
- Other targets may already have closed; record the actual survivors rather than assuming batch rollback.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-06-BAL Cancel closing an entire collapsed group

Priority: P0; layout: Balanced

Before: Prepare disposable collapsed G[B,C], D with positional closing on.

Steps:

1. From D, close preceding tabs.
2. Cancel any displayed group-deletion confirmation.
3. Expand G.

Expected:

- The existing confirmation is respected and canceled G/B/C remain.
- Other targets may already have closed; record the actual survivors rather than assuming batch rollback.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-06-COM Cancel closing an entire collapsed group

Priority: P0; layout: Comfortable

Before: Prepare disposable collapsed G[B,C], D with positional closing on.

Steps:

1. From D, close preceding tabs.
2. Cancel any displayed group-deletion confirmation.
3. Expand G.

Expected:

- The existing confirmation is respected and canceled G/B/C remain.
- Other targets may already have closed; record the actual survivors rather than assuming batch rollback.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-07-PER Confirm closing an entire disposable group

Priority: P1; layout: Performance

Before: Prepare A, TC-G[B,C], D using only disposable pages; leave Don't ask again unchecked.

Steps:

1. From A, close following tabs.
2. Check that the dialog names the disposable group before confirming.

Expected:

- TC-G/B/C/D are removed and A remains.
- Other groups, pins and bookmarks are unaffected.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-07-BAL Confirm closing an entire disposable group

Priority: P1; layout: Balanced

Before: Prepare A, TC-G[B,C], D using only disposable pages; leave Don't ask again unchecked.

Steps:

1. From A, close following tabs.
2. Check that the dialog names the disposable group before confirming.

Expected:

- TC-G/B/C/D are removed and A remains.
- Other groups, pins and bookmarks are unaffected.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-07-COM Confirm closing an entire disposable group

Priority: P1; layout: Comfortable

Before: Prepare A, TC-G[B,C], D using only disposable pages; leave Don't ask again unchecked.

Steps:

1. From A, close following tabs.
2. Check that the dialog names the disposable group before confirming.

Expected:

- TC-G/B/C/D are removed and A remains.
- Other groups, pins and bookmarks are unaffected.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-08-PER Reorder two groups before closing

Priority: P1; layout: Performance

Before: Prepare A, G1[B,C], D, G2[E,F], H.

Steps:

1. Drag G2 before G1 and record the displayed order.
2. From G1's heading, choose Close Tabs Below.

Expected:

- The range follows the reordered groups and protects every anchor member.
- Respect each displayed target-group confirmation and record survivors after cancellation.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-08-COM Reorder two groups before closing

Priority: P1; layout: Comfortable

Before: Prepare A, G1[B,C], D, G2[E,F], H.

Steps:

1. Drag G2 before G1 and record the displayed order.
2. From G1's heading, choose Close Tabs to the Right.

Expected:

- The range follows the reordered groups and protects every anchor member.
- Respect each displayed target-group confirmation and record survivors after cancellation.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-09-COMMON Preserve the surviving group's appearance

Priority: P1; layout: Common

Before: Prepare a named test group with a non-default color and marked members.

Steps:

1. Close some members from inside the group.
2. Change layout and return.

Expected:

- Surviving members retain the group name, color and intact splits.
- Closing members does not unexpectedly ungroup them; permanent storage of an empty group is not assumed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-10-PER Only one group means no outside targets

Priority: P1; layout: Performance

Before: The ordinary area contains only G[B,C], with protected pins/bookmarks outside it.

Steps:

1. Inspect both directional actions on G's heading.

Expected:

- Both are present but disabled.
- The group itself and protected entries do not count as outside targets.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-10-BAL Only one group means no outside targets

Priority: P1; layout: Balanced

Before: The ordinary area contains only G[B,C], with protected pins/bookmarks outside it.

Steps:

1. Inspect both directional actions on G's heading.

Expected:

- Both are present but disabled.
- The group itself and protected entries do not count as outside targets.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-10-COM Only one group means no outside targets

Priority: P1; layout: Comfortable

Before: The ordinary area contains only G[B,C], with protected pins/bookmarks outside it.

Steps:

1. Inspect both directional actions on G's heading.

Expected:

- Both are present but disabled.
- The group itself and protected entries do not count as outside targets.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-11-PER A group with one member is a valid anchor

Priority: P0; layout: Performance

Before: Prepare A, TC-G[B], C with positional closing on.

Steps:

1. From the heading, close before and after the group in separate runs.

Expected:

- Only A closes before and only C after.
- TC-G/B remain without an invalid or empty group state.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-11-BAL A group with one member is a valid anchor

Priority: P0; layout: Balanced

Before: Prepare A, TC-G[B], C with positional closing on.

Steps:

1. From the heading, close before and after the group in separate runs.

Expected:

- Only A closes before and only C after.
- TC-G/B remain without an invalid or empty group state.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-11-COM A group with one member is a valid anchor

Priority: P0; layout: Comfortable

Before: Prepare A, TC-G[B], C with positional closing on.

Steps:

1. From the heading, close before and after the group in separate runs.

Expected:

- Only A closes before and only C after.
- TC-G/B remain without an invalid or empty group state.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-12-PER A group containing only a split

Priority: P0; layout: Performance

Before: Prepare A, TC-G[S[B+C]], D with positional closing on.

Steps:

1. Close outside a group-heading anchor.
2. Recreate and close a direction from either split half.

Expected:

- Both group and split anchors retain B/C completely.
- Neither partner becomes an outside target.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-12-BAL A group containing only a split

Priority: P0; layout: Balanced

Before: Prepare A, TC-G[S[B+C]], D with positional closing on.

Steps:

1. Close outside a group-heading anchor.
2. Recreate and close a direction from either split half.

Expected:

- Both group and split anchors retain B/C completely.
- Neither partner becomes an outside target.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-12-COM A group containing only a split

Priority: P0; layout: Comfortable

Before: Prepare A, TC-G[S[B+C]], D with positional closing on.

Steps:

1. Close outside a group-heading anchor.
2. Recreate and close a direction from either split half.

Expected:

- Both group and split anchors retain B/C completely.
- Neither partner becomes an outside target.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-13-PER-cancel Double-click the last group member

Priority: P0; layout: Performance; variant: Cancel

Before: Prepare A, TC-G[B], C; B is disposable and double-click closing is on.

Steps:

1. Double-click B and choose this case's response if a group confirmation appears.
2. If confirmations are disabled, compare with the existing close button and record the setting.

Expected:

- Existing last-member confirmation behavior is retained.
- Cancel keeps group/B; confirming removes only the target group/B while A/C remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-13-PER-leave Double-click the last group member

Priority: P0; layout: Performance; variant: Confirm / Leave

Before: Prepare A, TC-G[B], C; B is disposable and double-click closing is on.

Steps:

1. Double-click B and choose this case's response if a group confirmation appears.
2. If confirmations are disabled, compare with the existing close button and record the setting.

Expected:

- Existing last-member confirmation behavior is retained.
- Cancel keeps group/B; confirming removes only the target group/B while A/C remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-13-BAL-cancel Double-click the last group member

Priority: P0; layout: Balanced; variant: Cancel

Before: Prepare A, TC-G[B], C; B is disposable and double-click closing is on.

Steps:

1. Double-click B and choose this case's response if a group confirmation appears.
2. If confirmations are disabled, compare with the existing close button and record the setting.

Expected:

- Existing last-member confirmation behavior is retained.
- Cancel keeps group/B; confirming removes only the target group/B while A/C remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-13-BAL-leave Double-click the last group member

Priority: P0; layout: Balanced; variant: Confirm / Leave

Before: Prepare A, TC-G[B], C; B is disposable and double-click closing is on.

Steps:

1. Double-click B and choose this case's response if a group confirmation appears.
2. If confirmations are disabled, compare with the existing close button and record the setting.

Expected:

- Existing last-member confirmation behavior is retained.
- Cancel keeps group/B; confirming removes only the target group/B while A/C remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-13-COM-cancel Double-click the last group member

Priority: P0; layout: Comfortable; variant: Cancel

Before: Prepare A, TC-G[B], C; B is disposable and double-click closing is on.

Steps:

1. Double-click B and choose this case's response if a group confirmation appears.
2. If confirmations are disabled, compare with the existing close button and record the setting.

Expected:

- Existing last-member confirmation behavior is retained.
- Cancel keeps group/B; confirming removes only the target group/B while A/C remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-13-COM-leave Double-click the last group member

Priority: P0; layout: Comfortable; variant: Confirm / Leave

Before: Prepare A, TC-G[B], C; B is disposable and double-click closing is on.

Steps:

1. Double-click B and choose this case's response if a group confirmation appears.
2. If confirmations are disabled, compare with the existing close button and record the setting.

Expected:

- Existing last-member confirmation behavior is retained.
- Cancel keeps group/B; confirming removes only the target group/B while A/C remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-14-PER-cancel Close Other Tabs targets an entire group

Priority: P0; layout: Performance; variant: Cancel

Before: Prepare A, disposable TC-G[B,C], D; the positional switch may be either value.

Steps:

1. From A, choose Close Other Tabs and use this case's group-confirmation response.
2. Inspect the group, D and protected entries.

Expected:

- Confirming closes B/C/D and retains A and protected entries.
- Cancel retains group members; D may already have closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-14-PER-leave Close Other Tabs targets an entire group

Priority: P0; layout: Performance; variant: Confirm / Leave

Before: Prepare A, disposable TC-G[B,C], D; the positional switch may be either value.

Steps:

1. From A, choose Close Other Tabs and use this case's group-confirmation response.
2. Inspect the group, D and protected entries.

Expected:

- Confirming closes B/C/D and retains A and protected entries.
- Cancel retains group members; D may already have closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-14-BAL-cancel Close Other Tabs targets an entire group

Priority: P0; layout: Balanced; variant: Cancel

Before: Prepare A, disposable TC-G[B,C], D; the positional switch may be either value.

Steps:

1. From A, choose Close Other Tabs and use this case's group-confirmation response.
2. Inspect the group, D and protected entries.

Expected:

- Confirming closes B/C/D and retains A and protected entries.
- Cancel retains group members; D may already have closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-14-BAL-leave Close Other Tabs targets an entire group

Priority: P0; layout: Balanced; variant: Confirm / Leave

Before: Prepare A, disposable TC-G[B,C], D; the positional switch may be either value.

Steps:

1. From A, choose Close Other Tabs and use this case's group-confirmation response.
2. Inspect the group, D and protected entries.

Expected:

- Confirming closes B/C/D and retains A and protected entries.
- Cancel retains group members; D may already have closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-14-COM-cancel Close Other Tabs targets an entire group

Priority: P0; layout: Comfortable; variant: Cancel

Before: Prepare A, disposable TC-G[B,C], D; the positional switch may be either value.

Steps:

1. From A, choose Close Other Tabs and use this case's group-confirmation response.
2. Inspect the group, D and protected entries.

Expected:

- Confirming closes B/C/D and retains A and protected entries.
- Cancel retains group members; D may already have closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-14-COM-leave Close Other Tabs targets an entire group

Priority: P0; layout: Comfortable; variant: Confirm / Leave

Before: Prepare A, disposable TC-G[B,C], D; the positional switch may be either value.

Steps:

1. From A, choose Close Other Tabs and use this case's group-confirmation response.
2. Inspect the group, D and protected entries.

Expected:

- Confirming closes B/C/D and retains A and protected entries.
- Cancel retains group members; D may already have closed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-15-PER Different responses for multiple target groups

Priority: P1; layout: Performance

Before: Prepare A, G1[B,C], D, G2[E,F], H using disposable groups.

Steps:

1. From A, close following tabs.
2. Cancel one group's prompt and confirm the other's without assuming prompt order.
3. Inspect all survivors.

Expected:

- The canceled group and its pages remain; confirmed targets close.
- A and protected entries remain, without repeated or misidentified prompts.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-15-BAL Different responses for multiple target groups

Priority: P1; layout: Balanced

Before: Prepare A, G1[B,C], D, G2[E,F], H using disposable groups.

Steps:

1. From A, close following tabs.
2. Cancel one group's prompt and confirm the other's without assuming prompt order.
3. Inspect all survivors.

Expected:

- The canceled group and its pages remain; confirmed targets close.
- A and protected entries remain, without repeated or misidentified prompts.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-15-COM Different responses for multiple target groups

Priority: P1; layout: Comfortable

Before: Prepare A, G1[B,C], D, G2[E,F], H using disposable groups.

Steps:

1. From A, close following tabs.
2. Cancel one group's prompt and confirm the other's without assuming prompt order.
3. Inspect all survivors.

Expected:

- The canceled group and its pages remain; confirmed targets close.
- A and protected entries remain, without repeated or misidentified prompts.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-16-PER Exact boundaries between adjacent groups

Priority: P1; layout: Performance

Before: Prepare A, G1[B,C], G2[D,E], F.

Steps:

1. From G2's heading, close preceding tabs.
2. Recreate and from G1 close following tabs, confirming only disposable target groups when prompted.

Expected:

- First run retains G2/D/E/F; second retains A/G1/B/C.
- No adjacent member of the anchor is included accidentally.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-16-BAL Exact boundaries between adjacent groups

Priority: P1; layout: Balanced

Before: Prepare A, G1[B,C], G2[D,E], F.

Steps:

1. From G2's heading, close preceding tabs.
2. Recreate and from G1 close following tabs, confirming only disposable target groups when prompted.

Expected:

- First run retains G2/D/E/F; second retains A/G1/B/C.
- No adjacent member of the anchor is included accidentally.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-16-COM Exact boundaries between adjacent groups

Priority: P1; layout: Comfortable

Before: Prepare A, G1[B,C], G2[D,E], F.

Steps:

1. From G2's heading, close preceding tabs.
2. Recreate and from G1 close following tabs, confirming only disposable target groups when prompted.

Expected:

- First run retains G2/D/E/F; second retains A/G1/B/C.
- No adjacent member of the anchor is included accidentally.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-17-PER Membership changes update the group range

Priority: P1; layout: Performance

Before: Prepare A, TC-G[B,C], D with positional closing on.

Steps:

1. Create E through the group heading and move D into G; verify membership.
2. Close preceding outside tabs from the heading.
3. Move a member out and test a newly opened menu at its actual position.

Expected:

- Newly added members are protected as part of the group.
- A moved-out member follows its current ordinary position rather than the previous membership.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-17-BAL Membership changes update the group range

Priority: P1; layout: Balanced

Before: Prepare A, TC-G[B,C], D with positional closing on.

Steps:

1. Create E through the group heading and move D into G; verify membership.
2. Close preceding outside tabs from the heading.
3. Move a member out and test a newly opened menu at its actual position.

Expected:

- Newly added members are protected as part of the group.
- A moved-out member follows its current ordinary position rather than the previous membership.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-17-COM Membership changes update the group range

Priority: P1; layout: Comfortable

Before: Prepare A, TC-G[B,C], D with positional closing on.

Steps:

1. Create E through the group heading and move D into G; verify membership.
2. Close preceding outside tabs from the heading.
3. Move a member out and test a newly opened menu at its actual position.

Expected:

- Newly added members are protected as part of the group.
- A moved-out member follows its current ordinary position rather than the previous membership.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-18-PER Existing group actions with positional closing off

Priority: P1; layout: Performance

Before: Prepare A, TC-G[B,C], D and turn positional closing off.

Steps:

1. Check rename, color, collapse/expand and ungroup, recreating as needed.
2. Close the disposable group through its existing action and follow confirmation.

Expected:

- Directional entries are hidden while existing group actions remain available.
- Ungroup preserves B/C; closing the group affects only TC-G.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-18-BAL Existing group actions with positional closing off

Priority: P1; layout: Balanced

Before: Prepare A, TC-G[B,C], D and turn positional closing off.

Steps:

1. Check rename, color, collapse/expand and ungroup, recreating as needed.
2. Close the disposable group through its existing action and follow confirmation.

Expected:

- Directional entries are hidden while existing group actions remain available.
- Ungroup preserves B/C; closing the group affects only TC-G.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### GRP-18-COM Existing group actions with positional closing off

Priority: P1; layout: Comfortable

Before: Prepare A, TC-G[B,C], D and turn positional closing off.

Steps:

1. Check rename, color, collapse/expand and ungroup, recreating as needed.
2. Close the disposable group through its existing action and follow confirmation.

Expected:

- Directional entries are hidden while existing group actions remain available.
- Ungroup preserves B/C; closing the group affects only TC-G.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

## BMK Bookmarks and folders

Check saved entries separately from live pages. Vertical bookmark pages are protected; ordinary copies in Comfortable participate in closing.

### BMK-01-PER Vertical layouts protect an opened bookmark page

Priority: P0; layout: Performance

Before: Open bookmark M from the bookmark area and enter a marker; prepare A/B/C.

Steps:

1. From B, close a direction, then recreate and use Close Other Tabs.
2. Return to M and compare its marker and opening ID.

Expected:

- Only ordinary targets close.
- Both the saved entry and original live M page remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-01-BAL Vertical layouts protect an opened bookmark page

Priority: P0; layout: Balanced

Before: Open bookmark M from the bookmark area and enter a marker; prepare A/B/C.

Steps:

1. From B, close a direction, then recreate and use Close Other Tabs.
2. Return to M and compare its marker and opening ID.

Expected:

- Only ordinary targets close.
- Both the saved entry and original live M page remain.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-02-PER Vertical layouts protect both bookmark split panes

Priority: P0; layout: Performance

Before: Open saved split bookmark MS[M+N] and mark both panes; prepare A/B/C.

Steps:

1. From B, choose Close Other Tabs.
2. Inspect both MS panes.

Expected:

- Both original panes and the saved split remain.
- Protection is not limited to one pane.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-02-BAL Vertical layouts protect both bookmark split panes

Priority: P0; layout: Balanced

Before: Open saved split bookmark MS[M+N] and mark both panes; prepare A/B/C.

Steps:

1. From B, choose Close Other Tabs.
2. Inspect both MS panes.

Expected:

- Both original panes and the saved split remain.
- Protection is not limited to one pane.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-03-PER A separate ordinary copy of a bookmark URL

Priority: P0; layout: Performance

Before: Save bookmark M, then use a new tab to open ordinary copy M2 with the same URL; put A before it.

Steps:

1. From A, choose Close Tabs Below.
2. Inspect saved M and any protected opened bookmark page.

Expected:

- Ordinary M2 closes.
- Saved M remains; a matching bookmarked URL does not protect every ordinary copy.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-03-BAL A separate ordinary copy of a bookmark URL

Priority: P0; layout: Balanced

Before: Save bookmark M, then use a new tab to open ordinary copy M2 with the same URL; put A before it.

Steps:

1. From A, choose Close Tabs Below.
2. Inspect saved M and any protected opened bookmark page.

Expected:

- Ordinary M2 closes.
- Saved M remains; a matching bookmarked URL does not protect every ordinary copy.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-03-COM A separate ordinary copy of a bookmark URL

Priority: P0; layout: Comfortable

Before: Save bookmark M, then use a new tab to open ordinary copy M2 with the same URL; put A before it.

Steps:

1. From A, choose Close Tabs to the Right.
2. Inspect saved M and any protected opened bookmark page.

Expected:

- Ordinary M2 closes.
- Saved M remains; a matching bookmarked URL does not protect every ordinary copy.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-04-COM Bookmark-opened ordinary pages in Comfortable

Priority: P0; layout: Comfortable

Before: In Comfortable, save M and open it through the bookmark entry as an ordinary tab after A.

Steps:

1. From A, choose Close Tabs to the Right.
2. Check M in the bookmarks bar or menu.

Expected:

- M's ordinary page closes, while the saved bookmark remains and can reopen.
- No stale open indicator or empty tab remains.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-05-COMMON Bookmark pages after changing to Comfortable

Priority: P1; layout: Common

Before: In a vertical layout, open saved M and saved split MS.

Steps:

1. Change to Comfortable and note the ordinary pages or split now shown.
2. Close a chosen direction and inspect saved entries.

Expected:

- Pages now in the ordinary bar participate, including both panes of a target split.
- Saved addresses, pane titles, arrangement and folder locations are not deleted or changed.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-06-PER Saved bookmarks and folders have no directional close

Priority: P0; layout: Performance

Before: Save M, split MS and a folder containing test bookmarks; positional closing is on.

Steps:

1. Right-click each saved entry.
2. Check the folder while expanded and collapsed.

Expected:

- Saved-entry menus do not add tab-direction closing based on bookmark order.
- Closing ordinary tabs does not delete the folder or its children.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-06-BAL Saved bookmarks and folders have no directional close

Priority: P0; layout: Balanced

Before: Save M, split MS and a folder containing test bookmarks; positional closing is on.

Steps:

1. Right-click each saved entry.
2. Check the folder while expanded and collapsed.

Expected:

- Saved-entry menus do not add tab-direction closing based on bookmark order.
- Closing ordinary tabs does not delete the folder or its children.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-06-COM Saved bookmarks and folders have no directional close

Priority: P0; layout: Comfortable

Before: Save M, split MS and a folder containing test bookmarks; positional closing is on.

Steps:

1. Right-click each saved entry.
2. Check the folder while expanded and collapsed.

Expected:

- Saved-entry menus do not add tab-direction closing based on bookmark order.
- Closing ordinary tabs does not delete the folder or its children.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-07-PER Explicitly close and reopen a bookmark page

Priority: P1; layout: Performance

Before: Open test M and split MS in a vertical layout.

Steps:

1. Use their existing close controls.
2. Click their saved entries again.

Expected:

- Closing live contents leaves the saved entries intact.
- MS reopens with its saved pages and arrangement.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-07-BAL Explicitly close and reopen a bookmark page

Priority: P1; layout: Balanced

Before: Open test M and split MS in a vertical layout.

Steps:

1. Use their existing close controls.
2. Click their saved entries again.

Expected:

- Closing live contents leaves the saved entries intact.
- MS reopens with its saved pages and arrangement.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-08-PER Protect pages inside nested bookmark folders

Priority: P0; layout: Performance

Before: In a vertical layout, open and mark M/MS saved inside Folder1/Folder2; prepare A/B/C.

Steps:

1. Collapse both folder levels and choose Close Other Tabs from B.
2. Expand the folders and return to M/MS.

Expected:

- All original bookmarked pages and markers remain.
- Folder hierarchy, ordering, addresses and split arrangement are unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-08-BAL Protect pages inside nested bookmark folders

Priority: P0; layout: Balanced

Before: In a vertical layout, open and mark M/MS saved inside Folder1/Folder2; prepare A/B/C.

Steps:

1. Collapse both folder levels and choose Close Other Tabs from B.
2. Expand the folders and return to M/MS.

Expected:

- All original bookmarked pages and markers remain.
- Folder hierarchy, ordering, addresses and split arrangement are unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-09-PER Closed bookmarks and folders stay closed

Priority: P1; layout: Performance

Before: Save M, MS and a nested folder without opening their pages; prepare A/B/C.

Steps:

1. From B, test Close Other Tabs and a direction in separate runs.
2. Open saved entries manually afterward to inspect them.

Expected:

- Batch closing does not open bookmarks, folders or additional tabs.
- Saved entries, hierarchy and split arrangement remain intact.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-09-BAL Closed bookmarks and folders stay closed

Priority: P1; layout: Balanced

Before: Save M, MS and a nested folder without opening their pages; prepare A/B/C.

Steps:

1. From B, test Close Other Tabs and a direction in separate runs.
2. Open saved entries manually afterward to inspect them.

Expected:

- Batch closing does not open bookmarks, folders or additional tabs.
- Saved entries, hierarchy and split arrangement remain intact.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-09-COM Closed bookmarks and folders stay closed

Priority: P1; layout: Comfortable

Before: Save M, MS and a nested folder without opening their pages; prepare A/B/C.

Steps:

1. From B, test Close Other Tabs and a direction in separate runs.
2. Open saved entries manually afterward to inspect them.

Expected:

- Batch closing does not open bookmarks, folders or additional tabs.
- Saved entries, hierarchy and split arrangement remain intact.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-10-PER Ordinary and bookmarked splits share URLs

Priority: P0; layout: Performance

Before: In a vertical layout, open bookmarked MS[M+N], then ordinary S[M2+N2] using the same URLs; put A before S.

Steps:

1. Mark all four documents and close following tabs from A.

Expected:

- Ordinary M2/N2 close as a pair.
- The original bookmarked M/N survive; matching URLs do not confuse the pairs.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-10-BAL Ordinary and bookmarked splits share URLs

Priority: P0; layout: Balanced

Before: In a vertical layout, open bookmarked MS[M+N], then ordinary S[M2+N2] using the same URLs; put A before S.

Steps:

1. Mark all four documents and close following tabs from A.

Expected:

- Ordinary M2/N2 close as a pair.
- The original bookmarked M/N survive; matching URLs do not confuse the pairs.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-11-PER Eligibility after bookmarking an ordinary page

Priority: P1; layout: Performance

Before: In a vertical layout, prepare A/M/B with disposable text in M.

Steps:

1. Bookmark M through the normal UI and inspect whether it moves to the bookmark area.
2. From A, test following tabs and Close Other Tabs.

Expected:

- If M becomes an opened bookmark entry, it is protected; if it remains an ordinary page, ordinary rules apply.
- The saved bookmark remains; saving a URL alone does not prove the page changed category.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-11-BAL Eligibility after bookmarking an ordinary page

Priority: P1; layout: Balanced

Before: In a vertical layout, prepare A/M/B with disposable text in M.

Steps:

1. Bookmark M through the normal UI and inspect whether it moves to the bookmark area.
2. From A, test following tabs and Close Other Tabs.

Expected:

- If M becomes an opened bookmark entry, it is protected; if it remains an ordinary page, ordinary rules apply.
- The saved bookmark remains; saving a URL alone does not prove the page changed category.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-12-PER Preserve edited bookmarks after closing and restart

Priority: P1; layout: Performance

Before: Save M/MS in a test folder with custom names, order and split orientation.

Steps:

1. Close ordinary targets according to the current layout, then quit and restart normally.
2. Inspect saved entries and reopen them.

Expected:

- Edited names, addresses, folder locations, pairing and orientation remain.
- Closing does not replace saved addresses with recently visited ones or duplicate entries.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-12-BAL Preserve edited bookmarks after closing and restart

Priority: P1; layout: Balanced

Before: Save M/MS in a test folder with custom names, order and split orientation.

Steps:

1. Close ordinary targets according to the current layout, then quit and restart normally.
2. Inspect saved entries and reopen them.

Expected:

- Edited names, addresses, folder locations, pairing and orientation remain.
- Closing does not replace saved addresses with recently visited ones or duplicate entries.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### BMK-12-COM Preserve edited bookmarks after closing and restart

Priority: P1; layout: Comfortable

Before: Save M/MS in a test folder with custom names, order and split orientation.

Steps:

1. Close ordinary targets according to the current layout, then quit and restart normally.
2. Inspect saved entries and reopen them.

Expected:

- Edited names, addresses, folder locations, pairing and orientation remain.
- Closing does not replace saved addresses with recently visited ones or duplicate entries.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

## SEL Close Other Tabs and selection

Close Other Tabs follows ordinary-target protection rules and preserves every selected split unit.

### SEL-01-PER Close Other Tabs uses the clicked anchor

Priority: P0; layout: Performance

Before: Prepare A/B/C with C active, pin P and saved bookmark M; open M as a protected page only in vertical layouts.

Steps:

1. Right-click inactive B and choose Close Other Tabs.

Expected:

- A/C close, B remains and protected entries survive.
- The retained ordinary page is clicked B rather than active C.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-01-BAL Close Other Tabs uses the clicked anchor

Priority: P0; layout: Balanced

Before: Prepare A/B/C with C active, pin P and saved bookmark M; open M as a protected page only in vertical layouts.

Steps:

1. Right-click inactive B and choose Close Other Tabs.

Expected:

- A/C close, B remains and protected entries survive.
- The retained ordinary page is clicked B rather than active C.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-01-COM Close Other Tabs uses the clicked anchor

Priority: P0; layout: Comfortable

Before: Prepare A/B/C with C active, pin P and saved bookmark M; open M as a protected page only in vertical layouts.

Steps:

1. Right-click inactive B and choose Close Other Tabs.

Expected:

- A/C close, B remains and protected entries survive.
- The retained ordinary page is clicked B rather than active C.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-02-PER Retain every selected tab

Priority: P0; layout: Performance

Before: Prepare A/B/C/D; either closing preference may be on or off.

Steps:

1. Click B and Command-click C.
2. Right-click selected C and choose Close Other Tabs.

Expected:

- A/D close and B/C remain with the usual pin/bookmark protection.
- The selection menu remains available regardless of the positional preference.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-02-BAL Retain every selected tab

Priority: P0; layout: Balanced

Before: Prepare A/B/C/D; either closing preference may be on or off.

Steps:

1. Click B and Command-click C.
2. Right-click selected C and choose Close Other Tabs.

Expected:

- A/D close and B/C remain with the usual pin/bookmark protection.
- The selection menu remains available regardless of the positional preference.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-02-COM Retain every selected tab

Priority: P0; layout: Comfortable

Before: Prepare A/B/C/D; either closing preference may be on or off.

Steps:

1. Click B and Command-click C.
2. Right-click selected C and choose Close Other Tabs.

Expected:

- A/D close and B/C remain with the usual pin/bookmark protection.
- The selection menu remains available regardless of the positional preference.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-03-PER Selection retains every pane of a split

Priority: P0; layout: Performance

Before: Prepare A, S[B+C], D, E and select S and D through the existing UI.

Steps:

1. Choose Close Other Tabs from the selection menu.

Expected:

- B/C/D remain and A/E close.
- A partner pane never counts as another tab outside a selected split.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-03-BAL Selection retains every pane of a split

Priority: P0; layout: Balanced

Before: Prepare A, S[B+C], D, E and select S and D through the existing UI.

Steps:

1. Choose Close Other Tabs from the selection menu.

Expected:

- B/C/D remain and A/E close.
- A partner pane never counts as another tab outside a selected split.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-03-COM Selection retains every pane of a split

Priority: P0; layout: Comfortable

Before: Prepare A, S[B+C], D, E and select S and D through the existing UI.

Steps:

1. Choose Close Other Tabs from the selection menu.

Expected:

- B/C/D remain and A/E close.
- A partner pane never counts as another tab outside a selected split.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-04-PER No unselected ordinary targets

Priority: P0; layout: Performance

Before: Only ordinary A/B remain, both selected, with pins or bookmark pages outside the selection.

Steps:

1. Inspect Close Other Tabs on the selection.
2. Add ordinary C and inspect again.

Expected:

- The action is disabled while there are no other ordinary targets.
- It becomes available after C is added; protected pages do not enable it.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-04-BAL No unselected ordinary targets

Priority: P0; layout: Balanced

Before: Only ordinary A/B remain, both selected, with pins or bookmark pages outside the selection.

Steps:

1. Inspect Close Other Tabs on the selection.
2. Add ordinary C and inspect again.

Expected:

- The action is disabled while there are no other ordinary targets.
- It becomes available after C is added; protected pages do not enable it.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-04-COM No unselected ordinary targets

Priority: P0; layout: Comfortable

Before: Only ordinary A/B remain, both selected, with pins or bookmark pages outside the selection.

Steps:

1. Inspect Close Other Tabs on the selection.
2. Add ordinary C and inspect again.

Expected:

- The action is disabled while there are no other ordinary targets.
- It becomes available after C is added; protected pages do not enable it.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-05-COMMON Explicitly close the selection

Priority: P1; layout: Common

Before: Prepare A/B/C with B selected and positional closing off.

Steps:

1. Choose the existing Close Tabs action from the selection menu.

Expected:

- B closes and A/C remain.
- Turning off positional closing does not disable explicit selection closing.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-06-PER Shift-selection across group and split members

Priority: P1; layout: Performance

Before: Prepare A, G[B,S[C+D],E], F using disposable pages.

Steps:

1. Shift-select the range from B to E and inspect the actual selection.
2. From a selected member, choose Close Other Tabs.

Expected:

- All selected ordinary pages and their split partners remain; unselected ordinary targets close.
- Selection does not retain only its final member or break surviving group/split relationships.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-06-BAL Shift-selection across group and split members

Priority: P1; layout: Balanced

Before: Prepare A, G[B,S[C+D],E], F using disposable pages.

Steps:

1. Shift-select the range from B to E and inspect the actual selection.
2. From a selected member, choose Close Other Tabs.

Expected:

- All selected ordinary pages and their split partners remain; unselected ordinary targets close.
- Selection does not retain only its final member or break surviving group/split relationships.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-06-COM Shift-selection across group and split members

Priority: P1; layout: Comfortable

Before: Prepare A, G[B,S[C+D],E], F using disposable pages.

Steps:

1. Shift-select the range from B to E and inspect the actual selection.
2. From a selected member, choose Close Other Tabs.

Expected:

- All selected ordinary pages and their split partners remain; unselected ordinary targets close.
- Selection does not retain only its final member or break surviving group/split relationships.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-07-PER Multi-selection keeps its existing menu meaning

Priority: P1; layout: Performance

Before: Prepare A/B/C/D with B/C selected and positional closing on.

Steps:

1. Open the selection menu, then turn positional closing off and inspect again.

Expected:

- Existing selection Close and Close Other Tabs remain.
- No new positional action based on the outer edges of a multi-selection is required; inspect the actual direction entries rather than treating Close Other Tabs as one.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-07-BAL Multi-selection keeps its existing menu meaning

Priority: P1; layout: Balanced

Before: Prepare A/B/C/D with B/C selected and positional closing on.

Steps:

1. Open the selection menu, then turn positional closing off and inspect again.

Expected:

- Existing selection Close and Close Other Tabs remain.
- No new positional action based on the outer edges of a multi-selection is required; inspect the actual direction entries rather than treating Close Other Tabs as one.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-07-COM Multi-selection keeps its existing menu meaning

Priority: P1; layout: Comfortable

Before: Prepare A/B/C/D with B/C selected and positional closing on.

Steps:

1. Open the selection menu, then turn positional closing off and inspect again.

Expected:

- Existing selection Close and Close Other Tabs remain.
- No new positional action based on the outer edges of a multi-selection is required; inspect the actual direction entries rather than treating Close Other Tabs as one.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-08-PER Do not reuse a closed selection

Priority: P1; layout: Performance

Before: Prepare A/B/C/D with B/C selected and positional closing on.

Steps:

1. Close the selection and wait for the list to settle.
2. Open E, select A and invoke the existing Close Other Tabs shortcut.

Expected:

- A remains and D/E close.
- The old B/C selection does not affect the new operation.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-08-BAL Do not reuse a closed selection

Priority: P1; layout: Balanced

Before: Prepare A/B/C/D with B/C selected and positional closing on.

Steps:

1. Close the selection and wait for the list to settle.
2. Open E, select A and invoke the existing Close Other Tabs shortcut.

Expected:

- A remains and D/E close.
- The old B/C selection does not affect the new operation.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-08-COM Do not reuse a closed selection

Priority: P1; layout: Comfortable

Before: Prepare A/B/C/D with B/C selected and positional closing on.

Steps:

1. Close the selection and wait for the list to settle.
2. Open E, select A and invoke the existing Close Other Tabs shortcut.

Expected:

- A remains and D/E close.
- The old B/C selection does not affect the new operation.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-09-PER Mixed ordinary and bookmark selection

Priority: P2; layout: Performance

Before: In a vertical layout, open bookmark M and ordinary A/B/C; run only if normal UI permits selecting B with M.

Steps:

1. Verify the selected entries and choose Close Other Tabs.
2. If mixed selection is unavailable, mark Skipped with a reason.

Expected:

- B and protected M remain while A/C close.
- Selecting a saved entry does not turn other bookmarks into ordinary closing targets.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SEL-09-BAL Mixed ordinary and bookmark selection

Priority: P2; layout: Balanced

Before: In a vertical layout, open bookmark M and ordinary A/B/C; run only if normal UI permits selecting B with M.

Steps:

1. Verify the selected entries and choose Close Other Tabs.
2. If mixed selection is unavailable, mark Skipped with a reason.

Expected:

- B and protected M remain while A/C close.
- Selecting a saved entry does not turn other bookmarks into ordinary closing targets.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

## LIFE Confirmation and page lifecycle

A canceled leave or group prompt can leave other targets already closed. Compare the actual surviving pages.

### LIFE-01-PER Cancel closing an unsaved page

Priority: P0; layout: Performance

Before: Prepare A, unsaved B, C; type disposable text in B until Leave confirmation enabled appears.

Steps:

1. From A, choose Close Tabs Below.
2. Cancel the leave-page prompt.
3. Inspect B's text and the actual survivors.

Expected:

- A and B's draft remain.
- C may already have closed; record partial completion rather than expecting all targets to be restored.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-01-BAL Cancel closing an unsaved page

Priority: P0; layout: Balanced

Before: Prepare A, unsaved B, C; type disposable text in B until Leave confirmation enabled appears.

Steps:

1. From A, choose Close Tabs Below.
2. Cancel the leave-page prompt.
3. Inspect B's text and the actual survivors.

Expected:

- A and B's draft remain.
- C may already have closed; record partial completion rather than expecting all targets to be restored.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-01-COM Cancel closing an unsaved page

Priority: P0; layout: Comfortable

Before: Prepare A, unsaved B, C; type disposable text in B until Leave confirmation enabled appears.

Steps:

1. From A, choose Close Tabs to the Right.
2. Cancel the leave-page prompt.
3. Inspect B's text and the actual survivors.

Expected:

- A and B's draft remain.
- C may already have closed; record partial completion rather than expecting all targets to be restored.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-02-PER Accept closing an unsaved page

Priority: P0; layout: Performance

Before: Prepare A, unsaved B, C with only disposable test text.

Steps:

1. Type in B and verify that leave confirmation is enabled.
2. From A, choose Close Tabs Below.
3. Check the prompt refers to the test page and choose Leave.

Expected:

- B closes only after confirmation and A remains.
- The prompt is not bypassed and the page is not shown as closed prematurely.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-02-BAL Accept closing an unsaved page

Priority: P0; layout: Balanced

Before: Prepare A, unsaved B, C with only disposable test text.

Steps:

1. Type in B and verify that leave confirmation is enabled.
2. From A, choose Close Tabs Below.
3. Check the prompt refers to the test page and choose Leave.

Expected:

- B closes only after confirmation and A remains.
- The prompt is not bypassed and the page is not shown as closed prematurely.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-02-COM Accept closing an unsaved page

Priority: P0; layout: Comfortable

Before: Prepare A, unsaved B, C with only disposable test text.

Steps:

1. Type in B and verify that leave confirmation is enabled.
2. From A, choose Close Tabs to the Right.
3. Check the prompt refers to the test page and choose Leave.

Expected:

- B closes only after confirmation and A remains.
- The prompt is not bypassed and the page is not shown as closed prematurely.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-03-PER Several unsaved pages in one batch

Priority: P1; layout: Performance

Before: Prepare A, unsaved B, unsaved C, D.

Steps:

1. Type different markers in B/C.
2. From A, choose Close Tabs Below; cancel one prompt and accept another.

Expected:

- The canceled page and its marker remain; the accepted page closes.
- No freeze, endless prompts or wrong-page closure occurs; record which page each prompt concerns.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-03-COM Several unsaved pages in one batch

Priority: P1; layout: Comfortable

Before: Prepare A, unsaved B, unsaved C, D.

Steps:

1. Type different markers in B/C.
2. From A, choose Close Tabs to the Right; cancel one prompt and accept another.

Expected:

- The canceled page and its marker remain; the accepted page closes.
- No freeze, endless prompts or wrong-page closure occurs; record which page each prompt concerns.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-04-PER Reopen ordinary closed pages

Priority: P0; layout: Performance

Before: Prepare A/B/C/D without unsaved text.

Steps:

1. From B, choose Close Tabs Below.
2. Use Command-Shift-T or Recently Closed to reopen the closed entries, repeating as needed.

Expected:

- C/D can be found and their URLs reopened.
- Record the actual reopen grouping rather than assuming one action restores the entire batch.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-04-BAL Reopen ordinary closed pages

Priority: P0; layout: Balanced

Before: Prepare A/B/C/D without unsaved text.

Steps:

1. From B, choose Close Tabs Below.
2. Use Command-Shift-T or Recently Closed to reopen the closed entries, repeating as needed.

Expected:

- C/D can be found and their URLs reopened.
- Record the actual reopen grouping rather than assuming one action restores the entire batch.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-04-COM Reopen ordinary closed pages

Priority: P0; layout: Comfortable

Before: Prepare A/B/C/D without unsaved text.

Steps:

1. From B, choose Close Tabs to the Right.
2. Use Command-Shift-T or Recently Closed to reopen the closed entries, repeating as needed.

Expected:

- C/D can be found and their URLs reopened.
- Record the actual reopen grouping rather than assuming one action restores the entire batch.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-05-PER A surviving page remains interactive

Priority: P1; layout: Performance

Before: Prepare A/B/C with C active.

Steps:

1. From A, choose Close Tabs Below.
2. Click, scroll or type disposable text in A.

Expected:

- B/C close and A displays and responds normally.
- No stale content, blank page or invisible input-blocking layer remains.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-05-BAL A surviving page remains interactive

Priority: P1; layout: Balanced

Before: Prepare A/B/C with C active.

Steps:

1. From A, choose Close Tabs Below.
2. Click, scroll or type disposable text in A.

Expected:

- B/C close and A displays and responds normally.
- No stale content, blank page or invisible input-blocking layer remains.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-05-COM A surviving page remains interactive

Priority: P1; layout: Comfortable

Before: Prepare A/B/C with C active.

Steps:

1. From A, choose Close Tabs to the Right.
2. Click, scroll or type disposable text in A.

Expected:

- B/C close and A displays and responds normally.
- No stale content, blank page or invisible input-blocking layer remains.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-06-PER Last ordinary tab with protected pages

Priority: P1; layout: Performance

Before: Only ordinary A remains alongside open pin P or a protected vertical bookmark page M.

Steps:

1. Inspect both directions and Close Other Tabs on A.
2. If available, use Close Other Tabs from P to close A.

Expected:

- Empty ordinary ranges are disabled.
- Existing last-tab/placeholder behavior applies; P/M saved entries remain and the whole app does not exit unexpectedly.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-06-COM Last ordinary tab with protected pages

Priority: P1; layout: Comfortable

Before: Only ordinary A remains alongside open pin P or a protected vertical bookmark page M.

Steps:

1. Inspect both directions and Close Other Tabs on A.
2. If available, use Close Other Tabs from P to close A.

Expected:

- Empty ordinary ranges are disabled.
- Existing last-tab/placeholder behavior applies; P/M saved entries remain and the whole app does not exit unexpectedly.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-07-PER Loading or unloaded pages

Priority: P1; layout: Performance

Before: Prepare A/B/C; B is loading or has been unloaded using an available browser action.

Steps:

1. Use B as an anchor for a directional close.
2. Recreate and put B among the targets.

Expected:

- B stays when it is the anchor and closes when targeted.
- Closing does not require an unrelated reload or affect another page.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-07-COM Loading or unloaded pages

Priority: P1; layout: Comfortable

Before: Prepare A/B/C; B is loading or has been unloaded using an available browser action.

Steps:

1. Use B as an anchor for a directional close.
2. Recreate and put B among the targets.

Expected:

- B stays when it is the anchor and closes when targeted.
- Closing does not require an unrelated reload or affect another page.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-08-PER Rapid repeated directional requests

Priority: P1; layout: Performance

Before: Prepare A/B/C/D/E with positional closing on.

Steps:

1. Invoke the same direction rapidly from C and reopen the menu.
2. Open F immediately after the first close finishes.

Expected:

- Original targets close once without a crash.
- Later actions use the current valid anchor and do not confuse newly shifted or newly opened tabs with old targets.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-08-COM Rapid repeated directional requests

Priority: P1; layout: Comfortable

Before: Prepare A/B/C/D/E with positional closing on.

Steps:

1. Invoke the same direction rapidly from C and reopen the menu.
2. Open F immediately after the first close finishes.

Expected:

- Original targets close once without a crash.
- Later actions use the current valid anchor and do not confuse newly shifted or newly opened tabs with old targets.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-09-PER A canceled page is not a recently closed page

Priority: P1; layout: Performance

Before: Prepare A/B/C with unsaved text in B.

Steps:

1. From A, close following tabs, cancel B and note whether C closes.
2. Inspect Recently Closed and use one reopen action.

Expected:

- The still-open B is not listed as newly closed or duplicated by reopening.
- C may be reopened if it actually closed; record the observed reopen behavior.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-09-BAL A canceled page is not a recently closed page

Priority: P1; layout: Balanced

Before: Prepare A/B/C with unsaved text in B.

Steps:

1. From A, close following tabs, cancel B and note whether C closes.
2. Inspect Recently Closed and use one reopen action.

Expected:

- The still-open B is not listed as newly closed or duplicated by reopening.
- C may be reopened if it actually closed; record the observed reopen behavior.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-09-COM A canceled page is not a recently closed page

Priority: P1; layout: Comfortable

Before: Prepare A/B/C with unsaved text in B.

Steps:

1. From A, close following tabs, cancel B and note whether C closes.
2. Inspect Recently Closed and use one reopen action.

Expected:

- The still-open B is not listed as newly closed or duplicated by reopening.
- C may be reopened if it actually closed; record the observed reopen behavior.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-10-PER Tab previews disappear with their page

Priority: P1; layout: Performance

Before: Prepare A/B/C and an ordinary split with hover previews enabled.

Steps:

1. Hover B until its preview appears, then double-click B.
2. Recreate, preview a target and close it directionally from another tab.

Expected:

- The closed page's preview and hover effects disappear.
- No stale preview blocks surviving tabs, input or dragging.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-10-BAL Tab previews disappear with their page

Priority: P1; layout: Balanced

Before: Prepare A/B/C and an ordinary split with hover previews enabled.

Steps:

1. Hover B until its preview appears, then double-click B.
2. Recreate, preview a target and close it directionally from another tab.

Expected:

- The closed page's preview and hover effects disappear.
- No stale preview blocks surviving tabs, input or dragging.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-10-COM Tab previews disappear with their page

Priority: P1; layout: Comfortable

Before: Prepare A/B/C and an ordinary split with hover previews enabled.

Steps:

1. Hover B until its preview appears, then double-click B.
2. Recreate, preview a target and close it directionally from another tab.

Expected:

- The closed page's preview and hover effects disappear.
- No stale preview blocks surviving tabs, input or dragging.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-11-PER Large tab sets and repeated batch closing

Priority: P1; layout: Performance

Before: In a dedicated test window, create 50-100 numbered pages with some splits/groups and record the full order.

Steps:

1. Close one direction from the middle, recording duration and survivors.
2. Recreate the setup and repeat for ten rounds, checking markers, menus, scrolling and new tabs.

Expected:

- Each round closes exactly the eligible targets without ghost rows, crashes or sustained unresponsiveness.
- Report measured durations; do not infer a performance pass from appearance alone.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-11-BAL Large tab sets and repeated batch closing

Priority: P1; layout: Balanced

Before: In a dedicated test window, create 50-100 numbered pages with some splits/groups and record the full order.

Steps:

1. Close one direction from the middle, recording duration and survivors.
2. Recreate the setup and repeat for ten rounds, checking markers, menus, scrolling and new tabs.

Expected:

- Each round closes exactly the eligible targets without ghost rows, crashes or sustained unresponsiveness.
- Report measured durations; do not infer a performance pass from appearance alone.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-11-COM Large tab sets and repeated batch closing

Priority: P1; layout: Comfortable

Before: In a dedicated test window, create 50-100 numbered pages with some splits/groups and record the full order.

Steps:

1. Close one direction from the middle, recording duration and survivors.
2. Recreate the setup and repeat for ten rounds, checking markers, menus, scrolling and new tabs.

Expected:

- Each round closes exactly the eligible targets without ghost rows, crashes or sustained unresponsiveness.
- Report measured durations; do not infer a performance pass from appearance alone.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-12-PER Error or unloaded pages with both closing methods

Priority: P1; layout: Performance

Before: Prepare A/B/C with B showing a load error or unloaded through available UI.

Steps:

1. Double-click B to close it with the gesture enabled.
2. Recreate and test B as both a directional anchor and target.

Expected:

- Missing content or an icon does not confuse the target.
- An anchor stays, a target closes and unrelated pages do not reload or close instead.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-12-BAL Error or unloaded pages with both closing methods

Priority: P1; layout: Balanced

Before: Prepare A/B/C with B showing a load error or unloaded through available UI.

Steps:

1. Double-click B to close it with the gesture enabled.
2. Recreate and test B as both a directional anchor and target.

Expected:

- Missing content or an icon does not confuse the target.
- An anchor stays, a target closes and unrelated pages do not reload or close instead.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-12-COM Error or unloaded pages with both closing methods

Priority: P1; layout: Comfortable

Before: Prepare A/B/C with B showing a load error or unloaded through available UI.

Steps:

1. Double-click B to close it with the gesture enabled.
2. Recreate and test B as both a directional anchor and target.

Expected:

- Missing content or an icon does not confuse the target.
- An anchor stays, a target closes and unrelated pages do not reload or close instead.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-13-PER-reader Associated reading, preview or side-panel views

Priority: P2; layout: Performance; variant: Reader

Before: Use a version offering the feature shown on this case; open that view for disposable B.

Steps:

1. Test B as a retained anchor and a closing target in separate runs.
2. If the feature is unavailable, mark Blocked with a reason.

Expected:

- A retained page keeps its associated view usable.
- Closing B dismisses its associated surface without leaving an overlay or closing another page's content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-13-PER-peek Associated reading, preview or side-panel views

Priority: P2; layout: Performance; variant: Peek

Before: Use a version offering the feature shown on this case; open that view for disposable B.

Steps:

1. Test B as a retained anchor and a closing target in separate runs.
2. If the feature is unavailable, mark Blocked with a reason.

Expected:

- A retained page keeps its associated view usable.
- Closing B dismisses its associated surface without leaving an overlay or closing another page's content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-13-PER-sidecar Associated reading, preview or side-panel views

Priority: P2; layout: Performance; variant: Side panel

Before: Use a version offering the feature shown on this case; open that view for disposable B.

Steps:

1. Test B as a retained anchor and a closing target in separate runs.
2. If the feature is unavailable, mark Blocked with a reason.

Expected:

- A retained page keeps its associated view usable.
- Closing B dismisses its associated surface without leaving an overlay or closing another page's content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-13-BAL-reader Associated reading, preview or side-panel views

Priority: P2; layout: Balanced; variant: Reader

Before: Use a version offering the feature shown on this case; open that view for disposable B.

Steps:

1. Test B as a retained anchor and a closing target in separate runs.
2. If the feature is unavailable, mark Blocked with a reason.

Expected:

- A retained page keeps its associated view usable.
- Closing B dismisses its associated surface without leaving an overlay or closing another page's content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-13-BAL-peek Associated reading, preview or side-panel views

Priority: P2; layout: Balanced; variant: Peek

Before: Use a version offering the feature shown on this case; open that view for disposable B.

Steps:

1. Test B as a retained anchor and a closing target in separate runs.
2. If the feature is unavailable, mark Blocked with a reason.

Expected:

- A retained page keeps its associated view usable.
- Closing B dismisses its associated surface without leaving an overlay or closing another page's content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-13-BAL-sidecar Associated reading, preview or side-panel views

Priority: P2; layout: Balanced; variant: Side panel

Before: Use a version offering the feature shown on this case; open that view for disposable B.

Steps:

1. Test B as a retained anchor and a closing target in separate runs.
2. If the feature is unavailable, mark Blocked with a reason.

Expected:

- A retained page keeps its associated view usable.
- Closing B dismisses its associated surface without leaving an overlay or closing another page's content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-13-COM-reader Associated reading, preview or side-panel views

Priority: P2; layout: Comfortable; variant: Reader

Before: Use a version offering the feature shown on this case; open that view for disposable B.

Steps:

1. Test B as a retained anchor and a closing target in separate runs.
2. If the feature is unavailable, mark Blocked with a reason.

Expected:

- A retained page keeps its associated view usable.
- Closing B dismisses its associated surface without leaving an overlay or closing another page's content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-13-COM-peek Associated reading, preview or side-panel views

Priority: P2; layout: Comfortable; variant: Peek

Before: Use a version offering the feature shown on this case; open that view for disposable B.

Steps:

1. Test B as a retained anchor and a closing target in separate runs.
2. If the feature is unavailable, mark Blocked with a reason.

Expected:

- A retained page keeps its associated view usable.
- Closing B dismisses its associated surface without leaving an overlay or closing another page's content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-13-COM-sidecar Associated reading, preview or side-panel views

Priority: P2; layout: Comfortable; variant: Side panel

Before: Use a version offering the feature shown on this case; open that view for disposable B.

Steps:

1. Test B as a retained anchor and a closing target in separate runs.
2. If the feature is unavailable, mark Blocked with a reason.

Expected:

- A retained page keeps its associated view usable.
- Closing B dismisses its associated surface without leaving an overlay or closing another page's content.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-14-PER-audio Audio and downloads respect the target range

Priority: P2; layout: Performance; variant: Test audio

Before: Use disposable test audio or small files only, not calls, recordings or important downloads.

Steps:

1. Start the activity shown on this case in B, with A as anchor.
2. First retain B, then recreate and include B in the closing range.
3. If an existing download confirmation appears, test Cancel and then confirm only disposable data.

Expected:

- Activity on retained B continues.
- Targeted B follows existing media/download behavior and confirmations; unrelated pages' activity is not canceled.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-14-PER-download Audio and downloads respect the target range

Priority: P2; layout: Performance; variant: Test download

Before: Use disposable test audio or small files only, not calls, recordings or important downloads.

Steps:

1. Start the activity shown on this case in B, with A as anchor.
2. First retain B, then recreate and include B in the closing range.
3. If an existing download confirmation appears, test Cancel and then confirm only disposable data.

Expected:

- Activity on retained B continues.
- Targeted B follows existing media/download behavior and confirmations; unrelated pages' activity is not canceled.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-14-BAL-audio Audio and downloads respect the target range

Priority: P2; layout: Balanced; variant: Test audio

Before: Use disposable test audio or small files only, not calls, recordings or important downloads.

Steps:

1. Start the activity shown on this case in B, with A as anchor.
2. First retain B, then recreate and include B in the closing range.
3. If an existing download confirmation appears, test Cancel and then confirm only disposable data.

Expected:

- Activity on retained B continues.
- Targeted B follows existing media/download behavior and confirmations; unrelated pages' activity is not canceled.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-14-BAL-download Audio and downloads respect the target range

Priority: P2; layout: Balanced; variant: Test download

Before: Use disposable test audio or small files only, not calls, recordings or important downloads.

Steps:

1. Start the activity shown on this case in B, with A as anchor.
2. First retain B, then recreate and include B in the closing range.
3. If an existing download confirmation appears, test Cancel and then confirm only disposable data.

Expected:

- Activity on retained B continues.
- Targeted B follows existing media/download behavior and confirmations; unrelated pages' activity is not canceled.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-14-COM-audio Audio and downloads respect the target range

Priority: P2; layout: Comfortable; variant: Test audio

Before: Use disposable test audio or small files only, not calls, recordings or important downloads.

Steps:

1. Start the activity shown on this case in B, with A as anchor.
2. First retain B, then recreate and include B in the closing range.
3. If an existing download confirmation appears, test Cancel and then confirm only disposable data.

Expected:

- Activity on retained B continues.
- Targeted B follows existing media/download behavior and confirmations; unrelated pages' activity is not canceled.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### LIFE-14-COM-download Audio and downloads respect the target range

Priority: P2; layout: Comfortable; variant: Test download

Before: Use disposable test audio or small files only, not calls, recordings or important downloads.

Steps:

1. Start the activity shown on this case in B, with A as anchor.
2. First retain B, then recreate and include B in the closing range.
3. If an existing download confirmation appears, test Cancel and then confirm only disposable data.

Expected:

- Activity on retained B continues.
- Targeted B follows existing media/download behavior and confirmations; unrelated pages' activity is not canceled.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

## SCOPE Windows, Spaces and shortcuts

Test each boundary independently. Mark missing features or unavailable environments rather than assuming coverage.

### SCOPE-01-PER Close only in the owning window

Priority: P0; layout: Performance

Before: Prepare W1:A/B/C and W2:X/Y/Z using marked test pages in the same app.

Steps:

1. Make W2 the most recently active window, then right-click inactive B in W1 and close a direction.
2. Inspect both windows.

Expected:

- Only the chosen range in W1 closes.
- W2's pages, active content and markers remain unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-01-BAL Close only in the owning window

Priority: P0; layout: Balanced

Before: Prepare W1:A/B/C and W2:X/Y/Z using marked test pages in the same app.

Steps:

1. Make W2 the most recently active window, then right-click inactive B in W1 and close a direction.
2. Inspect both windows.

Expected:

- Only the chosen range in W1 closes.
- W2's pages, active content and markers remain unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-01-COM Close only in the owning window

Priority: P0; layout: Comfortable

Before: Prepare W1:A/B/C and W2:X/Y/Z using marked test pages in the same app.

Steps:

1. Make W2 the most recently active window, then right-click inactive B in W1 and close a direction.
2. Inspect both windows.

Expected:

- Only the chosen range in W1 closes.
- W2's pages, active content and markers remain unchanged.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-02-PER Close only in the current Space

Priority: P0; layout: Performance

Before: Prepare S1:A/B/C and S2:X/Y/Z in one window; record order and markers.

Steps:

1. From B in S1, test a directional close and Close Other Tabs in separate runs.
2. Return to S2.

Expected:

- S2 pages and markers are unchanged.
- Switching Spaces does not carry a previous Space's closing target into the new one.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-02-BAL Close only in the current Space

Priority: P0; layout: Balanced

Before: Prepare S1:A/B/C and S2:X/Y/Z in one window; record order and markers.

Steps:

1. From B in S1, test a directional close and Close Other Tabs in separate runs.
2. Return to S2.

Expected:

- S2 pages and markers are unchanged.
- Switching Spaces does not carry a previous Space's closing target into the new one.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-02-COM Close only in the current Space

Priority: P0; layout: Comfortable

Before: Prepare S1:A/B/C and S2:X/Y/Z in one window; record order and markers.

Steps:

1. From B in S1, test a directional close and Close Other Tabs in separate runs.
2. Return to S2.

Expected:

- S2 pages and markers are unchanged.
- Switching Spaces does not carry a previous Space's closing target into the new one.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-03-COMMON Anchor disappears while its menu is open

Priority: P1; layout: Common

Before: Use disposable windows/pages and a normal UI path that can move or close the original anchor.

Steps:

1. Open the anchor's menu, then move or close that anchor through another available UI action.
2. Try the original action if the menu remains; otherwise record automatic dismissal.

Expected:

- An unavailable anchor does not cause a newly occupying tab to close.
- Automatic dismissal is a safe result; if normal UI cannot reproduce the setup, mark Blocked.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-04-COMMON Closing within a private window

Priority: P1; layout: Common

Before: Open disposable A/B/C in a private window supported by the installed version.

Steps:

1. From B, test a direction and Close Other Tabs in separate runs.
2. Inspect the normal window.

Expected:

- Only eligible pages in the private window close; normal windows remain unchanged.
- Existing private-mode limits on saving pins/bookmarks remain in effect.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-05-COMMON Last-page confirmation for a private Space

Priority: P1; layout: Common

Before: Use a disposable private Space in a version that provides one.

Steps:

1. Use an existing closing action to approach its last page and inspect any Space-close confirmation.
2. Cancel first, then recreate and confirm for the disposable Space.

Expected:

- Displayed confirmation is respected and Cancel retains the Space.
- Closing the private Space does not close a normal Space.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-06-COMMON Respect an AI-controlled Space

Priority: P1; layout: Common

Before: Run only in a version with a visible AI task controlling a disposable Space.

Steps:

1. Before taking control, try double-click, directional closing and Close Other Tabs through the available UI.
2. Take control through the app's normal control and repeat.

Expected:

- While the AI controls the Space, protected pages cannot be closed by these actions; controls may be disabled.
- After taking control, ordinary closing rules apply. If unavailable, mark Blocked.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-07-PER Existing Close Tabs to the Right shortcut

Priority: P1; layout: Performance

Before: Record the original shortcut and temporarily assign a non-conflicting combination if the action is offered; prepare D/A/B/C.

Steps:

1. With B active and positional closing on, invoke the shortcut.
2. Recreate, turn positional closing off and repeat.

Expected:

- When enabled, only following C closes, meaning Below in a vertical bar.
- When disabled, the directional shortcut does nothing.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-07-COM Existing Close Tabs to the Right shortcut

Priority: P1; layout: Comfortable

Before: Record the original shortcut and temporarily assign a non-conflicting combination if the action is offered; prepare D/A/B/C.

Steps:

1. With B active and positional closing on, invoke the shortcut.
2. Recreate, turn positional closing off and repeat.

Expected:

- When enabled, only following C closes, meaning Below in a vertical bar.
- When disabled, the directional shortcut does nothing.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-08-COMMON Close Other Tabs shortcut stays independent

Priority: P1; layout: Common

Before: Record the original shortcut and assign a non-conflicting test combination if available; prepare A/B/C with B active and protected test entries.

Steps:

1. With positional closing off, invoke Close Other Tabs.
2. Recreate, select B/C and invoke it again.

Expected:

- Close Other Tabs still respects protected entries.
- It retains B in the first run and B/C in the second; the positional preference does not disable it.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-09-PER Separate Profiles keep separate pages

Priority: P0; layout: Performance

Before: Prepare test Profiles P1:A/B/C and P2:X/Y/Z, each with test pins/bookmarks.

Steps:

1. From B in P1, test a directional close and Close Other Tabs in separate runs.
2. Inspect P2.

Expected:

- P2 pages, markers and saved entries remain unchanged.
- A shared app preference does not create a shared closing range between Profiles or windows.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-09-BAL Separate Profiles keep separate pages

Priority: P0; layout: Balanced

Before: Prepare test Profiles P1:A/B/C and P2:X/Y/Z, each with test pins/bookmarks.

Steps:

1. From B in P1, test a directional close and Close Other Tabs in separate runs.
2. Inspect P2.

Expected:

- P2 pages, markers and saved entries remain unchanged.
- A shared app preference does not create a shared closing range between Profiles or windows.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-09-COM Separate Profiles keep separate pages

Priority: P0; layout: Comfortable

Before: Prepare test Profiles P1:A/B/C and P2:X/Y/Z, each with test pins/bookmarks.

Steps:

1. From B in P1, test a directional close and Close Other Tabs in separate runs.
2. Inspect P2.

Expected:

- P2 pages, markers and saved entries remain unchanged.
- A shared app preference does not create a shared closing range between Profiles or windows.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-10-PER Shared pins between Spaces

Priority: P1; layout: Performance

Before: Test Spaces S1/S2 in one Profile show the same saved pin P; ordinary pages are A/B/C and X/Y/Z.

Steps:

1. Enter a marker in P.
2. From B in S1, close other tabs, then inspect S2 and P.

Expected:

- Only S1 ordinary targets close; S2 ordinary pages and the saved pin remain.
- Compare actual opening IDs without assuming both Spaces necessarily show the same live document.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-10-BAL Shared pins between Spaces

Priority: P1; layout: Balanced

Before: Test Spaces S1/S2 in one Profile show the same saved pin P; ordinary pages are A/B/C and X/Y/Z.

Steps:

1. Enter a marker in P.
2. From B in S1, close other tabs, then inspect S2 and P.

Expected:

- Only S1 ordinary targets close; S2 ordinary pages and the saved pin remain.
- Compare actual opening IDs without assuming both Spaces necessarily show the same live document.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-10-COM Shared pins between Spaces

Priority: P1; layout: Comfortable

Before: Test Spaces S1/S2 in one Profile show the same saved pin P; ordinary pages are A/B/C and X/Y/Z.

Steps:

1. Enter a marker in P.
2. From B in S1, close other tabs, then inspect S2 and P.

Expected:

- Only S1 ordinary targets close; S2 ordinary pages and the saved pin remain.
- Compare actual opening IDs without assuming both Spaces necessarily show the same live document.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-11-PER Closing after moving a tab to another window

Priority: P1; layout: Performance

Before: Prepare W1:A/B/C and W2:X/Y with positional closing on.

Steps:

1. Move B to W2 using an existing UI action and record both orders.
2. From A in W1, close following tabs; then test a direction from B in W2.

Expected:

- Each action affects only the tab's current window.
- B does not remain a target in W1 and no stale row remains there.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-11-BAL Closing after moving a tab to another window

Priority: P1; layout: Balanced

Before: Prepare W1:A/B/C and W2:X/Y with positional closing on.

Steps:

1. Move B to W2 using an existing UI action and record both orders.
2. From A in W1, close following tabs; then test a direction from B in W2.

Expected:

- Each action affects only the tab's current window.
- B does not remain a target in W1 and no stale row remains there.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-11-COM Closing after moving a tab to another window

Priority: P1; layout: Comfortable

Before: Prepare W1:A/B/C and W2:X/Y with positional closing on.

Steps:

1. Move B to W2 using an existing UI action and record both orders.
2. From A in W1, close following tabs; then test a direction from B in W2.

Expected:

- Each action affects only the tab's current window.
- B does not remain a target in W1 and no stale row remains there.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-12-PER Closing after moving a tab to another Space

Priority: P1; layout: Performance

Before: Prepare S1:A/B/C and S2:X/Y with positional closing on.

Steps:

1. Move B to S2 through Move to Space.
2. From A in S1, close following tabs.
3. Inspect S2 and test a direction from B there.

Expected:

- The first action closes C only and leaves B/X/Y in S2 unchanged.
- The second follows S2's current order rather than B's former position in S1.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-12-BAL Closing after moving a tab to another Space

Priority: P1; layout: Balanced

Before: Prepare S1:A/B/C and S2:X/Y with positional closing on.

Steps:

1. Move B to S2 through Move to Space.
2. From A in S1, close following tabs.
3. Inspect S2 and test a direction from B there.

Expected:

- The first action closes C only and leaves B/X/Y in S2 unchanged.
- The second follows S2's current order rather than B's former position in S1.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-12-COM Closing after moving a tab to another Space

Priority: P1; layout: Comfortable

Before: Prepare S1:A/B/C and S2:X/Y with positional closing on.

Steps:

1. Move B to S2 through Move to Space.
2. From A in S1, close following tabs.
3. Inspect S2 and test a direction from B there.

Expected:

- The first action closes C only and leaves B/X/Y in S2 unchanged.
- The second follows S2's current order rather than B's former position in S1.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-13-PER-pin Directional shortcut with a protected vertical page

Priority: P0; layout: Performance; variant: Pinned tab

Before: In a vertical layout, prepare A/B/C and open test pin P, pinned split PS, bookmark M and bookmarked split MS. Configure the existing directional shortcut if offered.

Steps:

1. Focus the protected entry shown on this case and invoke Close Tabs to the Right.
2. Then invoke Close Other Tabs and inspect all saved entries.

Expected:

- A protected entry is not an ordinary directional anchor; A/B/C do not close in the first step.
- Close Other Tabs may close ordinary pages but preserves protected pages and saved entries.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-13-PER-pin-split Directional shortcut with a protected vertical page

Priority: P0; layout: Performance; variant: Pinned split

Before: In a vertical layout, prepare A/B/C and open test pin P, pinned split PS, bookmark M and bookmarked split MS. Configure the existing directional shortcut if offered.

Steps:

1. Focus the protected entry shown on this case and invoke Close Tabs to the Right.
2. Then invoke Close Other Tabs and inspect all saved entries.

Expected:

- A protected entry is not an ordinary directional anchor; A/B/C do not close in the first step.
- Close Other Tabs may close ordinary pages but preserves protected pages and saved entries.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-13-PER-bookmark Directional shortcut with a protected vertical page

Priority: P0; layout: Performance; variant: Opened bookmark page

Before: In a vertical layout, prepare A/B/C and open test pin P, pinned split PS, bookmark M and bookmarked split MS. Configure the existing directional shortcut if offered.

Steps:

1. Focus the protected entry shown on this case and invoke Close Tabs to the Right.
2. Then invoke Close Other Tabs and inspect all saved entries.

Expected:

- A protected entry is not an ordinary directional anchor; A/B/C do not close in the first step.
- Close Other Tabs may close ordinary pages but preserves protected pages and saved entries.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-13-PER-bookmark-split Directional shortcut with a protected vertical page

Priority: P0; layout: Performance; variant: Opened split bookmark

Before: In a vertical layout, prepare A/B/C and open test pin P, pinned split PS, bookmark M and bookmarked split MS. Configure the existing directional shortcut if offered.

Steps:

1. Focus the protected entry shown on this case and invoke Close Tabs to the Right.
2. Then invoke Close Other Tabs and inspect all saved entries.

Expected:

- A protected entry is not an ordinary directional anchor; A/B/C do not close in the first step.
- Close Other Tabs may close ordinary pages but preserves protected pages and saved entries.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-13-BAL-pin Directional shortcut with a protected vertical page

Priority: P0; layout: Balanced; variant: Pinned tab

Before: In a vertical layout, prepare A/B/C and open test pin P, pinned split PS, bookmark M and bookmarked split MS. Configure the existing directional shortcut if offered.

Steps:

1. Focus the protected entry shown on this case and invoke Close Tabs to the Right.
2. Then invoke Close Other Tabs and inspect all saved entries.

Expected:

- A protected entry is not an ordinary directional anchor; A/B/C do not close in the first step.
- Close Other Tabs may close ordinary pages but preserves protected pages and saved entries.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-13-BAL-pin-split Directional shortcut with a protected vertical page

Priority: P0; layout: Balanced; variant: Pinned split

Before: In a vertical layout, prepare A/B/C and open test pin P, pinned split PS, bookmark M and bookmarked split MS. Configure the existing directional shortcut if offered.

Steps:

1. Focus the protected entry shown on this case and invoke Close Tabs to the Right.
2. Then invoke Close Other Tabs and inspect all saved entries.

Expected:

- A protected entry is not an ordinary directional anchor; A/B/C do not close in the first step.
- Close Other Tabs may close ordinary pages but preserves protected pages and saved entries.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-13-BAL-bookmark Directional shortcut with a protected vertical page

Priority: P0; layout: Balanced; variant: Opened bookmark page

Before: In a vertical layout, prepare A/B/C and open test pin P, pinned split PS, bookmark M and bookmarked split MS. Configure the existing directional shortcut if offered.

Steps:

1. Focus the protected entry shown on this case and invoke Close Tabs to the Right.
2. Then invoke Close Other Tabs and inspect all saved entries.

Expected:

- A protected entry is not an ordinary directional anchor; A/B/C do not close in the first step.
- Close Other Tabs may close ordinary pages but preserves protected pages and saved entries.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-13-BAL-bookmark-split Directional shortcut with a protected vertical page

Priority: P0; layout: Balanced; variant: Opened split bookmark

Before: In a vertical layout, prepare A/B/C and open test pin P, pinned split PS, bookmark M and bookmarked split MS. Configure the existing directional shortcut if offered.

Steps:

1. Focus the protected entry shown on this case and invoke Close Tabs to the Right.
2. Then invoke Close Other Tabs and inspect all saved entries.

Expected:

- A protected entry is not an ordinary directional anchor; A/B/C do not close in the first step.
- Close Other Tabs may close ordinary pages but preserves protected pages and saved entries.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-14-PER Existing shortcuts retain a split anchor

Priority: P0; layout: Performance

Before: Prepare A, S[B+C], D; configure the existing directional and Close Other Tabs shortcuts if offered.

Steps:

1. In separate runs, focus B and C, then invoke each shortcut.

Expected:

- Directional closing removes D only; Close Other Tabs removes A/D.
- Both B/C stay paired regardless of the focused pane.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-14-BAL Existing shortcuts retain a split anchor

Priority: P0; layout: Balanced

Before: Prepare A, S[B+C], D; configure the existing directional and Close Other Tabs shortcuts if offered.

Steps:

1. In separate runs, focus B and C, then invoke each shortcut.

Expected:

- Directional closing removes D only; Close Other Tabs removes A/D.
- Both B/C stay paired regardless of the focused pane.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-14-COM Existing shortcuts retain a split anchor

Priority: P0; layout: Comfortable

Before: Prepare A, S[B+C], D; configure the existing directional and Close Other Tabs shortcuts if offered.

Steps:

1. In separate runs, focus B and C, then invoke each shortcut.

Expected:

- Directional closing removes D only; Close Other Tabs removes A/D.
- Both B/C stay paired regardless of the focused pane.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-15-PER Closing around a new-tab page

Priority: P0; layout: Performance

Before: Prepare ordinary A, N[new-tab page], B with positional closing on and existing test shortcuts if offered.

Steps:

1. Focus N and test following tabs through its menu and the directional shortcut.
2. Recreate and test Close Other Tabs, then enabled double-click closing on N.

Expected:

- Following closes B only and Close Other Tabs retains N.
- Enabled double-click closes N only; the new-tab page does not cause a crash or redirect the action to another page.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-15-BAL Closing around a new-tab page

Priority: P0; layout: Balanced

Before: Prepare ordinary A, N[new-tab page], B with positional closing on and existing test shortcuts if offered.

Steps:

1. Focus N and test following tabs through its menu and the directional shortcut.
2. Recreate and test Close Other Tabs, then enabled double-click closing on N.

Expected:

- Following closes B only and Close Other Tabs retains N.
- Enabled double-click closes N only; the new-tab page does not cause a crash or redirect the action to another page.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-15-COM Closing around a new-tab page

Priority: P0; layout: Comfortable

Before: Prepare ordinary A, N[new-tab page], B with positional closing on and existing test shortcuts if offered.

Steps:

1. Focus N and test following tabs through its menu and the directional shortcut.
2. Recreate and test Close Other Tabs, then enabled double-click closing on N.

Expected:

- Following closes B only and Close Other Tabs retains N.
- Enabled double-click closes N only; the new-tab page does not cause a crash or redirect the action to another page.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-16-PER Shortcuts with page or address-field focus

Priority: P1; layout: Performance

Before: Prepare A/B/C with B active and an available non-conflicting directional shortcut.

Steps:

1. Focus B's input, invoke the shortcut with positional closing on, then recreate and test it off.
2. Repeat with the address field focused, without submitting text to an external site.

Expected:

- Enabled closing follows B's current order and disabled closing does nothing.
- Focus location does not bypass the switch or protected-entry rules.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-16-BAL Shortcuts with page or address-field focus

Priority: P1; layout: Balanced

Before: Prepare A/B/C with B active and an available non-conflicting directional shortcut.

Steps:

1. Focus B's input, invoke the shortcut with positional closing on, then recreate and test it off.
2. Repeat with the address field focused, without submitting text to an external site.

Expected:

- Enabled closing follows B's current order and disabled closing does nothing.
- Focus location does not bypass the switch or protected-entry rules.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-16-COM Shortcuts with page or address-field focus

Priority: P1; layout: Comfortable

Before: Prepare A/B/C with B active and an available non-conflicting directional shortcut.

Steps:

1. Focus B's input, invoke the shortcut with positional closing on, then recreate and test it off.
2. Repeat with the address field focused, without submitting text to an external site.

Expected:

- Enabled closing follows B's current order and disabled closing does nothing.
- Focus location does not bypass the switch or protected-entry rules.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-17-COMMON Closing while the interface is temporarily unavailable

Priority: P2; layout: Common

Before: Run only when a disposable test session presents an account or profile transition that temporarily blocks tab interaction.

Steps:

1. During the displayed transition, inspect tab/group closing actions and existing closing shortcuts.
2. After normal interaction returns, repeat from the current test Space.

Expected:

- Closing cannot bypass the blocking screen.
- Once interaction resumes, actions affect only the current Profile, Space and window; do not use a personal account to force this setup.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-18-PER-cancel Double-click the last page in a private Space

Priority: P0; layout: Performance; variant: Cancel

Before: A disposable private Space contains only A and double-click closing is on.

Steps:

1. Double-click A and choose this case's response if a Space-close confirmation appears.
2. Inspect normal Spaces/windows.

Expected:

- Cancel retains A and the private Space; confirming closes only that test Space.
- Existing confirmation behavior is not bypassed and normal Spaces remain unaffected.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-18-PER-leave Double-click the last page in a private Space

Priority: P0; layout: Performance; variant: Confirm / Leave

Before: A disposable private Space contains only A and double-click closing is on.

Steps:

1. Double-click A and choose this case's response if a Space-close confirmation appears.
2. Inspect normal Spaces/windows.

Expected:

- Cancel retains A and the private Space; confirming closes only that test Space.
- Existing confirmation behavior is not bypassed and normal Spaces remain unaffected.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-18-BAL-cancel Double-click the last page in a private Space

Priority: P0; layout: Balanced; variant: Cancel

Before: A disposable private Space contains only A and double-click closing is on.

Steps:

1. Double-click A and choose this case's response if a Space-close confirmation appears.
2. Inspect normal Spaces/windows.

Expected:

- Cancel retains A and the private Space; confirming closes only that test Space.
- Existing confirmation behavior is not bypassed and normal Spaces remain unaffected.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-18-BAL-leave Double-click the last page in a private Space

Priority: P0; layout: Balanced; variant: Confirm / Leave

Before: A disposable private Space contains only A and double-click closing is on.

Steps:

1. Double-click A and choose this case's response if a Space-close confirmation appears.
2. Inspect normal Spaces/windows.

Expected:

- Cancel retains A and the private Space; confirming closes only that test Space.
- Existing confirmation behavior is not bypassed and normal Spaces remain unaffected.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-18-COM-cancel Double-click the last page in a private Space

Priority: P0; layout: Comfortable; variant: Cancel

Before: A disposable private Space contains only A and double-click closing is on.

Steps:

1. Double-click A and choose this case's response if a Space-close confirmation appears.
2. Inspect normal Spaces/windows.

Expected:

- Cancel retains A and the private Space; confirming closes only that test Space.
- Existing confirmation behavior is not bypassed and normal Spaces remain unaffected.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-18-COM-leave Double-click the last page in a private Space

Priority: P0; layout: Comfortable; variant: Confirm / Leave

Before: A disposable private Space contains only A and double-click closing is on.

Steps:

1. Double-click A and choose this case's response if a Space-close confirmation appears.
2. Inspect normal Spaces/windows.

Expected:

- Cancel retains A and the private Space; confirming closes only that test Space.
- Existing confirmation behavior is not bypassed and normal Spaces remain unaffected.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-19-COM-pin Directional shortcut from a horizontal pin

Priority: P0; layout: Comfortable; variant: Pinned tab

Before: In Comfortable, prepare A/B/C, open pin P and pinned split PS, with existing test shortcuts if available.

Steps:

1. Focus the protected item shown on this case and invoke the directional shortcut.
2. Recreate and invoke Close Other Tabs.

Expected:

- Pins are not ordinary directional anchors, so the first action leaves A/B/C.
- Close Other Tabs closes only ordinary targets and retains P/PS pages and saved entries.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-19-COM-pin-split Directional shortcut from a horizontal pin

Priority: P0; layout: Comfortable; variant: Pinned split

Before: In Comfortable, prepare A/B/C, open pin P and pinned split PS, with existing test shortcuts if available.

Steps:

1. Focus the protected item shown on this case and invoke the directional shortcut.
2. Recreate and invoke Close Other Tabs.

Expected:

- Pins are not ordinary directional anchors, so the first action leaves A/B/C.
- Close Other Tabs closes only ordinary targets and retains P/PS pages and saved entries.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### SCOPE-20-COMMON Private closing does not enter normal history

Priority: P1; layout: Common

Before: Prepare disposable private and normal windows using random test identifiers; note normal Recently Closed entries.

Steps:

1. In private mode, test double-click, directional closing and Close Other Tabs.
2. Close the test private window and inspect normal history and Recently Closed.

Expected:

- Private pages do not appear as new normal-history or Recently Closed entries from these actions.
- Existing normal records are preserved; do not assume private reopening features beyond those offered by the app.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

## VIS Language, appearance and accessibility

Check the displayed interface in each specified language and layout; a translation reference alone is not a UI result.

### VIS-01-PER Simplified Chinese interface

Priority: P0; layout: Performance

Before: Select Simplified Chinese with positional closing on.

Steps:

1. Read the two switches and descriptions in the second card.
2. Inspect an ordinary-tab menu and a group-heading menu in this layout.

Expected:

- Labels match the language reference and directions match the tab bar.
- No untranslated key, missing text or unexpected English fallback appears.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-01-BAL Simplified Chinese interface

Priority: P0; layout: Balanced

Before: Select Simplified Chinese with positional closing on.

Steps:

1. Read the two switches and descriptions in the second card.
2. Inspect an ordinary-tab menu and a group-heading menu in this layout.

Expected:

- Labels match the language reference and directions match the tab bar.
- No untranslated key, missing text or unexpected English fallback appears.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-01-COM Simplified Chinese interface

Priority: P0; layout: Comfortable

Before: Select Simplified Chinese with positional closing on.

Steps:

1. Read the two switches and descriptions in the second card.
2. Inspect an ordinary-tab menu and a group-heading menu in this layout.

Expected:

- Labels match the language reference and directions match the tab bar.
- No untranslated key, missing text or unexpected English fallback appears.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-PER-en Interface language shown on this case

Priority: P1; layout: Performance; language: en

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-PER-zh-Hant Interface language shown on this case

Priority: P1; layout: Performance; language: zh-Hant

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-PER-ja Interface language shown on this case

Priority: P1; layout: Performance; language: ja

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-PER-ko Interface language shown on this case

Priority: P1; layout: Performance; language: ko

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-PER-de Interface language shown on this case

Priority: P1; layout: Performance; language: de

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-PER-fr Interface language shown on this case

Priority: P1; layout: Performance; language: fr

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-PER-es Interface language shown on this case

Priority: P1; layout: Performance; language: es

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-PER-nl Interface language shown on this case

Priority: P1; layout: Performance; language: nl

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-BAL-en Interface language shown on this case

Priority: P1; layout: Balanced; language: en

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-BAL-zh-Hant Interface language shown on this case

Priority: P1; layout: Balanced; language: zh-Hant

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-BAL-ja Interface language shown on this case

Priority: P1; layout: Balanced; language: ja

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-BAL-ko Interface language shown on this case

Priority: P1; layout: Balanced; language: ko

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-BAL-de Interface language shown on this case

Priority: P1; layout: Balanced; language: de

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-BAL-fr Interface language shown on this case

Priority: P1; layout: Balanced; language: fr

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-BAL-es Interface language shown on this case

Priority: P1; layout: Balanced; language: es

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-BAL-nl Interface language shown on this case

Priority: P1; layout: Balanced; language: nl

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-COM-en Interface language shown on this case

Priority: P1; layout: Comfortable; language: en

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-COM-zh-Hant Interface language shown on this case

Priority: P1; layout: Comfortable; language: zh-Hant

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-COM-ja Interface language shown on this case

Priority: P1; layout: Comfortable; language: ja

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-COM-ko Interface language shown on this case

Priority: P1; layout: Comfortable; language: ko

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-COM-de Interface language shown on this case

Priority: P1; layout: Comfortable; language: de

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-COM-fr Interface language shown on this case

Priority: P1; layout: Comfortable; language: fr

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-COM-es Interface language shown on this case

Priority: P1; layout: Comfortable; language: es

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-02-COM-nl Interface language shown on this case

Priority: P1; layout: Comfortable; language: nl

Before: Test only this case's specified language and layout; change language in General and restart if prompted.

Steps:

1. Confirm the selected UI language.
2. In this layout, compare the switches, descriptions and tab/group direction items with the language reference.
3. Inspect wrapping of long text.

Expected:

- Text matches the selected language with readable characters and correct directions.
- Labels and descriptions are not clipped; record each language/layout separately.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-03-PER Light, dark and narrow layouts

Priority: P1; layout: Performance

Before: Enable both switches; prepare ordinary tabs, a split and a grouped split.

Steps:

1. Test light and dark appearance.
2. Narrow the sidebar within its allowed range and expand/collapse the group.
3. Inspect controls, long titles, disabled items and descriptions.

Expected:

- Text, switches, focus and disabled states are distinguishable and descriptions wrap.
- Close controls and split hit areas do not overlap or target neighbors.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-03-COM Light, dark and narrow layouts

Priority: P1; layout: Comfortable

Before: Enable both switches; prepare ordinary tabs, a split and a grouped split.

Steps:

1. Test light and dark appearance.
2. Narrow the sidebar within its allowed range and expand/collapse the group.
3. Inspect controls, long titles, disabled items and descriptions.

Expected:

- Text, switches, focus and disabled states are distinguishable and descriptions wrap.
- Close controls and split hit areas do not overlap or target neighbors.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-04-COMMON Keyboard and accessibility labels

Priority: P1; layout: Common

Before: Enable normal keyboard navigation or VoiceOver for a disposable test session.

Steps:

1. Navigate to each Advanced switch by keyboard and change it.
2. Read each switch's accessible name and state.

Expected:

- Both controls have distinct, meaningful names and readable states/descriptions.
- Changing one does not change the other or lose focus to an unrelated setting.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-05-COMMON Export the run and restore the environment

Priority: P0; layout: Common

Before: Finish the run and add notes to failed, blocked and skipped cases.

Steps:

1. Enter the app version and export JSON, then copy or download the Markdown report.
2. Restore the original layout, switches and shortcuts.
3. Remove only test-created pins/data, checking before permanently deleting disposable groups.

Expected:

- Reports include case IDs, layout, result, notes, tester and environment.
- Untested cases stay Not run and incomplete P0 cases are listed; personal data is preserved.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-06-PER Full screen and display scaling

Priority: P1; layout: Performance

Before: Use a dedicated test window with long titles and both switches on.

Steps:

1. Enter macOS full screen, reveal the tab bar and inspect menus and split double-click closing.
2. Repeat at another available display scale or monitor, recording missing devices.

Expected:

- The visible tab/pane remains the target and directions stay correct.
- Exiting full screen leaves the window usable; unavailable display coverage is recorded.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-06-BAL Full screen and display scaling

Priority: P1; layout: Balanced

Before: Use a dedicated test window with long titles and both switches on.

Steps:

1. Enter macOS full screen, reveal the tab bar and inspect menus and split double-click closing.
2. Repeat at another available display scale or monitor, recording missing devices.

Expected:

- The visible tab/pane remains the target and directions stay correct.
- Exiting full screen leaves the window usable; unavailable display coverage is recorded.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-06-COM Full screen and display scaling

Priority: P1; layout: Comfortable

Before: Use a dedicated test window with long titles and both switches on.

Steps:

1. Enter macOS full screen, reveal the tab bar and inspect menus and split double-click closing.
2. Repeat at another available display scale or monitor, recording missing devices.

Expected:

- The visible tab/pane remains the target and directions stay correct.
- Exiting full screen leaves the window usable; unavailable display coverage is recorded.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-07-PER-mouse Mouse and trackpad consistency

Priority: P1; layout: Performance; variant: Mouse

Before: Have the device shown on this case and note its actual click/tap settings.

Steps:

1. With that device, double-click ordinary tabs, group members, ordinary splits and grouped splits.
2. Keep system double-click speed unchanged unless the test explicitly requires otherwise.

Expected:

- Each surface closes the same intended pages without repeated actions.
- Missing hardware is Blocked; a simulated input is not evidence of real-device coverage.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-07-PER-trackpad Mouse and trackpad consistency

Priority: P1; layout: Performance; variant: Trackpad

Before: Have the device shown on this case and note its actual click/tap settings.

Steps:

1. With that device, double-click ordinary tabs, group members, ordinary splits and grouped splits.
2. Keep system double-click speed unchanged unless the test explicitly requires otherwise.

Expected:

- Each surface closes the same intended pages without repeated actions.
- Missing hardware is Blocked; a simulated input is not evidence of real-device coverage.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-07-BAL-mouse Mouse and trackpad consistency

Priority: P1; layout: Balanced; variant: Mouse

Before: Have the device shown on this case and note its actual click/tap settings.

Steps:

1. With that device, double-click ordinary tabs, group members, ordinary splits and grouped splits.
2. Keep system double-click speed unchanged unless the test explicitly requires otherwise.

Expected:

- Each surface closes the same intended pages without repeated actions.
- Missing hardware is Blocked; a simulated input is not evidence of real-device coverage.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-07-BAL-trackpad Mouse and trackpad consistency

Priority: P1; layout: Balanced; variant: Trackpad

Before: Have the device shown on this case and note its actual click/tap settings.

Steps:

1. With that device, double-click ordinary tabs, group members, ordinary splits and grouped splits.
2. Keep system double-click speed unchanged unless the test explicitly requires otherwise.

Expected:

- Each surface closes the same intended pages without repeated actions.
- Missing hardware is Blocked; a simulated input is not evidence of real-device coverage.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-07-COM-mouse Mouse and trackpad consistency

Priority: P1; layout: Comfortable; variant: Mouse

Before: Have the device shown on this case and note its actual click/tap settings.

Steps:

1. With that device, double-click ordinary tabs, group members, ordinary splits and grouped splits.
2. Keep system double-click speed unchanged unless the test explicitly requires otherwise.

Expected:

- Each surface closes the same intended pages without repeated actions.
- Missing hardware is Blocked; a simulated input is not evidence of real-device coverage.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-07-COM-trackpad Mouse and trackpad consistency

Priority: P1; layout: Comfortable; variant: Trackpad

Before: Have the device shown on this case and note its actual click/tap settings.

Steps:

1. With that device, double-click ordinary tabs, group members, ordinary splits and grouped splits.
2. Keep system double-click speed unchanged unless the test explicitly requires otherwise.

Expected:

- Each surface closes the same intended pages without repeated actions.
- Missing hardware is Blocked; a simulated input is not evidence of real-device coverage.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-08-PER Menu wording, order and no extra heading

Priority: P1; layout: Performance

Before: The second Advanced card contains both switches without a heading; prepare a tab, split and group.

Steps:

1. Inspect Close, Close Other Tabs and the directional items on tab/group menus.
2. Change layout/language, reopen menus and check for duplicates or empty headings.

Expected:

- Direction labels match the layout and group boundary, and existing close actions remain.
- The second settings card remains separate and untitled without duplicated controls.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-08-BAL Menu wording, order and no extra heading

Priority: P1; layout: Balanced

Before: The second Advanced card contains both switches without a heading; prepare a tab, split and group.

Steps:

1. Inspect Close, Close Other Tabs and the directional items on tab/group menus.
2. Change layout/language, reopen menus and check for duplicates or empty headings.

Expected:

- Direction labels match the layout and group boundary, and existing close actions remain.
- The second settings card remains separate and untitled without duplicated controls.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### VIS-08-COM Menu wording, order and no extra heading

Priority: P1; layout: Comfortable

Before: The second Advanced card contains both switches without a heading; prepare a tab, split and group.

Steps:

1. Inspect Close, Close Other Tabs and the directional items on tab/group menus.
2. Change layout/language, reopen menus and check for duplicates or empty headings.

Expected:

- Direction labels match the layout and group boundary, and existing close actions remain.
- The second settings card remains separate and untitled without duplicated controls.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

## EXP Exploratory and compatibility checks

Record actual behavior and evidence. Do not claim a pass for an unavailable setup or an unspecified restoration detail.

### EXP-01-PER Fast clicks across different tabs or panes

Priority: P2; layout: Performance

Before: Enable double-click closing and prepare A/B/C and S[B+C]; use a real input device.

Steps:

1. Click B then C rapidly near the system double-click interval.
2. Compare with a same-target double-click and record a video and survivors.

Expected:

- Record the actual cross-target gesture and result without assuming it equals a same-target double-click.
- Treat this as an observation-only case if no agreed acceptance behavior is available.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### EXP-01-BAL Fast clicks across different tabs or panes

Priority: P2; layout: Balanced

Before: Enable double-click closing and prepare A/B/C and S[B+C]; use a real input device.

Steps:

1. Click B then C rapidly near the system double-click interval.
2. Compare with a same-target double-click and record a video and survivors.

Expected:

- Record the actual cross-target gesture and result without assuming it equals a same-target double-click.
- Treat this as an observation-only case if no agreed acceptance behavior is available.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### EXP-01-COM Fast clicks across different tabs or panes

Priority: P2; layout: Comfortable

Before: Enable double-click closing and prepare A/B/C and S[B+C]; use a real input device.

Steps:

1. Click B then C rapidly near the system double-click interval.
2. Compare with a same-target double-click and record a video and survivors.

Expected:

- Record the actual cross-target gesture and result without assuming it equals a same-target double-click.
- Treat this as an observation-only case if no agreed acceptance behavior is available.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### EXP-02-PER Reopen a deleted disposable group

Priority: P2; layout: Performance

Before: Use only a disposable TC-G, with no personal pages, and allow its explicit deletion.

Steps:

1. Close it from an outside tab's batch action and confirm after checking the dialog.
2. Try existing reopen/history actions and record URLs, group name/color/order and split pairing/ratio separately.

Expected:

- Report page reopening separately from complete group restoration.
- Do not mark full restoration Passed based only on the URLs reopening; treat unsupported or unspecified restoration details as observations.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### EXP-02-BAL Reopen a deleted disposable group

Priority: P2; layout: Balanced

Before: Use only a disposable TC-G, with no personal pages, and allow its explicit deletion.

Steps:

1. Close it from an outside tab's batch action and confirm after checking the dialog.
2. Try existing reopen/history actions and record URLs, group name/color/order and split pairing/ratio separately.

Expected:

- Report page reopening separately from complete group restoration.
- Do not mark full restoration Passed based only on the URLs reopening; treat unsupported or unspecified restoration details as observations.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### EXP-02-COM Reopen a deleted disposable group

Priority: P2; layout: Comfortable

Before: Use only a disposable TC-G, with no personal pages, and allow its explicit deletion.

Steps:

1. Close it from an outside tab's batch action and confirm after checking the dialog.
2. Try existing reopen/history actions and record URLs, group name/color/order and split pairing/ratio separately.

Expected:

- Report page reopening separately from complete group restoration.
- Do not mark full restoration Passed based only on the URLs reopening; treat unsupported or unspecified restoration details as observations.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### EXP-03-COMMON Window actions during batch confirmation

Priority: P2; layout: Common

Before: Use a dedicated window of disposable pages, including an unsaved-changes page.

Steps:

1. Start a directional close and, while its prompt is displayed, try normal window closing or Space switching if permitted.
2. If the prompt blocks other input, record that and cancel safely.

Expected:

- No crash or accidental close in another window occurs, and canceled pages do not disappear later.
- Report the allowed interaction sequence and survivors; mark an unavailable setup rather than forcing it.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:

### EXP-04-COMMON Behavior across supported app versions

Priority: P2; layout: Common

Before: Use separate disposable installations of versions that are available for public testing.

Steps:

1. Check whether each version offers the closing settings and actions.
2. Run applicable ordinary batch-closing cases and record unavailable functionality.

Expected:

- Report behavior only for the installed version; unavailable actions are Blocked or Skipped with a reason, never Passed.
- Do not change app contents or mix files from different versions to force a result.

Reset: Recreate the specified starting order. Restore any changed preferences or shortcuts. Remove only disposable TC- test data; preserve personal pins, bookmarks, groups and other windows.

Evidence: Record the app version, layout, variant, starting order, active page, clicked anchor or shortcut, dialog choices and final survivors. Compare markers and opening IDs in retained pages. Add screenshots with personal information removed.

Result: Not run. Notes:
