---
phase: 4
slug: review-generation
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-29
---

# Phase 4 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual verification (no automated tests — ops/config phase) |
| **Config file** | none |
| **Quick run command** | Manual checklist |
| **Full suite command** | Manual checklist |
| **Estimated runtime** | ~10 minutes |

---

## Sampling Rate

- **After every task:** Verify checklist item manually
- **After every plan wave:** Confirm GHL workflow state + review link resolves
- **Before `/gsd:verify-work`:** Full manual checklist must be green

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 4-01-01 | 01 | 1 | Review link configured | manual | Check GHL Reputation Settings → Review Link field is populated | N/A | ⬜ pending |
| 4-01-02 | 01 | 1 | Workflow trigger fires | manual | Submit test lead → verify review request SMS/email sends | N/A | ⬜ pending |
| 4-01-03 | 01 | 2 | Joe has script | manual | Confirm Joe has personal outreach script + review link | N/A | ⬜ pending |
| 4-01-04 | 01 | 2 | 10+ reviews | manual | Count live Google reviews on GBP listing | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- None — no code infrastructure needed for this phase.

*Existing infrastructure covers all phase requirements.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| GHL review link resolves | Review request SMS contains valid link | External GHL config, not in codebase | Open GHL → Reputation Settings → confirm review link field populated → click link, verify Google review modal opens |
| A2P campaign covers review content | SMS not filtered as spam | Carrier policy, not in codebase | Confirm A2P campaign description includes "review requests / customer satisfaction" |
| Personal outreach yields 10+ reviews | Joe has 10+ Google reviews | Depends on Joe's actions | Count reviews on GBP listing → must be 10+ |
| Workflow fires on job close | Auto review request triggers | GHL workflow state | Move test contact to "Won/Completed" → verify SMS + email sequence fires |

---

## Validation Sign-Off

- [ ] All tasks have manual verify steps
- [ ] GHL review link confirmed populated
- [ ] Workflow tested end-to-end with dummy lead
- [ ] Joe has personal outreach script
- [ ] 10+ Google reviews confirmed live
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
