# HebrewFunLearn (web app)

Hebrew letters, nikud and first words for ages 5-8. One HTML file, no build step, no dependencies, no network needed after install.

## Try it on Windows
Double-click `index.html` (Chrome or Edge). Everything works from the file; progress is saved in the browser.
Speech needs a Hebrew voice: Settings > Time & language > Speech > add Hebrew.

## Put it on the iPad
The iPad needs to load it once from an HTTPS address; after that it runs offline.
1. Upload this folder to any static host with HTTPS (GitHub Pages is free: new repository, upload the files, Settings > Pages > deploy from branch).
2. Open the address in Safari on the iPad, then Share > Add to Home Screen.
3. Open it from the home screen icon. It runs full screen, landscape.
Speech uses the iPad's Hebrew voice: Settings > Accessibility > Spoken Content > Voices > Hebrew.
Progress is stored on that iPad only. After changing `index.html`, bump `VERSION` in `sw.js` so installed copies update.

## Files
- `index.html`  the whole app: content, engine, screens (sections are marked with banner comments)
- `sw.js`, `manifest.webmanifest`, `icon-*.png`  offline cache and home-screen install

## What is in it
- Letter tracing: print letters checked stroke by stroke; cursive (ktav) letters traced over the real letterform.
  The tracing page is a practice sheet with the letter 30 times, one per square (parents can change the number or reset a letter);
  the hints fade from square to square
- Nikud lab: drag a letter and a vowel together; "build the sound" by ear
- Spelling: see the picture, drag the letter tiles, each carrying its nikud, into empty slots (no hints; final forms required at word ends)
- 275 words in 11 groups (one list near the top of `index.html`, used by spelling, memory and the monster game)
- Stories: ten short readers; tap a word to hear it, or have the page read with each word highlighted; one choice and one question per story
- Math (7 games, questions generated at random): counting, add/subtract, two-digit add/subtract in columns, missing number,
  multiplication up to 10 x 10, number series, bigger/smaller.
- Thinking (gifted-test question types, all original content):
  long reading passages (20 passages of about 100-150 words, eight questions each, with the best score kept per passage),
  reading comprehension (18 short passages, three questions each),
  analogies (70 single-word questions, and "pick the pair with the same relationship" built from 17 relationship groups),
  sentence completion (70 one-gap and 40 two-gap sentences), arithmetic word problems (generated),
  shape series, 3 x 3 shape matrices and missing pattern piece (all three generated).
  Also generated: odd one out (pictures, words, shapes), logic riddles, number in a shape, rotation.
  The word banks are lists near the thinking games in `index.html`; add rows to extend them.
- Arcade: Bubble Pop, Memory Match, Monster Feed (feed it only things that start with the letter)
- Prizes: a gift box every 10 stars opens to a sticker (36 to collect); a sticker scene to arrange them in; an occasional surprise bonus star
- Parents area behind a PIN that you choose on first entry: progress, nikud on/off, difficulty, reset, delete profile.
  The PIN sits in the page source, so it keeps children out but is not real security.
- Per child, a parent can switch any section or single game off, and turn all sound off
- Speech is Hebrew only: if the device has no Hebrew voice the app stays silent
- Spaced repetition and a 1-3 difficulty level that follows the child's streak

