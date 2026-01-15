# haya-view-test

View [Hayagriva](https://github.com/typst/hayagriva)'s result against the [CSL Test Suite](https://github.com/citation-style-language/test-suite).

```shell
cargo test --features csl-json test_parse_tests --message-format json -- --nocapture > cargo-test.log
```

**Usage:** Run the above command in your `hayagriva` repo, and paste `cargo-test.log` to the website.

The website will also show notes in [Tracking Issue: CSL Spec Compliance · Issue #327 · typst/hayagriva](https://github.com/typst/hayagriva/issues/327).

```nu
gh issue view https://github.com/typst/hayagriva/issues/327 --json body,updatedAt | from json | format pattern "---\nupdatedAt: {updatedAt}\n---\n{body}" | save src/fixtures/tracking-issue.md --force
```
