const SOURCE = "https://www.strengthlog.com/exercise-directory/";

const media = {
  bench: {
    title: "Bench press",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2021/09/bench-press.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/bench-press/",
    cue: "Shoulder blades down, controlled touch, drive up.",
  },
  latPulldown: {
    title: "Lat pulldown",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/lat-pulldown-with-pronated-grip.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/lat-pulldown-with-pronated-grip/",
    cue: "Chest up, pull with elbows, control the return.",
  },
  inclineDbPress: {
    title: "Incline dumbbell press",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Dumbbell-Incline-Press.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/dumbbell-incline-press/",
    cue: "Thirty to forty-five degree bench, lower with control.",
  },
  cableRow: {
    title: "Cable row",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/cable-row-seated-narrow-grip.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/cable-close-grip-seated-row/",
    cue: "Tall posture, pull elbows back, pause without leaning.",
  },
  lateralRaise: {
    title: "Dumbbell lateral raise",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/12/Dumbbell-Lateral-Raise.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/dumbbell-lateral-raise/",
    cue: "Light weight, slight elbow bend, no swing.",
  },
  tricepsPushdown: {
    title: "Rope triceps pushdown",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/triceps-pushdown-with-rope.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/tricep-pushdown-with-rope/",
    cue: "Elbows pinned, extend fully, return slowly.",
  },
  dumbbellCurl: {
    title: "Dumbbell curl",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/02/Hantelcurl.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/dumbbell-curl/",
    cue: "Elbows still, wrists straight, no hip swing.",
  },
  squat: {
    title: "Squat",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2021/11/squat.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/squat/",
    cue: "Brace, knees track toes, stand tall.",
  },
  rdl: {
    title: "Romanian deadlift",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/01/Romanian-deadlift.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/romanian-deadlift/",
    cue: "Hips back, soft knees, bar close.",
  },
  legPress: {
    title: "Leg press",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2025/11/leg-press.gif?resize=700%2C700&ssl=1",
    source: "https://www.strengthlog.com/leg-press/",
    cue: "Control depth, keep hips down, drive through foot.",
  },
  legCurl: {
    title: "Seated leg curl",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/leg-curl-seated.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/seated-leg-curl/",
    cue: "Set machine joint at knee, curl slowly.",
  },
  calfRaise: {
    title: "Standing calf raise",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/calf-raise-standing.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/standing-calf-raise/",
    cue: "Full stretch, full raise, no bounce.",
  },
  overheadPress: {
    title: "Overhead press",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/12/Overhead-press-exercise.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/overhead-press/",
    cue: "Brace, bar close, finish stacked overhead.",
  },
  machineChestPress: {
    title: "Machine chest press",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/machine-chest-press.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/machine-chest-press/",
    cue: "Seat set right, press straight, controlled return.",
  },
  facePull: {
    title: "Face pull",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/05/face-pull.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/face-pull/",
    cue: "Elbows high, pull toward forehead, rotate up.",
  },
  dbShoulderPress: {
    title: "Dumbbell shoulder press",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/02/Dumbbell-shoulder-press.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/dumbbell-shoulder-press/",
    cue: "Brace, press to straight arms, lower slow.",
  },
  deadlift: {
    title: "Deadlift",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/11/Deadlift.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/deadlift/",
    cue: "Midfoot bar, brace, drag bar close.",
  },
  bulgarian: {
    title: "Bulgarian split squat",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/02/Bulgarian-split-squat-barbell.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/bulgarian-split-squat/",
    cue: "Front leg works, knee tracks, control balance.",
  },
  legExtension: {
    title: "Leg extension",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/leg-extension-seated.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/leg-extension/",
    cue: "Align knees, extend hard, lower slowly.",
  },
  gobletSquat: {
    title: "Goblet squat",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/02/Goblet-squat.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/goblet-squat/",
    cue: "Weight tight to chest, deep controlled squat.",
  },
  cableCrunch: {
    title: "Cable crunch",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/cable-crunch.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/cable-crunch/",
    cue: "Curl ribs toward pelvis. Let abs move the stack.",
  },
  plank: {
    title: "Plank",
    image: "https://i2.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Plank.jpg?fit=1024%2C1024&ssl=1",
    source: "https://www.strengthlog.com/plank/",
    cue: "Elbows under shoulders, ribs down, straight line.",
  },
  deadBug: {
    title: "Dead bug",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/01/deadbug.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/dead-bugs/",
    cue: "Low back stays down while opposite arm and leg move.",
  },
  pallof: {
    title: "Pallof press",
    image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2025/10/pallof-press.gif?resize=600%2C600&ssl=1",
    source: "https://www.strengthlog.com/pallof-press/",
    cue: "Do not rotate. Press out and hold briefly.",
  },
  sidePlank: {
    title: "Side plank",
    image: "https://i1.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Side-plank.jpg?fit=1024%2C1024&ssl=1",
    source: "https://www.strengthlog.com/side-plank/",
    cue: "Stack shoulder and elbow. Keep hips high.",
  },
  core: {
    title: "Core work",
    image: "https://i2.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Plank.jpg?fit=1024%2C1024&ssl=1",
    source: "https://www.strengthlog.com/exercise-directory/#ab-exercises",
    cue: "Brace first. Stop if low back takes over.",
  },
  cardio: {
    title: "Cardio",
    image: "",
    source: SOURCE,
    cue: "Easy to moderate. You should be able to talk.",
  },
};

const progressionProfiles = {
  bench: { id: "bench", load: "upper", increment: 5, kind: "compound", initial: { me: 95, wife: 45 } },
  latPulldown: { id: "vertical-pull", load: "upper", increment: 5, kind: "machine", initial: { me: 70, wife: 45 } },
  inclineDbPress: { id: "incline-db-press", load: "upper", increment: 5, kind: "dumbbell", initial: { me: 30, wife: 15 } },
  cableRow: { id: "row", load: "upper", increment: 5, kind: "machine", initial: { me: 70, wife: 45 } },
  lateralRaise: { id: "lateral-raise", load: "accessory", increment: 2.5, kind: "dumbbell", initial: { me: 15, wife: 8 } },
  tricepsPushdown: { id: "triceps-extension", load: "accessory", increment: 5, kind: "machine", initial: { me: 40, wife: 25 } },
  dumbbellCurl: { id: "curl", load: "accessory", increment: 2.5, kind: "dumbbell", initial: { me: 20, wife: 10 } },
  squat: { id: "squat-pattern", load: "lower", increment: 10, kind: "compound", initial: { me: 95, wife: 45 } },
  rdl: { id: "hinge", load: "lower", increment: 10, kind: "compound", initial: { me: 95, wife: 35 } },
  legPress: { id: "leg-press", load: "lower", increment: 10, kind: "machine", initial: { me: 180, wife: 90 } },
  legCurl: { id: "leg-curl", load: "lower", increment: 5, kind: "machine", initial: { me: 60, wife: 35 } },
  calfRaise: { id: "calf-raise", load: "lower", increment: 5, kind: "machine", initial: { me: 90, wife: 45 } },
  overheadPress: { id: "overhead-press", load: "upper", increment: 5, kind: "compound", initial: { me: 55, wife: 20 } },
  machineChestPress: { id: "chest-press", load: "upper", increment: 5, kind: "machine", initial: { me: 70, wife: 35 } },
  facePull: { id: "rear-delt-pull", load: "accessory", increment: 5, kind: "machine", initial: { me: 35, wife: 20 } },
  dbShoulderPress: { id: "db-shoulder-press", load: "upper", increment: 5, kind: "dumbbell", initial: { me: 25, wife: 10 } },
  deadlift: { id: "deadlift", load: "lower", increment: 10, kind: "compound", initial: { me: 135, wife: 65 } },
  bulgarian: { id: "single-leg-squat", load: "lower", increment: 5, kind: "dumbbell", initial: { me: 20, wife: 10 } },
  legExtension: { id: "leg-extension", load: "lower", increment: 5, kind: "machine", initial: { me: 60, wife: 30 } },
  gobletSquat: { id: "goblet-squat", load: "lower", increment: 5, kind: "dumbbell", initial: { me: 35, wife: 20 } },
  cableCrunch: { id: "cable-crunch", load: "accessory", increment: 5, kind: "machine", initial: { me: 50, wife: 25 } },
  plank: { id: "plank", load: "bodyweight", increment: 0, kind: "core" },
  deadBug: { id: "dead-bug", load: "bodyweight", increment: 0, kind: "core" },
  pallof: { id: "pallof", load: "accessory", increment: 2.5, kind: "core" },
  sidePlank: { id: "side-plank", load: "bodyweight", increment: 0, kind: "core" },
  core: { id: "core", load: "bodyweight", increment: 0, kind: "core" },
  cardio: { id: "cardio", load: "cardio", increment: 0, kind: "cardio" },
};

