# Timer Application

A productivity timer with task management and gamification features.

## Features

### Core Timer Functionality
- Pomodoro-style timer with visual progress bar
- Keyboard shortcuts for quick control
- Audio notifications when timer completes
- Pause/resume functionality

### Task List Management
- Add tasks with time estimates (format: "25 - Write report")
- Start timers directly from task list
- Automatically proceed to next task
- Task summary with total time estimates

### 🎮 Gamification System (NEW!)
- **Points System**: Earn 1 point for every minute a task timer is running
- **Streak Tracking**: Maintain consecutive days with sufficient points
- **Customizable Goals**: Adjust daily point threshold in settings (default: 100)
- **Visual Feedback**: See real-time points and streak status
- **Activity Indicator**: Lightning bolt (⚡) shows when points are being earned

#### How Points Work
- Points are only earned when running timers from the Task List (not manual timers)
- Timer must be actively running (not paused or expired)
- 1 point = 1 minute of focused work time
- Points are automatically saved and tracked daily

#### Streak System
- A streak day requires earning at least your set threshold of points
- Streak counts consecutive days meeting the threshold
- Customize the threshold in Settings to match your productivity goals
- Current streak is displayed with a fire emoji (🔥)

## Keyboard Shortcuts
- **Space** or **P**: Pause/Resume timer
- **1-999**: Set timer for specified minutes (press Enter to start)
- **R**: Restart current timer
- **T**: Open/close task view
- **?**: Toggle settings panel  
- **>**: Mark current task complete and begin next task
- **Escape**: Close any open panels

## Settings
- Audio notification on/off
- Custom notification sound
- Timer progress bar color
- **Daily points threshold** for streak calculation

## Getting Started
1. Press **T** to open the task list
2. Add tasks in format: "duration - description" (e.g., "25 - Review code")
3. Click "start" on a task to begin earning points
4. Watch your points and streak grow in the gamification panel
5. Adjust settings with **?** to customize your experience

The gamification system encourages consistent use of the task list mode, helping build productive habits through points and streak tracking!

# demo
http://www.yawmp.com/timer/
