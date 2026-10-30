# Phi Browser test cases

Public manual test cases for Phi Browser, with English instructions and disposable test pages.

**[Open the test cases](https://woo0ood.github.io/phi-browser-test-cases/)**

## Tab closing

[Interactive checklist](https://woo0ood.github.io/phi-browser-test-cases/tab-closing/#overview) · [Plain-text cases](tab-closing/handbook.md)

The checklist contains 166 base cases and 512 execution points covering preferences, double-click and positional closing, all three layouts, split views, pins, groups, bookmarks, selection, confirmation, reopening, isolation, shortcuts, accessibility and languages.

Every result starts as **Not run**. Use disposable data and test only the features available in your installed version. Cases requiring an unavailable feature or device should be marked Blocked or Skipped with a reason.

Run details and results stay in this browser's local storage on this site. Exports include all execution points, regardless of filters. Test-page drafts are temporary and are not saved by the site. There is no analytics or result-upload service. Remove personal information before choosing to share a report.

The instructions are English. The language reference intentionally contains localized product labels for comparison.

## Site maintenance

Edit `src/tab-closing/` and run `python3 build.py` to regenerate the published pages and plain-text cases. The site uses no external scripts, fonts or build dependencies. GitHub Pages serves the generated files from the root of `main`.