const routines = {
  me: {
    label: "Me",
    goal: "Get bigger and stronger while limiting competing endurance work.",
    restHours: 20,
    staleHours: 96,
    sessions: [
      {
        id: "upper-a",
        title: "Upper A",
        accent: "red",
        effort: "1-2 reps left",
        warmup: "5-8 min incline walk or bike, then two warm-up sets for bench.",
        exercises: [
          ex("Bench press", "3 x 5-8", "bench"),
          ex("Lat pulldown or assisted pull-up", "4 x 8-12", "latPulldown"),
          ex("Incline dumbbell press", "3 x 8-12", "inclineDbPress"),
          ex("Seated cable row", "3 x 8-12", "cableRow"),
          ex("Lateral raise", "4 x 12-20", "lateralRaise"),
          ex("Triceps rope pressdown", "3 x 10-15", "tricepsPushdown"),
          ex("Dumbbell curl", "3 x 10-15", "dumbbellCurl"),
        ],
      },
      {
        id: "lower-a",
        title: "Lower A",
        accent: "gold",
        effort: "1-2 reps left",
        warmup: "5-8 min bike, then two warm-up sets for squat or hack squat.",
        exercises: [
          ex("Squat or hack squat", "3 x 5-8", "squat"),
          ex("Romanian deadlift", "3 x 6-10", "rdl"),
          ex("Leg press", "3 x 10-15", "legPress"),
          ex("Seated or lying leg curl", "3 x 10-15", "legCurl"),
          ex("Standing calf raise", "4 x 8-15", "calfRaise"),
          ex("Cable crunch", "3 x 10-15", "cableCrunch"),
        ],
      },
      {
        id: "upper-b",
        title: "Upper B",
        accent: "red",
        effort: "1-2 reps left",
        warmup: "5-8 min incline walk or bike, then two warm-up sets for overhead press.",
        exercises: [
          ex("Overhead press", "3 x 5-8", "overheadPress"),
          ex("Chest-supported row or cable row", "4 x 8-12", "cableRow"),
          ex("Machine chest press or dips", "3 x 8-12", "machineChestPress"),
          ex("Neutral-grip pulldown", "3 x 8-12", "latPulldown"),
          ex("Rear delt fly or face pull", "3 x 12-20", "facePull"),
          ex("Overhead triceps extension", "3 x 10-15", "tricepsPushdown"),
          ex("Hammer curl", "3 x 10-15", "dumbbellCurl"),
        ],
      },
      {
        id: "lower-b",
        title: "Lower B + arms/shoulders",
        accent: "gold",
        effort: "1-2 reps left",
        warmup: "5-8 min bike, then two warm-up sets for deadlift.",
        exercises: [
          ex("Deadlift or trap bar deadlift", "2 x 3-5", "deadlift"),
          ex("Front squat, hack squat, or Smith squat", "3 x 6-10", "squat"),
          ex("Bulgarian split squat", "3 x 8-12 each leg", "bulgarian"),
          ex("Leg extension", "3 x 12-15", "legExtension"),
          ex("Seated calf raise", "4 x 10-20", "calfRaise"),
          ex("Lateral raise", "3 x 15-25", "lateralRaise"),
          ex("Cable curl", "3 x 12-15", "dumbbellCurl"),
          ex("Triceps pressdown", "3 x 12-15", "tricepsPushdown"),
        ],
      },
    ],
  },
  wife: {
    label: "Wife",
    goal: "Stay fit, build strength, keep volume moderate, and recover well.",
    restHours: 20,
    staleHours: 120,
    sessions: [
      {
        id: "full-a",
        title: "Full Body A",
        accent: "teal",
        effort: "2-4 reps left",
        warmup: "5-8 min easy incline walk or bike.",
        exercises: [
          ex("Goblet squat or leg press", "2-3 x 8-12", "gobletSquat"),
          ex("Dumbbell Romanian deadlift", "2-3 x 8-12", "rdl"),
          ex("Machine chest press or push-ups", "2 x 8-12", "machineChestPress"),
          ex("Seated cable row", "2-3 x 10-12", "cableRow"),
          ex("Glute bridge or hip thrust machine", "2 x 10-15", "rdl"),
          ex("Plank", "2-3 rounds", "plank"),
        ],
      },
      {
        id: "cardio-core",
        title: "Cardio + Core",
        accent: "blue",
        effort: "Easy to moderate",
        warmup: "Start easy, then settle into a pace you can maintain.",
        exercises: [
          ex("Incline walk, bike, or elliptical", "25-35 min", "cardio"),
          ex("Dead bug", "3 x 8-12 each side", "deadBug"),
          ex("Pallof press", "3 x 10-12 each side", "pallof"),
          ex("Side plank", "2 rounds each side", "sidePlank"),
          ex("Stretch or mobility", "5-10 min optional", "core"),
        ],
      },
      {
        id: "full-b",
        title: "Full Body B",
        accent: "teal",
        effort: "2-4 reps left",
        warmup: "5-8 min easy incline walk or bike.",
        exercises: [
          ex("Reverse lunge or split squat", "2-3 x 8-10 each leg", "bulgarian"),
          ex("Hip thrust or glute bridge", "2-3 x 8-12", "rdl"),
          ex("Lat pulldown", "2-3 x 8-12", "latPulldown"),
          ex("Dumbbell shoulder press", "2 x 8-10", "dbShoulderPress"),
          ex("Cable face pull", "2 x 12-15", "facePull"),
          ex("Farmer carry", "3 short walks", "deadlift"),
        ],
      },
      {
        id: "full-c",
        title: "Full Body C or cardio",
        accent: "teal",
        effort: "Moderate or easy",
        warmup: "If tired, replace this with 30-40 min easy cardio.",
        exercises: [
          ex("Step-ups", "2 x 10 each leg", "bulgarian"),
          ex("Leg curl", "2 x 10-15", "legCurl"),
          ex("Cable row", "2 x 10-12", "cableRow"),
          ex("Lateral raise", "2 x 12-20", "lateralRaise"),
          ex("Cable glute kickback", "2 x 12-15", "rdl"),
          ex("Core circuit", "5-8 min", "plank"),
        ],
      },
    ],
  },
};

