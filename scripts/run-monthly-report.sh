#!/bin/bash
# Monthly Topline report — invoked by launchd on the 1st of each month.
# Reports the previous full calendar month. Output lands in .planning/ (always)
# and is copied to ~/Desktop (best-effort; may be TCC-blocked under launchd).

export PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
PROJECT="$HOME/Projects/toplineplumbing530"
LOG="$PROJECT/.planning/report-cron.log"

cd "$PROJECT" || exit 1
{
  echo "===== run $(date '+%Y-%m-%d %H:%M:%S') ====="
  /usr/bin/python3 "$PROJECT/scripts/topline-report.py"
} >> "$LOG" 2>&1
STATUS=$?

if [ "$STATUS" -eq 0 ]; then
  MSG="Monthly report ready. Check Desktop (or .planning if not there)."
else
  MSG="Monthly report FAILED (exit $STATUS). See .planning/report-cron.log."
fi
/usr/bin/osascript -e "display notification \"$MSG\" with title \"Topline Report\"" >/dev/null 2>&1

exit "$STATUS"