## Not built
Recorded audio (the `AUDIO` map in `index.html` is the hook; everything is spoken by the device's Hebrew voice).

## Credits
Cursive letters use the Gveret Levin font (SIL Open Font Licence, see `ktav-LICENSE.txt`), embedded in `index.html`.


## Updates

When you upload a newer `index.html` to the same address, the iPad picks it up by itself:
open the app once while online (it still shows the old version), close it, and open it again.
Profiles, stars and progress are kept, because they are stored on the iPad and not in the file.

## Before giving it to a child

- Try it once on the real iPad: tracing, dragging letters, sound.
- Speech needs a Hebrew voice on the device (Settings > Accessibility > Spoken Content > Voices > Hebrew). Without one the app stays silent by design.
- Ask a Hebrew reader to proofread the texts and the nikud.


## Backup, progress report and mock test

All three are reached from the parents area (the gear, then your PIN), except the test itself.

- **Backup.** "Save backup file" writes one small file with every child's profile. On the iPad it opens the share sheet (Save to Files, Mail, AirDrop); on a PC it downloads. "Restore from a backup file" replaces everything on the device with the file's content, after asking. If the file buttons do not work on a device, "Backup as text" shows the same data as text to copy and paste back.
- **Progress report.** Minutes in the app for the last 7 days, accuracy per activity, and the history of mock tests with a breakdown by question type.
- **Timed mock test.** The stopwatch button at the top of the Thinking menu. 20 mixed questions, 15 minutes (10 to 30, set in the parents area). One try per question, no right/wrong feedback and no penalties until the end; then the score, the time and a review of the missed questions. It can be switched off per child like any other part.

## Typing answers in math

In the add / subtract, two-digit, multiplication and missing-number games the child types the answer on a number keypad and presses the green tick, instead of picking from choices. A real keyboard also works on a PC (digits, Backspace, Enter). It can be turned off per child in the parents area under Settings.

## Building your own mock test

Parents area > Timed mock tests > Test set-up. Per child: the time (5 to 60 minutes), the difficulty (the child's current level, or fixed easy / medium / hard) and, after ticking "Choose the questions myself", how many questions (0 to 10) come from each of the 18 quiz games, and how many long reading passages (0 to 3, each with its 8 questions kept together). Left unticked, the test is 20 questions: one long passage the child has not read yet, and 12 questions shared equally between the games that are switched on.

## Daily limit and prize cost

- **Daily limit.** Each activity pays stars for 3 rounds a day (parents area > Settings: 1, 2, 3, 5, 10 or no limit). After that the activity still works but neither gives nor takes stars until the next day; a moon replaces the star, and the activity's tile gets a moon badge. A round is one finished unit: a tracing sheet, a rocket landing (5 first-try answers), a story, a long passage, a mock test, a game of memory; in spelling and the nikud lab, five right answers.
- **Prize cost.** The first gift box comes after 10 stars, the next after 20 more, then 30 more, and so on. The hub shows the progress toward the next one.
- **Passages and stories pay once.** A long passage or a story gives stars only the first time it is finished. Finished ones are marked green in their menus (passages with the best score, stories with a tick) and can be replayed freely, with no stars gained or lost.

## Content in this version

| Bank | Items |
|---|---|
| Long reading passages (8 questions each) | 70 |
| Stories | 35 |
| Short reading passages (3 questions each) | 54 |
| Analogies, single answer | 212 |
| Analogy pairs | 198 pairs in 24 relations |
| Sentence completion, one gap | 208 |
| Sentence completion, two gaps | 178 |
| Words with pictures | 331 |

Math, shape series, matrices, pattern piece, odd one out, logic, number in a shape and rotation are generated and do not run out.
All Hebrew text and nikud was written without review by a Hebrew reader and should be proofread.

## Version 1.33

- The app name appears on the profile screen and the main screen. The version number is shown in the parents area, next to "Settings".
- Every activity has a one-line instruction in Hebrew under the top bar (it follows the "show nikud" setting).
- Bubble game: the instruction names the letter and the goal (pop 5). On harder levels the letter is given by ear only, but it is always shown when the device has no Hebrew voice or sound is off. The same rule applies to the nikud lab's listening mode.
- Guessing penalty: mistakes in a row cost 1 star, then 2, then 4 (and 4 for each further one). A right answer starts the count again. This applies to the math and thinking games and to long passages.

## Version 1.34: parents PIN

There is no fixed PIN any more. The first time the parents area is opened, it asks you to choose a 4-digit PIN and enter it twice. "Change the parents PIN" in Settings replaces it. If it is forgotten, "Forgot the PIN?" on the lock screen asks a two-digit multiplication and then lets you choose a new one. The PIN is kept on the device and is not part of a backup.