const rules = {
  me: [
    "Start at 2,700 calories/day and 140-160g protein/day.",
    "Gain 0.5-0.75 lb/week. If the weekly average is flat after 2 weeks, add 200 calories/day.",
    "No serious running during this block. Walks and one easy 20-minute jog are fine.",
    "When every set reaches the top of the rep range, add weight next time.",
  ],
  wife: [
    "Target 80-110g protein/day and roughly maintenance calories.",
    "Add 5 lb or 1-2 reps only when all sets feel easy and clean.",
    "Two cardio sessions/week is enough if steps and recovery are good.",
    "Keep most lifting sets at 2-4 reps in reserve.",
  ],
};

const storageKey = "do-now-workout-tracker-v2";
const schemaVersion = 3;
const state = loadState();

let person = state.person || "me";

const nowMount = document.getElementById("nowMount");
const movementMount = document.getElementById("movementMount");
const sheetMount = document.getElementById("sheetMount");
const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", openMenuSheet);

render();

function ex(name, prescription, mediaKey, overrides = {}) {
  const profile = progressionProfiles[mediaKey] || {};
  return {
    name,
    prescription,
    mediaKey,
    id: overrides.id || profile.id || slug(name),
    load: overrides.load || profile.load || "bodyweight",
    increment: overrides.increment ?? profile.increment ?? 5,
    kind: overrides.kind || profile.kind || "accessory",
    initial: overrides.initial || profile.initial || null,
    target: parsePrescription(prescription),
  };
}

function createId(prefix = "id") {
  let value = "";
  try {
    value = globalThis.crypto?.randomUUID?.() || "";
  } catch {
    value = "";
  }
  if (!value) {
    value = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }
  return `${prefix}_${value}`;
}

function createFreshState() {
  return {
    schemaVersion,
    clientId: createId("client"),
    person: "me",
    active: {},
    logs: { me: [], wife: [] },
  };
}

function timestamp(value, fallback = Date.now()) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function loadState() {
  try {
    const raw = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const migrated = migrateState(raw);
    localStorage.setItem(storageKey, JSON.stringify(migrated));
    return migrated;
  } catch {
    const fresh = createFreshState();
    localStorage.setItem(storageKey, JSON.stringify(fresh));
    return fresh;
  }
}

function saveState() {
  state.schemaVersion = schemaVersion;
  state.clientId ||= createId("client");
  state.person = person || state.person || "me";
  state.logs ||= { me: [], wife: [] };
  state.logs.me ||= [];
  state.logs.wife ||= [];
  state.active ||= {};
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function replaceState(nextState) {
  const migrated = migrateState(nextState);
  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, migrated);
  person = state.person || "me";
  saveState();
}

function migrateState(raw = {}) {
  const fresh = createFreshState();
  const source = raw && typeof raw === "object" ? raw : {};
  const migrated = {
    ...fresh,
    schemaVersion,
    clientId: source.clientId || fresh.clientId,
    person: source.person === "wife" ? "wife" : "me",
    active: {},
    logs: {
      me: migrateLogs(source.logs?.me, "me"),
      wife: migrateLogs(source.logs?.wife, "wife"),
    },
  };

  const rawActive = source.active && typeof source.active === "object" ? source.active : {};
  ["me", "wife"].forEach((personId) => {
    const active = rawActive[personId]
      || (personId === migrated.person && Number.isFinite(Number(rawActive.sessionIndex)) ? rawActive : null);
    const migratedActive = active ? migrateActive(active, personId) : null;
    if (migratedActive) migrated.active[personId] = migratedActive;
  });

  return migrated;
}

function migrateLogs(logs, personId) {
  return Array.isArray(logs)
    ? logs.map((log) => migrateLog(log, personId)).filter(Boolean)
    : [];
}

function migrateLog(log, personId) {
  if (!log || typeof log !== "object") return null;

  const completedAt = timestamp(log.completedAt || log.createdAt);
  const base = {
    ...log,
    id: log.id || createId(log.type === "rest" ? "rest" : "workout"),
    schemaVersion,
    personId,
    createdAt: timestamp(log.createdAt, completedAt),
    completedAt,
  };

  if (log.type === "rest") {
    return {
      ...base,
      type: "rest",
      sessionId: "rest",
      sessionTitle: log.sessionTitle || "Rest / walk",
      completed: [],
      total: 0,
      entries: [],
      exerciseLogs: [],
    };
  }

  const routine = getRoutineByPerson(personId);
  const session = findSessionForRecord(routine, log) || routine.sessions[0];
  const completed = normalizeCompletedIndexes(log.completed, session.exercises.length);
  const entries = session.exercises.map((exercise, index) => normalizeEntryForStorage(
    findEntryForExercise(log, exercise, index),
    exercise,
    completed.includes(index),
  ));

  return {
    ...base,
    type: "workout",
    sessionId: session.id,
    sessionTitle: log.sessionTitle || session.title,
    startedAt: timestamp(log.startedAt, completedAt),
    completed,
    total: session.exercises.length,
    exerciseIds: session.exercises.map((exercise) => exercise.id),
    entries,
    exerciseLogs: entries.map(cloneEntry),
  };
}

function migrateActive(active, personId) {
  if (!active || typeof active !== "object") return null;

  const routine = getRoutineByPerson(personId);
  const session = findSessionForRecord(routine, active) || routine.sessions[0];
  const sessionIndex = Math.max(0, routine.sessions.findIndex((item) => item.id === session.id));
  const done = session.exercises.map((_, index) => Boolean(active.done?.[index]));
  const entries = session.exercises.map((exercise, index) => normalizeEntryForStorage(
    findEntryForExercise(active, exercise, index),
    exercise,
    done[index],
  ));

  return {
    id: active.id || createId("active"),
    schemaVersion,
    personId,
    sessionId: session.id,
    sessionIndex,
    startedAt: timestamp(active.startedAt),
    returningFromGap: Boolean(active.returningFromGap),
    done,
    entries,
    cursor: Number.isFinite(Number(active.cursor)) ? Number(active.cursor) : 0,
  };
}

function getRoutineByPerson(personId) {
  return routines[personId] || routines.me;
}

function findSessionForRecord(routine, record = {}) {
  if (record.sessionId) {
    const byId = routine.sessions.find((session) => session.id === record.sessionId);
    if (byId) return byId;
  }

  const sessionIndex = Number(record.sessionIndex);
  if (Number.isInteger(sessionIndex) && routine.sessions[sessionIndex]) {
    return routine.sessions[sessionIndex];
  }

  if (record.sessionTitle) {
    const byTitle = routine.sessions.find((session) => session.title === record.sessionTitle);
    if (byTitle) return byTitle;
  }

  return null;
}

