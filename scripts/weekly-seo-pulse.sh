#!/bin/bash
# Topline weekly SEO pulse — invoked by crontab Mondays.
# Sources the Telegram token from the daemon env, runs the pulse, logs result.
export PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
PROJECT="$HOME/Projects/toplineplumbing530"
LOG="$PROJECT/.planning/weekly-pulse.log"

# Telegram token (same source as the telegram daemon)
[ -f "$HOME/.claude/scripts/.daemon.env" ] && source "$HOME/.claude/scripts/.daemon.env"

cd "$PROJECT" || exit 1
{
  echo "===== run $(date '+%Y-%m-%d %H:%M:%S') ====="
  /usr/bin/python3 "$PROJECT/scripts/weekly-seo-pulse.py"
} >> "$LOG" 2>&1
exit $?