function findEntryForExercise(record = {}, exercise, index) {
  const entries = Array.isArray(record.entries) ? record.entries : [];
  const exerciseLogs = Array.isArray(record.exerciseLogs) ? record.exerciseLogs : [];
  const byId = [...exerciseLogs, ...entries].find((entry) => entry?.exerciseId === exercise.id);
  return entries[index] || byId || {};
}

function normalizeCompletedIndexes(value, count) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item, index) => item === true ? index : Number(item))
    .filter((item) => Number.isInteger(item) && item >= 0 && item < count);
}

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function parsePrescription(prescription) {
  const setsMatch = String(prescription).match(/(\d+)(?:-(\d+))?\s*x\s*(\d+)(?:-(\d+))?/i);
  if (setsMatch) {
    return {
      mode: "reps",
      minSets: Number(setsMatch[1]),
      maxSets: Number(setsMatch[2] || setsMatch[1]),
      minReps: Number(setsMatch[3]),
      maxReps: Number(setsMatch[4] || setsMatch[3]),
    };
  }

  const durationMatch = String(prescription).match(/(\d+)(?:-(\d+))?\s*min/i);
  if (durationMatch) {
    return {
      mode: "duration",
      minMinutes: Number(durationMatch[1]),
      maxMinutes: Number(durationMatch[2] || durationMatch[1]),
    };
  }

  const roundsMatch = String(prescription).match(/(\d+)(?:-(\d+))?\s*round/i);
  if (roundsMatch) {
    return {
      mode: "rounds",
      minRounds: Number(roundsMatch[1]),
      maxRounds: Number(roundsMatch[2] || roundsMatch[1]),
    };
  }

  return { mode: "open" };
}

function parseLoad(value) {
  const match = String(value || "").match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function parseReps(value) {
  return String(value || "").match(/\d+(?:\.\d+)?/g)?.map(Number) || [];
}

function defaultSetCount(exercise) {
  if (exercise.target.mode === "reps") return exercise.target.minSets;
  return 1;
}

function createSet(load = "", reps = "", effort = "right", options = {}) {
  const set = {
    load: String(load || ""),
    reps: String(reps || ""),
    effort: effort || "right",
  };
  if (options.id) set.id = options.id;
  if (options.setIndex) set.setIndex = options.setIndex;
  return set;
}

function normalizeEntrySets(entry = {}, exercise, fallbackLoad = "") {
  if (Array.isArray(entry.sets) && entry.sets.length) {
    return entry.sets.map((set, index) => createSet(
      set.load,
      set.reps,
      set.effort || entry.effort || "right",
      { id: set.id, setIndex: set.setIndex || index + 1 },
    ));
  }

  const reps = parseReps(entry.reps);
  const count = Math.max(defaultSetCount(exercise), reps.length || 0);
  return Array.from({ length: count }, (_, index) => createSet(
    entry.weight || fallbackLoad,
    reps[index] ?? "",
    entry.effort || "right",
  ));
}

function withSetIds(sets = []) {
  return sets.map((set, index) => createSet(
    set.load,
    set.reps,
    set.effort,
    { id: set.id || createId("set"), setIndex: index + 1 },
  ));
}

function normalizeEntryForStorage(entry = {}, exercise, completed = false) {
  const source = entry && typeof entry === "object" ? entry : {};
  return {
    id: source.id || createId("entry"),
    exerciseId: source.exerciseId || exercise.id,
    exerciseName: source.exerciseName || exercise.name,
    prescription: source.prescription || exercise.prescription,
    mediaKey: source.mediaKey || exercise.mediaKey,
    completed: Boolean(completed || source.completed),
    sets: withSetIds(normalizeEntrySets(source, exercise)),
    notes: String(source.notes || ""),
  };
}

function cloneEntry(entry) {
  return {
    ...entry,
    sets: Array.isArray(entry.sets) ? entry.sets.map((set) => ({ ...set })) : [],
  };
}

function hasLoggedSetData(entry = {}) {
  if (entry.weight || entry.reps || entry.notes) return true;
  return Array.isArray(entry.sets) && entry.sets.some((set) => set.load || set.reps);
}

function completedSetStats(entry = {}, exercise) {
  return normalizeEntrySets(entry, exercise)
    .map((set) => ({
      load: parseLoad(set.load),
      reps: parseLoad(set.reps),
      effort: set.effort || entry.effort || "right",
    }))
    .filter((set) => set.reps !== null || set.load !== null);
}

function primarySetLoad(sets) {
  const withLoad = sets.filter((set) => set.load !== null);
  if (!withLoad.length) return null;
  return withLoad[0].load;
}

function formatSetSummary(entry = {}, exercise) {
  const sets = normalizeEntrySets(entry, exercise)
    .filter((set) => set.load || set.reps)
    .map((set, index) => {
      const load = set.load || "-";
      const reps = set.reps || "-";
      return `S${index + 1} ${load} x ${reps}${set.effort ? ` (${set.effort})` : ""}`;
    });
  return sets.length ? sets.join("; ") : "-";
}

function roundToIncrement(value, increment) {
  if (!increment) return Math.round(value);
  return Math.max(increment, Math.round(value / increment) * increment);
}

function formatLoad(value) {
  if (value === null || value === undefined || Number.isNaN(value)) return "";
  return Number.isInteger(value) ? `${value} lb` : `${value.toFixed(1)} lb`;
}

function formatExerciseLoad(value, exercise) {
  const base = formatLoad(value);
  return exercise.kind === "dumbbell" && base ? `${base} each` : base;
}

function targetRir() {
  return person === "me" ? "1-2 RIR" : "2-4 RIR";
}

function render() {
  renderNow();
  renderMovement();
}

function getRoutine() {
  return getRoutineByPerson(person);
}

function getLogs() {
  state.logs[person] ||= [];
  return state.logs[person];
}

function getActive() {
  const active = state.active[person] || null;
  if (!active) return null;
  const session = getRoutine().sessions[active.sessionIndex];
  if (!session) return active;
  active.done ||= session.exercises.map(() => false);
  active.entries ||= session.exercises.map(() => ({}));
  active.cursor ||= 0;
  session.exercises.forEach((exercise, index) => {
    active.done[index] = Boolean(active.done[index]);
    active.entries[index] = normalizeEntryForStorage(active.entries[index], exercise, active.done[index]);
  });
  return active;
}

function setActive(active) {
  if (active) {
    state.active[person] = active;
  } else {
    delete state.active[person];
  }
  saveState();
}

function getLastLog() {
  return getLogs().at(-1) || null;
}

function getLastWorkoutLog() {
  return getLogs().filter((log) => log.type === "workout").at(-1) || null;
}

function getNextSessionIndex() {
  const routine = getRoutine();
  const last = getLastWorkoutLog();
  if (!last) return 0;
  const lastIndex = routine.sessions.findIndex((session) => session.id === last.sessionId);
  return (lastIndex + 1 + routine.sessions.length) % routine.sessions.length;
}

function findLastMovementLog(exercise) {
  const routine = getRoutine();
  const logs = getLogs().filter((log) => log.type === "workout").slice().reverse();

  for (const log of logs) {
    const session = routine.sessions.find((item) => item.id === log.sessionId);
    if (!session) continue;

    let exerciseIndex = Array.isArray(log.exerciseIds) ? log.exerciseIds.indexOf(exercise.id) : -1;
    if (exerciseIndex === -1) {
      exerciseIndex = session.exercises.findIndex((candidate) => candidate.id === exercise.id);
    }
    const entries = Array.isArray(log.entries) ? log.entries : log.exerciseLogs || [];
    const entry = entries?.[exerciseIndex] || log.exerciseLogs?.find((item) => item.exerciseId === exercise.id);
    if (exerciseIndex !== -1 && entry && hasLoggedSetData(entry)) {
      return { log, session, exercise: session.exercises[exerciseIndex], entry, exerciseIndex };
    }
  }

  return null;
}

function getSuggestion(exercise, session, movementIndex) {
  const active = getActive();
  const previous = findLastMovementLog(exercise);
  const noLoad = exercise.load === "bodyweight" || exercise.load === "cardio" || exercise.increment === 0;

  if (noLoad) {
    return {
      model: exercise.load === "cardio" ? "Conditioning" : "Technique",
      load: "No load",
      reps: exercise.prescription,
      reason: exercise.load === "cardio"
        ? "Keep the pace easy enough to recover for lifting."
        : "Use clean reps or holds before adding complexity.",
      previous,
    };
  }

  const previousSets = previous ? completedSetStats(previous.entry, exercise) : [];
  const previousTopLoad = primarySetLoad(previousSets);

  if (!previous || previousTopLoad === null) {
    const initialLoad = exercise.initial?.[person] ?? null;
    return {
      model: "Initial finder",
      load: initialLoad ? formatExerciseLoad(initialLoad, exercise) : "Find start",
      reps: exercise.prescription,
      reason: initialLoad
        ? `Conservative first estimate. Adjust during warmups until the first work set lands around ${targetRir()}.`
        : `Ramp until the first work set lands around ${targetRir()}. Save that load as the baseline.`,
      previous,
    };
  }

  const lastLoad = previousTopLoad;
  const target = exercise.target;
  const increment = exercise.increment || 5;
  const sessionGapHours = active ? (active.startedAt - previous.log.completedAt) / 36e5 : 0;
  const returningFromGap = Boolean(active?.returningFromGap && movementIndex === 0 && sessionGapHours >= getRoutine().staleHours);
  const hasRepTarget = target.mode === "reps";

  if (returningFromGap && exercise.kind === "compound") {
    const load = roundToIncrement(lastLoad * 0.9, increment);
    return {
      model: "Return trim",
      load: formatExerciseLoad(load, exercise),
      reps: exercise.prescription,
      reason: `Last time was ${formatExerciseLoad(lastLoad, exercise)}. After the gap, start about 10% lighter and build back next time.`,
      previous,
    };
  }

  if (!hasRepTarget || !previousSets.some((set) => set.reps !== null)) {
    return {
      model: "Repeat",
      load: formatExerciseLoad(lastLoad, exercise),
      reps: exercise.prescription,
      reason: "Last log did not include enough reps to judge progression. Repeat and log reps.",
      previous,
    };
  }

  if (previousSets.length < target.minSets) {
    return {
      model: "Repeat",
      load: formatExerciseLoad(lastLoad, exercise),
      reps: exercise.prescription,
      reason: `Last log only had ${previousSets.length} set${previousSets.length === 1 ? "" : "s"}. Repeat and log all work sets.`,
      previous,
    };
  }

  const judgedSets = previousSets.slice(0, target.minSets);
  const topSet = judgedSets[0];
  const topLoad = topSet.load ?? lastLoad;
  const allSameLoad = judgedSets.every((set) => set.load === null || Math.abs(set.load - topLoad) < 0.01);
  const hitMinimum = judgedSets.every((set) => set.reps !== null && set.reps >= target.minReps);
  const hitTop = judgedSets.every((set) => set.reps !== null && set.reps >= target.maxReps);
  const topHitTop = topSet?.reps !== null && topSet.reps >= target.maxReps;
  const missedFloorCount = judgedSets.filter((set) => set.reps === null || set.reps < target.minReps).length;
  const tooHardCount = judgedSets.filter((set) => set.effort === "too-hard").length;
  const tooEasyCount = judgedSets.filter((set) => set.effort === "too-easy").length;
  const variedLoads = judgedSets.some((set) => set.load !== null && Math.abs(set.load - topLoad) >= 0.01);
  const previousSummary = formatSetSummary(previous.entry, exercise);

  if (hitTop && allSameLoad && tooHardCount === 0) {
    const load = roundToIncrement(lastLoad + increment, increment);
    return {
      model: "Progress",
      load: formatExerciseLoad(load, exercise),
      reps: exercise.prescription,
      reason: `Last time: ${previousSummary}. All required sets topped the range at the same load.`,
      previous,
    };
  }

  if (variedLoads && topHitTop && hitMinimum && tooHardCount === 0 && tooEasyCount >= judgedSets.length - 1) {
    const load = roundToIncrement(lastLoad + increment, increment);
    return {
      model: "Progress top set",
      load: formatExerciseLoad(load, exercise),
      reps: exercise.prescription,
      reason: `Last time used back-off loads but every set stayed in range and felt easy enough. Progress the top set.`,
      previous,
    };
  }

  if (missedFloorCount >= 2 || (missedFloorCount >= 1 && tooHardCount >= 1)) {
    const percent = exercise.kind === "compound" ? 0.95 : 0.9;
    const load = roundToIncrement(lastLoad * percent, increment);
    return {
      model: "Regress",
      load: formatExerciseLoad(load, exercise),
      reps: exercise.prescription,
      reason: `Last time was too hard or below the floor. Trim load, get clean reps, then rebuild.`,
      previous,
    };
  }

  return {
    model: "Repeat",
    load: formatExerciseLoad(lastLoad, exercise),
    reps: exercise.prescription,
    reason: variedLoads
      ? `Last time: ${previousSummary}. Keep the top load and try to bring back-off sets up.`
      : `Last time: ${previousSummary}. Add reps before adding load.`,
    previous,
  };
}

function getRecommendation() {
  const routine = getRoutine();
  const active = getActive();
  const nextSession = routine.sessions[active?.sessionIndex ?? getNextSessionIndex()];

  if (active) {
    return {
      mode: "workout",
      label: "Resume workout",
      title: `${nextSession.title} is in progress`,
      body: "Continue at the first unfinished exercise. Your weights and reps are already saved.",
      session: nextSession,
    };
  }

  const last = getLastLog();
  if (!last) {
    return {
      mode: "workout",
      label: "Start here",
      title: `Do ${nextSession.title}`,
      body: "No completed log yet. Start the first session and let the tracker handle the rotation after that.",
      session: nextSession,
    };
  }

  const hours = (Date.now() - last.completedAt) / 36e5;
  if (hours < routine.restHours) {
    return {
      mode: "rest",
      label: "Rest recommended",
      title: "Recover today",
      body: `Last completed: ${formatRelative(last.completedAt)}. Next lift is ${nextSession.title}, but give it more time unless this was a very easy session.`,
      session: nextSession,
    };
  }

  if (hours >= routine.staleHours) {
    return {
      mode: "workout",
      label: "Resume rotation",
      title: `Do ${nextSession.title}`,
      body: `You skipped time, not the workout. Start where the rotation left off and use the first work set to judge if loads need a 5-10% trim.`,
      session: nextSession,
    };
  }

  return {
    mode: "workout",
    label: "Workout recommended",
    title: `Do ${nextSession.title}`,
    body: `Last completed: ${formatRelative(last.completedAt)}. Continue the rotation from the logbook, not the calendar.`,
    session: nextSession,
  };
}

function renderNow() {
  const routine = getRoutine();
  const rec = getRecommendation();
  const last = getLastLog();

  nowMount.innerHTML = `
    <article class="now-card">
      <div class="now-status">
        <div>
          <p class="eyebrow">${routine.label}</p>
          <h2>${rec.title}</h2>
        </div>
        <span class="status-pill ${rec.mode === "rest" ? "rest" : ""}">${rec.label}</span>
      </div>
      <p>${rec.body}</p>
      <div class="action-row">
        <button class="primary-button" type="button" id="startSession">
          ${getActive() ? "Resume current exercise" : "Start next session"}
        </button>
        <button class="ghost-button" type="button" id="copyLog">Copy current log</button>
      </div>
    </article>
    <article class="now-card">
      <p class="eyebrow">Latest log</p>
      <h2>${last ? last.sessionTitle : "No sessions yet"}</h2>
      <p>${last ? `${formatDate(last.completedAt)} · ${last.completed.length}/${last.total} exercises completed` : routine.goal}</p>
      <div class="action-row">
        <button class="ghost-button" type="button" id="markRest">Log rest day</button>
        <button class="danger-button" type="button" id="clearActive">Clear active workout</button>
      </div>
    </article>
  `;

  document.getElementById("startSession").addEventListener("click", startOrResume);
  document.getElementById("copyLog").addEventListener("click", copyCurrentLog);
  document.getElementById("markRest").addEventListener("click", logRest);
  document.getElementById("clearActive").addEventListener("click", () => {
    setActive(null);
    showToast("Active workout cleared");
    render();
  });
}

function renderMovement() {
  const active = getActive();
  if (!active) {
    movementMount.innerHTML = "";
    return;
  }

  const routine = getRoutine();
  const session = routine.sessions[active.sessionIndex];
  const movementIndex = getCurrentMovementIndex(active, session);
  const movement = session.exercises[movementIndex];
  const doneCount = active.done.filter(Boolean).length;

  if (!movement) {
    movementMount.innerHTML = `
      <article class="movement-card">
        <div class="movement-body">
          <p class="eyebrow">Session complete</p>
          <h2>${session.title}</h2>
          <p>All prescribed exercises are complete. Finish the workout to add it to the log and advance the rotation.</p>
          <button class="primary-button" type="button" id="finishSession">Finish workout</button>
        </div>
      </article>
    `;
    document.getElementById("finishSession").addEventListener("click", finishSession);
    return;
  }

  const ref = media[movement.mediaKey] || media.core;
  const suggestion = getSuggestion(movement, session, movementIndex);
  const entry = active.entries[movementIndex] || {};
  const suggestedNumericLoad = parseLoad(suggestion.load);
  const defaultWeight = entry.weight || (suggestedNumericLoad !== null ? String(suggestedNumericLoad) : "");
  let displaySets = normalizeEntrySets(entry, movement);
  const setsAreBlank = displaySets.every((set) => !set.load && !set.reps);
  if (setsAreBlank && defaultWeight) {
    displaySets = displaySets.map((set) => ({ ...set, load: defaultWeight }));
  }
  movementMount.innerHTML = `
    <article class="movement-card">
      <div class="movement-body">
        <div>
          <p class="eyebrow">Current exercise ${movementIndex + 1} of ${session.exercises.length}</p>
          <h2>${movement.name}</h2>
          <div class="movement-kicker">
            <span>${movement.prescription}</span>
            <span>${session.effort}</span>
            <span>${doneCount}/${session.exercises.length} exercises done</span>
          </div>
        </div>
        <section class="suggestion-panel" aria-label="Suggested load and reps">
          <div>
            <p class="eyebrow">${suggestion.model}</p>
            <strong>${suggestion.load}</strong>
          </div>
          <div>
            <span>${suggestion.reps}</span>
            <p>${suggestion.reason}</p>
          </div>
        </section>
        <p>${ref.cue}</p>
        <div class="compact-actions">
          <button class="ghost-button" type="button" id="openFormReference">Form</button>
          <button class="ghost-button" type="button" id="openPrevious">Previous</button>
        </div>
        <section class="set-logger" aria-label="Work set log">
          <div class="set-logger-head">
            <div>
              <p class="eyebrow">Work sets</p>
              <h3>Log each set</h3>
            </div>
            <small>Warm-ups do not count here.</small>
          </div>
          <div class="set-tools">
            <button type="button" class="ghost-button" id="copySetOne">Copy set 1 load</button>
            <button type="button" class="ghost-button" id="dropFinalSet">Drop final set</button>
            <button type="button" class="ghost-button" id="addSet">Add set</button>
          </div>
          <div class="set-list" id="setList">
            ${displaySets.map((set, index) => renderSetRow(set, index, movement)).join("")}
          </div>
        </section>
        <label class="notes-field">
          <span>Exercise notes</span>
          <textarea id="notesInput" autocomplete="off" placeholder="Form, machine setting, pain, substitution">${escapeHtml(entry.notes || "")}</textarea>
        </label>
        <div class="set-actions">
          <button class="primary-button" type="button" id="completeMovement">Complete all sets for this exercise</button>
          <button class="ghost-button" type="button" id="skipMovement">Skip this exercise for now</button>
        </div>
      </div>
    </article>
  `;

  document.querySelectorAll(".set-load, .set-reps, .set-effort, #notesInput").forEach((field) => {
    field.addEventListener("input", saveMovementEntry);
    field.addEventListener("change", saveMovementEntry);
  });
  document.getElementById("copySetOne").addEventListener("click", copySetOneLoad);
  document.getElementById("dropFinalSet").addEventListener("click", dropFinalSetLoad);
  document.getElementById("addSet").addEventListener("click", addWorkSet);
  document.getElementById("openFormReference").addEventListener("click", () => openFormSheet(movement, ref));
  document.getElementById("openPrevious").addEventListener("click", () => openPreviousSheet(movement));
  document.getElementById("completeMovement").addEventListener("click", completeExercise);
  document.getElementById("skipMovement").addEventListener("click", skipExercise);
}

function renderSetRow(set, index, exercise) {
  const loadLabel = exercise.load === "bodyweight" ? "Load / note" : "Load";
  const repsLabel = exercise.target.mode === "duration" ? "Minutes" : "Reps";
  return `
    <div class="set-row" data-set-index="${index}">
      <strong>Set ${index + 1}</strong>
      <label>
        <span>${loadLabel}</span>
        <input class="set-load" inputmode="decimal" autocomplete="off" value="${escapeAttr(set.load)}" placeholder="${exercise.load === "bodyweight" ? "bodyweight" : "100"}" />
      </label>
      <label>
        <span>${repsLabel}</span>
        <input class="set-reps" inputmode="decimal" autocomplete="off" value="${escapeAttr(set.reps)}" placeholder="${exercise.target.mode === "duration" ? "25" : "8"}" />
      </label>
      <label>
        <span>Effort</span>
        <select class="set-effort">
          <option value="too-easy" ${set.effort === "too-easy" ? "selected" : ""}>Too easy</option>
          <option value="right" ${!set.effort || set.effort === "right" ? "selected" : ""}>Right</option>
          <option value="too-hard" ${set.effort === "too-hard" ? "selected" : ""}>Too hard</option>
        </select>
      </label>
    </div>
  `;
}

function openSheet(title, content, options = {}) {
  sheetMount.innerHTML = `
    <div class="sheet-backdrop" data-close-sheet></div>
    <aside class="sheet-panel ${options.wide ? "sheet-wide" : ""}" role="dialog" aria-modal="true" aria-label="${escapeAttr(title)}">
      <header class="sheet-head">
        <div>
          <p class="eyebrow">${options.eyebrow || "Review"}</p>
          <h2>${title}</h2>
        </div>
        <button class="icon-button" type="button" data-close-sheet>Close</button>
      </header>
      <div class="sheet-body">${content}</div>
    </aside>
  `;

  sheetMount.querySelectorAll("[data-close-sheet]").forEach((button) => {
    button.addEventListener("click", closeSheet);
  });
}

function closeSheet() {
  sheetMount.innerHTML = "";
}

function openMenuSheet() {
  openSheet("Menu", `
    <div class="menu-list">
      <button type="button" data-open-sheet="plan">
        <strong>Plan</strong>
        <span>Rotation, exercises, and targets.</span>
      </button>
      <button type="button" data-open-sheet="logbook">
        <strong>Logbook</strong>
        <span>Recent workouts and progression history.</span>
      </button>
      <button type="button" data-open-sheet="settings">
        <strong>Settings</strong>
        <span>Identity and model rules.</span>
      </button>
    </div>
  `, { eyebrow: "Now" });

  sheetMount.querySelector('[data-open-sheet="plan"]').addEventListener("click", openPlanSheet);
  sheetMount.querySelector('[data-open-sheet="logbook"]').addEventListener("click", openLogbookSheet);
  sheetMount.querySelector('[data-open-sheet="settings"]').addEventListener("click", openSettingsSheet);
}

function openPlanSheet() {
  const routine = getRoutine();
  const nextIndex = getActive()?.sessionIndex ?? getNextSessionIndex();
  openSheet("Plan", `
    <div class="sheet-section">
      <p>${routine.goal}</p>
    </div>
    <div class="queue-list">
      ${routine.sessions.map((session, index) => `
        <article class="queue-item ${index === nextIndex ? "is-active" : ""}">
          <span class="accent ${session.accent}" aria-hidden="true"></span>
          <div>
            <h4>${session.title}</h4>
            <small>${session.exercises.length} exercises · ${session.effort}</small>
          </div>
          <small>${index === nextIndex ? "next" : ""}</small>
        </article>
      `).join("")}
    </div>
    <div class="sheet-section">
      ${routine.sessions.map((session) => `
        <details class="plan-details">
          <summary>${session.title}</summary>
          <div class="exercise-list">
            ${session.exercises.map((exercise, index) => `
              <div class="exercise-row">
                <span class="exercise-index">${index + 1}</span>
                <div>
                  <h4>${exercise.name}</h4>
                  <p>${exercise.prescription}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </details>
      `).join("")}
    </div>
  `, { eyebrow: routines[person].label, wide: true });
}

function openLogbookSheet() {
  const logs = getLogs().slice().reverse();
  openSheet("Logbook", `
    <div class="history-list">
      ${logs.length ? logs.map((log) => `
        <div>
          <h4>${log.sessionTitle}</h4>
          <small>${formatDate(log.completedAt)}${log.type === "workout" ? ` · ${log.completed.length}/${log.total} exercises` : ""}</small>
        </div>
      `).join("") : "<p>No logs yet.</p>"}
    </div>
  `, { eyebrow: routines[person].label });
}

function openSettingsSheet() {
  openSheet("Settings", `
    <div class="settings-block">
      <p class="eyebrow">Identity</p>
      <div class="identity-toggle" role="group" aria-label="Choose person">
        <button type="button" data-person="me">Me</button>
        <button type="button" data-person="wife">Wife</button>
      </div>
    </div>
    <div class="rules-grid">
      <ul>${rules[person].map((rule) => `<li>${rule}</li>`).join("")}</ul>
      <ul>
        <li><strong>Initial:</strong> ramp to target reps with ${targetRir()}.</li>
        <li><strong>Progress:</strong> all required sets at top range and same load.</li>
        <li><strong>Repeat:</strong> top set is strong but back-off sets need work.</li>
        <li><strong>Regress:</strong> multiple missed floors or too-hard sets.</li>
      </ul>
    </div>
    <div class="settings-block">
      <p class="eyebrow">Data</p>
      <p class="storage-meta">Local device · schema v${schemaVersion} · JSON backup</p>
      <div class="data-actions">
        <button class="ghost-button" type="button" id="exportData">Export progress</button>
        <button class="ghost-button" type="button" id="importData">Import progress</button>
      </div>
      <input class="file-input" id="importDataFile" type="file" accept="application/json" />
    </div>
  `, { eyebrow: "Profile" });

  sheetMount.querySelectorAll("[data-person]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.person === person);
    button.addEventListener("click", () => {
      person = button.dataset.person;
      state.person = person;
      saveState();
      closeSheet();
      render();
    });
  });

  document.getElementById("exportData").addEventListener("click", exportProgressData);
  document.getElementById("importData").addEventListener("click", () => {
    document.getElementById("importDataFile").click();
  });
  document.getElementById("importDataFile").addEventListener("change", (event) => {
    importProgressData(event.target.files?.[0]);
  });
}

function exportProgressData() {
  saveState();
  const payload = JSON.stringify(state, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `do-now-workout-tracker-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
  showToast("Export downloaded");
}

function importProgressData(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      replaceState(JSON.parse(String(reader.result || "{}")));
      closeSheet();
      render();
      showToast("Progress imported");
    } catch {
      showToast("Import failed");
    }
  });
  reader.readAsText(file);
}

function openFormSheet(exercise, ref) {
  openSheet(exercise.name, `
    <div class="form-reference">
      ${ref.image ? `<img src="${ref.image}" alt="${escapeAttr(ref.title)} movement demonstration" />` : ""}
      <p>${ref.cue}</p>
      <a class="reference-link" href="${ref.source}" target="_blank" rel="noreferrer">Open full StrengthLog reference</a>
    </div>
  `, { eyebrow: "Form", wide: true });
}

function openPreviousSheet(exercise) {
  const previous = findLastMovementLog(exercise);
  if (!previous) {
    openSheet("Previous", `<p>No previous log for ${exercise.name} yet.</p>`, { eyebrow: exercise.name });
    return;
  }

  openSheet("Previous", `
    <div class="history-list">
      <div>
        <h4>${previous.session.title}</h4>
        <small>${formatDate(previous.log.completedAt)}</small>
        <p>${formatSetSummary(previous.entry, exercise)}</p>
        ${previous.entry.notes ? `<p>${escapeHtml(previous.entry.notes)}</p>` : ""}
      </div>
    </div>
  `, { eyebrow: exercise.name });
}

function startOrResume() {
  if (!getActive()) {
    const sessionIndex = getNextSessionIndex();
    const session = getRoutine().sessions[sessionIndex];
    const lastWorkout = getLastWorkoutLog();
    const returningFromGap = lastWorkout
      ? (Date.now() - lastWorkout.completedAt) / 36e5 >= getRoutine().staleHours
      : false;
    setActive({
      id: createId("active"),
      schemaVersion,
      personId: person,
      sessionId: session.id,
      sessionIndex,
      startedAt: Date.now(),
      returningFromGap,
      done: session.exercises.map(() => false),
      entries: session.exercises.map((exercise) => normalizeEntryForStorage({}, exercise, false)),
      cursor: 0,
    });
  }
  render();
  document.getElementById("movementMount")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function saveMovementEntry() {
  const active = getActive();
  if (!active) return;
  const session = getRoutine().sessions[active.sessionIndex];
  const index = getCurrentMovementIndex(active, session);
  const exercise = session.exercises[index];
  const existingSets = active.entries[index]?.sets || [];
  active.entries[index] = normalizeEntryForStorage({
    ...active.entries[index],
    sets: Array.from(document.querySelectorAll(".set-row")).map((row) => ({
      id: existingSets[Number(row.dataset.setIndex)]?.id,
      setIndex: Number(row.dataset.setIndex) + 1,
      load: row.querySelector(".set-load").value,
      reps: row.querySelector(".set-reps").value,
      effort: row.querySelector(".set-effort").value || "right",
    })),
    notes: document.getElementById("notesInput").value,
  }, exercise, active.done[index]);
  setActive(active);
}

function copySetOneLoad() {
  saveMovementEntry();
  const active = getActive();
  const session = getRoutine().sessions[active.sessionIndex];
  const index = getCurrentMovementIndex(active, session);
  const exercise = session.exercises[index];
  const sets = active.entries[index].sets;
  const firstLoad = sets[0]?.load || "";
  if (!firstLoad) {
    showToast("Set 1 has no load");
    return;
  }
  active.entries[index] = normalizeEntryForStorage({
    ...active.entries[index],
    sets: sets.map((set) => ({ ...set, load: firstLoad })),
  }, exercise, active.done[index]);
  setActive(active);
  renderMovement();
}

function dropFinalSetLoad() {
  saveMovementEntry();
  const active = getActive();
  const session = getRoutine().sessions[active.sessionIndex];
  const index = getCurrentMovementIndex(active, session);
  const exercise = session.exercises[index];
  const sets = active.entries[index].sets;
  const finalIndex = sets.length - 1;
  const currentLoad = parseLoad(sets[finalIndex]?.load);
  if (currentLoad === null) {
    showToast("Final set has no numeric load");
    return;
  }
  const nextLoad = roundToIncrement(currentLoad - (exercise.increment || 5), exercise.increment || 5);
  sets[finalIndex].load = String(nextLoad);
  active.entries[index] = normalizeEntryForStorage({ ...active.entries[index], sets }, exercise, active.done[index]);
  setActive(active);
  renderMovement();
}

function addWorkSet() {
  saveMovementEntry();
  const active = getActive();
  const session = getRoutine().sessions[active.sessionIndex];
  const index = getCurrentMovementIndex(active, session);
  const exercise = session.exercises[index];
  const sets = active.entries[index].sets;
  const last = sets.at(-1) || createSet();
  sets.push(createSet(last.load, "", "right", { id: createId("set"), setIndex: sets.length + 1 }));
  active.entries[index] = normalizeEntryForStorage({ ...active.entries[index], sets }, exercise, active.done[index]);
  setActive(active);
  renderMovement();
}

function completeExercise() {
  saveMovementEntry();
  const active = getActive();
  const session = getRoutine().sessions[active.sessionIndex];
  const index = getCurrentMovementIndex(active, session);
  active.entries[index] = normalizeEntryForStorage(active.entries[index], session.exercises[index], true);
  active.done[index] = true;
  active.cursor = getCurrentMovementIndex(active, session);
  setActive(active);
  render();
}

function skipExercise() {
  const active = getActive();
  const session = getRoutine().sessions[active.sessionIndex];
  const current = getCurrentMovementIndex(active, session);
  const nextOpen = session.exercises.findIndex((_, index) => index > current && !active.done[index]);
  active.cursor = nextOpen === -1 ? session.exercises.length : nextOpen;
  setActive(active);
  render();
}

function finishSession() {
  const active = getActive();
  if (!active) return;
  const routine = getRoutine();
  const session = routine.sessions[active.sessionIndex];
  getLogs().push(buildWorkoutLog(active, session));
  setActive(null);
  saveState();
  showToast("Session logged");
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function logRest() {
  getLogs().push(buildRestLog());
  saveState();
  showToast("Rest logged");
  render();
}

function buildWorkoutLog(active, session) {
  const completedAt = Date.now();
  const completed = active.done.map((done, index) => done ? index : null).filter((index) => index !== null);
  const entries = session.exercises.map((exercise, index) => normalizeEntryForStorage(
    active.entries[index],
    exercise,
    active.done[index],
  ));

  return {
    id: createId("workout"),
    schemaVersion,
    personId: person,
    type: "workout",
    sessionId: session.id,
    sessionTitle: session.title,
    completedAt,
    createdAt: completedAt,
    startedAt: active.startedAt,
    completed,
    total: session.exercises.length,
    exerciseIds: session.exercises.map((exercise) => exercise.id),
    entries: entries.map(cloneEntry),
    exerciseLogs: entries.map(cloneEntry),
  };
}

function buildRestLog() {
  const completedAt = Date.now();
  return {
    id: createId("rest"),
    schemaVersion,
    personId: person,
    type: "rest",
    sessionId: "rest",
    sessionTitle: "Rest / walk",
    completedAt,
    createdAt: completedAt,
    completed: [],
    total: 0,
    entries: [],
    exerciseLogs: [],
  };
}

function getCurrentMovementIndex(active, session) {
  if (active.cursor < session.exercises.length && !active.done[active.cursor]) {
    return active.cursor;
  }
  const next = session.exercises.findIndex((_, index) => !active.done[index]);
  return next === -1 ? session.exercises.length : next;
}

function copyCurrentLog() {
  const active = getActive();
  const routine = getRoutine();
  if (!active) {
    const next = routine.sessions[getNextSessionIndex()];
    copyText(`${routine.label}: next workout is ${next.title}`);
    return;
  }

  const session = routine.sessions[active.sessionIndex];
  const lines = [`${routine.label} - ${session.title}`, session.warmup, ""];
  session.exercises.forEach((exercise, index) => {
    const entry = active.entries[index] || {};
    const status = active.done[index] ? "done" : "open";
    lines.push(`- ${exercise.name} (${exercise.prescription}) | ${status} | ${formatSetSummary(entry, exercise)} | ${entry.notes || ""}`);
  });
  copyText(lines.join("\n"));
}

function copyText(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast("Copied")).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.top = "-1000px";
  document.body.append(area);
  area.select();
  document.execCommand("copy");
  area.remove();
  showToast("Copied");
}

function formatDate(ms) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(ms));
}

function formatRelative(ms) {
  const hours = Math.max(1, Math.round((Date.now() - ms) / 36e5));
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.round(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.append(toast);
  window.setTimeout(() => toast.remove(), 1800);
}
