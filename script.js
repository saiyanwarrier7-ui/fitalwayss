/**
 * FitAlways - AI Gym Training & Fitness Calculator Engine
 * Vanilla JavaScript Architecture
 */

// ============================================================================
// 1. COMPREHENSIVE DATABASES (EXERCISES & FOOD NUTRITION)
// ============================================================================

const EXERCISE_DATABASE = {
  // Chest
  bench_press: {
    id: 'bench_press',
    name: 'Barbell Flat Bench Press',
    muscle: 'Chest (Pectorals)',
    equipment: 'full_gym',
    sets: 3,
    reps: '8-10 reps',
    rest: 90,
    cues: 'Retract scapulae, plant feet flat, lower bar to sternum with controlled cadence, drive up through palms.',
    alternatives: ['db_bench_press', 'push_ups', 'machine_chest_press']
  },
  db_bench_press: {
    id: 'db_bench_press',
    name: 'Dumbbell Flat Bench Press',
    muscle: 'Chest (Pectorals)',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '10-12 reps',
    rest: 75,
    cues: 'Keep elbows tucked at ~45-degree angle. Converge dumbbells gently at peak contraction without clanking.',
    alternatives: ['bench_press', 'push_ups']
  },
  incline_db_press: {
    id: 'incline_db_press',
    name: 'Incline Dumbbell Press',
    muscle: 'Upper Chest (Clavicular Head)',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '10-12 reps',
    rest: 75,
    cues: 'Set bench to 30-degree incline. Drive upwards while maintaining shoulder blades pinned back.',
    alternatives: ['incline_barbell_press', 'decline_pushups']
  },
  incline_barbell_press: {
    id: 'incline_barbell_press',
    name: 'Incline Barbell Bench Press',
    muscle: 'Upper Chest',
    equipment: 'full_gym',
    sets: 3,
    reps: '8-10 reps',
    rest: 90,
    cues: 'Lower bar to upper chest clavicle line. Keep core braced and lumbar arch natural.',
    alternatives: ['incline_db_press', 'push_ups']
  },
  push_ups: {
    id: 'push_ups',
    name: 'Standard Push-Ups',
    muscle: 'Chest & Core',
    equipment: 'bodyweight',
    sets: 3,
    reps: '15-20 reps',
    rest: 60,
    cues: 'Maintain plank rigidity from crown to heels. Lower until chest hovers 1 inch above floor.',
    alternatives: ['bench_press', 'db_bench_press']
  },
  cable_crossover: {
    id: 'cable_crossover',
    name: 'Cable Chest Flyes',
    muscle: 'Chest (Sternal Peak)',
    equipment: 'full_gym',
    sets: 3,
    reps: '12-15 reps',
    rest: 60,
    cues: 'Slight bend in elbows throughout movement. Emphasize deep stretch and hard peak contraction.',
    alternatives: ['db_flyes', 'resistance_band_flyes']
  },
  db_flyes: {
    id: 'db_flyes',
    name: 'Flat Dumbbell Flyes',
    muscle: 'Chest',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '12-15 reps',
    rest: 60,
    cues: 'Maintain soft bend in elbows. Open arms wide to shoulder depth, feeling deep pec stretch.',
    alternatives: ['cable_crossover']
  },

  // Back
  barbell_row: {
    id: 'barbell_row',
    name: 'Bent-Over Barbell Row',
    muscle: 'Upper Back & Lats',
    equipment: 'full_gym',
    sets: 4,
    reps: '8-10 reps',
    rest: 90,
    cues: 'Hinge at hips to ~45 degrees with neutral spine. Pull bar towards lower belly, driving elbows back.',
    alternatives: ['db_single_arm_row', 'chest_supported_row', 'inverted_row']
  },
  db_single_arm_row: {
    id: 'db_single_arm_row',
    name: 'One-Arm Dumbbell Row',
    muscle: 'Lats & Rhomboids',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '10-12 reps/side',
    rest: 60,
    cues: 'Support knee and hand on bench. Pull dumbbell to hip crease without rotating the torso.',
    alternatives: ['barbell_row', 'inverted_row']
  },
  pull_ups: {
    id: 'pull_ups',
    name: 'Overhand Pull-Ups',
    muscle: 'Latissimus Dorsi',
    equipment: 'bodyweight',
    sets: 3,
    reps: '6-10 reps',
    rest: 90,
    cues: 'Full extension at bottom. Pull clavicles towards bar, driving elbows into back pockets.',
    alternatives: ['lat_pulldown', 'resistance_band_pulldown']
  },
  lat_pulldown: {
    id: 'lat_pulldown',
    name: 'Lat Pulldown (Wide Grip)',
    muscle: 'Latissimus Dorsi',
    equipment: 'full_gym',
    sets: 3,
    reps: '10-12 reps',
    rest: 75,
    cues: 'Lean torso back ~10 degrees. Pull bar smoothly to collarbone while depressing shoulder blades.',
    alternatives: ['pull_ups', 'db_single_arm_row']
  },
  seated_cable_row: {
    id: 'seated_cable_row',
    name: 'Seated Cable Row',
    muscle: 'Mid-Back & Rhomboids',
    equipment: 'full_gym',
    sets: 3,
    reps: '10-12 reps',
    rest: 60,
    cues: 'Sit upright with upright chest. Pull v-handle into abdomen, squeezing scapulae for 1 full second.',
    alternatives: ['db_single_arm_row', 'inverted_row']
  },
  inverted_row: {
    id: 'inverted_row',
    name: 'Inverted Bodyweight Row',
    muscle: 'Upper Back',
    equipment: 'bodyweight',
    sets: 3,
    reps: '10-12 reps',
    rest: 60,
    cues: 'Hang beneath bar or table with heels grounded. Pull sternum directly to bar.',
    alternatives: ['pull_ups', 'barbell_row']
  },

  // Shoulders
  overhead_press: {
    id: 'overhead_press',
    name: 'Standing Barbell Overhead Press',
    muscle: 'Anterior & Lateral Deltoids',
    equipment: 'full_gym',
    sets: 3,
    reps: '6-8 reps',
    rest: 90,
    cues: 'Squeeze glutes and brace abs tightly. Press bar vertically overhead, clearing head with slight chin tuck.',
    alternatives: ['db_seated_shoulder_press', 'pike_pushups']
  },
  db_seated_shoulder_press: {
    id: 'db_seated_shoulder_press',
    name: 'Seated Dumbbell Shoulder Press',
    muscle: 'Deltoids',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '10-12 reps',
    rest: 75,
    cues: 'Press dumbbells up in a slight arc. Avoid clanking at top or arching lower spine excessively.',
    alternatives: ['overhead_press', 'pike_pushups']
  },
  lateral_raises: {
    id: 'lateral_raises',
    name: 'Dumbbell Lateral Raises',
    muscle: 'Lateral Deltoids (Shoulder Width)',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '12-15 reps',
    rest: 60,
    cues: 'Lead with elbows and pinkies slightly elevated. Pour pitcher of water at top of motion.',
    alternatives: ['cable_lateral_raise', 'resistance_band_lateral_raise']
  },
  face_pulls: {
    id: 'face_pulls',
    name: 'Cable / Band Face Pulls',
    muscle: 'Rear Deltoids & Rotator Cuff',
    equipment: 'full_gym',
    sets: 3,
    reps: '15-20 reps',
    rest: 60,
    cues: 'Pull rope towards bridge of nose while externally rotating hands back behind ears.',
    alternatives: ['rear_delt_db_flyes']
  },
  rear_delt_db_flyes: {
    id: 'rear_delt_db_flyes',
    name: 'Bent-Over Rear Delt Flyes',
    muscle: 'Rear Deltoids',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '12-15 reps',
    rest: 60,
    cues: 'Hinge forward to horizontal. Raise dumbbells out to sides using posterior delts rather than traps.',
    alternatives: ['face_pulls']
  },
  pike_pushups: {
    id: 'pike_pushups',
    name: 'Pike Push-Ups',
    muscle: 'Shoulders & Triceps',
    equipment: 'bodyweight',
    sets: 3,
    reps: '8-12 reps',
    rest: 60,
    cues: 'Hips elevated in inverted V position. Lower crown of head forward between hands.',
    alternatives: ['db_seated_shoulder_press']
  },

  // Legs (Quads, Hamstrings, Glutes)
  barbell_squat: {
    id: 'barbell_squat',
    name: 'Barbell Back Squat',
    muscle: 'Quadriceps & Glutes',
    equipment: 'full_gym',
    sets: 4,
    reps: '6-8 reps',
    rest: 120,
    cues: 'Brace abdominal wall with valsalva breath. Break at hips and knees together, descend to parallel.',
    alternatives: ['goblet_squat', 'leg_press', 'bodyweight_squats']
  },
  goblet_squat: {
    id: 'goblet_squat',
    name: 'Dumbbell Goblet Squat',
    muscle: 'Quads & Core',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '10-12 reps',
    rest: 75,
    cues: 'Hold dumbbell vertically against upper chest. Keep elbows inside knees as you descend.',
    alternatives: ['barbell_squat', 'bodyweight_squats']
  },
  bodyweight_squats: {
    id: 'bodyweight_squats',
    name: 'Air Squats (Tempo 3-0-1)',
    muscle: 'Quads & Glutes',
    equipment: 'bodyweight',
    sets: 3,
    reps: '20-25 reps',
    rest: 45,
    cues: 'Chest tall, knees tracking over toes, controlled 3-second negative phase.',
    alternatives: ['goblet_squat', 'lunges']
  },
  romanian_deadlift: {
    id: 'romanian_deadlift',
    name: 'Barbell Romanian Deadlift (RDL)',
    muscle: 'Hamstrings & Glutes',
    equipment: 'full_gym',
    sets: 3,
    reps: '8-10 reps',
    rest: 90,
    cues: 'Soft bend in knees. Push hips back as far as possible until intense hamstring stretch, spine locked neutral.',
    alternatives: ['db_rdl', 'good_mornings']
  },
  db_rdl: {
    id: 'db_rdl',
    name: 'Dumbbell Romanian Deadlift',
    muscle: 'Hamstrings & Posterior Chain',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '10-12 reps',
    rest: 75,
    cues: 'Keep dumbbells grazing shins. Drive hips forward at top to contract glutes.',
    alternatives: ['romanian_deadlift', 'glute_bridges']
  },
  bulgarian_split_squat: {
    id: 'bulgarian_split_squat',
    name: 'Bulgarian Split Squats',
    muscle: 'Quads & Glute Medius',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '8-10 reps/leg',
    rest: 75,
    cues: 'Rear foot elevated on bench. Lower hips vertically until rear knee nearly touches floor.',
    alternatives: ['walking_lunges', 'bodyweight_squats']
  },
  walking_lunges: {
    id: 'walking_lunges',
    name: 'Dumbbell Walking Lunges',
    muscle: 'Quads & Glutes',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '10-12 steps/leg',
    rest: 60,
    cues: 'Take deliberate strides. Keep front shin vertical and torso upright.',
    alternatives: ['bulgarian_split_squat']
  },
  leg_press: {
    id: 'leg_press',
    name: '45-Degree Leg Press',
    muscle: 'Quadriceps',
    equipment: 'full_gym',
    sets: 3,
    reps: '10-12 reps',
    rest: 90,
    cues: 'Keep lower back glued to back pad. Do not allow hips to curl or lift at deep bottom.',
    alternatives: ['barbell_squat', 'goblet_squat']
  },
  leg_curl: {
    id: 'leg_curl',
    name: 'Lying or Seated Hamstring Curl',
    muscle: 'Hamstrings (Knee Flexion)',
    equipment: 'full_gym',
    sets: 3,
    reps: '12-15 reps',
    rest: 60,
    cues: 'Keep hips pinned down. Flex heels to glutes with smooth control on the 3-second eccentric.',
    alternatives: ['db_rdl', 'stability_ball_leg_curl']
  },
  standing_calf_raise: {
    id: 'standing_calf_raise',
    name: 'Standing Calf Raises',
    muscle: 'Calves (Gastrocnemius)',
    equipment: 'full_gym',
    sets: 4,
    reps: '12-15 reps',
    rest: 45,
    cues: 'Pause 2 seconds in full deep stretch at bottom, explode up to ball of foot.',
    alternatives: ['seated_calf_raise', 'single_leg_calf_raise']
  },

  // Arms (Biceps & Triceps)
  barbell_curl: {
    id: 'barbell_curl',
    name: 'EZ-Bar Biceps Curl',
    muscle: 'Biceps Brachii',
    equipment: 'full_gym',
    sets: 3,
    reps: '10-12 reps',
    rest: 60,
    cues: 'Pin elbows to ribcage. Avoid swinging with lower back momentum.',
    alternatives: ['db_incline_curl', 'hammer_curls']
  },
  db_incline_curl: {
    id: 'db_incline_curl',
    name: 'Incline Dumbbell Curl',
    muscle: 'Biceps (Long Head Stretch)',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '10-12 reps',
    rest: 60,
    cues: 'Lie back on 45-degree incline. Let arms hang vertically, curling up while supinating wrists.',
    alternatives: ['barbell_curl', 'hammer_curls']
  },
  hammer_curls: {
    id: 'hammer_curls',
    name: 'Dumbbell Hammer Curls',
    muscle: 'Brachialis & Forearms',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '10-12 reps',
    rest: 60,
    cues: 'Neutral grip (palms facing inward). Curl dumbbell towards shoulder with strict form.',
    alternatives: ['barbell_curl']
  },
  tricep_pushdown: {
    id: 'tricep_pushdown',
    name: 'Cable Triceps Rope Pushdown',
    muscle: 'Triceps (Lateral Head)',
    equipment: 'full_gym',
    sets: 3,
    reps: '12-15 reps',
    rest: 60,
    cues: 'Keep elbows locked at sides. Flare rope handles apart at full elbow lockout.',
    alternatives: ['overhead_db_tricep_extension', 'diamond_pushups']
  },
  skull_crushers: {
    id: 'skull_crushers',
    name: 'Lying Triceps Extension (Skull Crushers)',
    muscle: 'Triceps (Long Head)',
    equipment: 'full_gym',
    sets: 3,
    reps: '10-12 reps',
    rest: 60,
    cues: 'Angle upper arms slightly back. Hinge at elbows lowering bar to hairline.',
    alternatives: ['tricep_pushdown', 'overhead_db_tricep_extension']
  },
  overhead_db_tricep_extension: {
    id: 'overhead_db_tricep_extension',
    name: 'Seated Overhead Dumbbell Extension',
    muscle: 'Triceps (Long Head Stretch)',
    equipment: 'dumbbells_only',
    sets: 3,
    reps: '10-12 reps',
    rest: 60,
    cues: 'Hold dumbbell vertically overhead with both hands cup around bell. Lower behind neck.',
    alternatives: ['skull_crushers', 'tricep_pushdown']
  },
  diamond_pushups: {
    id: 'diamond_pushups',
    name: 'Diamond Push-Ups',
    muscle: 'Triceps & Inner Chest',
    equipment: 'bodyweight',
    sets: 3,
    reps: '10-15 reps',
    rest: 60,
    cues: 'Hands touching under chest creating diamond index finger / thumb shape.',
    alternatives: ['tricep_pushdown']
  },

  // Core / Abs
  plank: {
    id: 'plank',
    name: 'Forearm Plank',
    muscle: 'Transverse Abdominis & Core',
    equipment: 'bodyweight',
    sets: 3,
    reps: '45-60 sec',
    rest: 45,
    cues: 'Tuck pelvis, contract glutes hard, drive elbows into floor creating full body tension.',
    alternatives: ['ab_wheel_rollout', 'hanging_leg_raises']
  },
  hanging_leg_raises: {
    id: 'hanging_leg_raises',
    name: 'Hanging Leg / Knee Raises',
    muscle: 'Lower Abdominals & Hip Flexors',
    equipment: 'bodyweight',
    sets: 3,
    reps: '12-15 reps',
    rest: 60,
    cues: 'Avoid swinging momentum. Curl pelvis upward at top of repetition.',
    alternatives: ['lying_leg_raises', 'plank']
  },
  cable_woodchopper: {
    id: 'cable_woodchopper',
    name: 'Cable Oblique Woodchopper',
    muscle: 'Obliques & Rotational Core',
    equipment: 'full_gym',
    sets: 3,
    reps: '12-15 reps/side',
    rest: 45,
    cues: 'Rotate from torso and hips in explosive, controlled diagonal plane.',
    alternatives: ['russian_twists']
  }
};

// Transparent Food Nutrition Database (Approx per 100g or indicated unit)
const FOOD_DATABASE = [
  // Proteins
  { id: 'chicken_breast', name: 'Chicken Breast (Skinless, Cooked)', category: 'protein', diet: ['non_veg'], unit: '150g serving', grams: 150, cal: 247, p: 46.5, c: 0, f: 5.4, fiber: 0 },
  { id: 'salmon_fillet', name: 'Atlantic Salmon (Baked)', category: 'protein', diet: ['non_veg'], unit: '150g fillet', grams: 150, cal: 312, p: 34.0, c: 0, f: 19.5, fiber: 0 },
  { id: 'whole_eggs', name: 'Whole Eggs (Boiled/Poached)', category: 'protein', diet: ['non_veg', 'eggetarian'], unit: '2 large eggs (100g)', grams: 100, cal: 143, p: 12.6, c: 0.7, f: 9.5, fiber: 0 },
  { id: 'egg_whites', name: 'Liquid Egg Whites', category: 'protein', diet: ['non_veg', 'eggetarian'], unit: '150g serving', grams: 150, cal: 78, p: 16.5, c: 1.1, f: 0.3, fiber: 0 },
  { id: 'whey_protein', name: 'Whey Protein Isolate', category: 'protein', diet: ['non_veg', 'vegetarian', 'eggetarian', 'indian'], unit: '1 scoop (32g)', grams: 32, cal: 120, p: 25.0, c: 2.0, f: 1.0, fiber: 0 },
  { id: 'greek_yogurt', name: 'Greek Yogurt (0% Plain)', category: 'protein', diet: ['non_veg', 'vegetarian', 'eggetarian', 'indian'], unit: '200g container', grams: 200, cal: 130, p: 22.0, c: 8.0, f: 0.8, fiber: 0 },
  { id: 'paneer_raw', name: 'Paneer (Fresh Cottage Cheese)', category: 'protein', diet: ['vegetarian', 'eggetarian', 'indian'], unit: '100g portion', grams: 100, cal: 265, p: 18.3, c: 3.5, f: 20.8, fiber: 0 },
  { id: 'tofu_firm', name: 'Organic Firm Tofu', category: 'protein', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg', 'indian'], unit: '150g serving', grams: 150, cal: 125, p: 15.0, c: 2.8, f: 6.5, fiber: 1.5 },
  { id: 'soy_chunks', name: 'Soya Chunks (Mealmaker, Dry wt)', category: 'protein', diet: ['vegan', 'vegetarian', 'eggetarian', 'indian'], unit: '50g dry portion', grams: 50, cal: 172, p: 26.0, c: 16.5, f: 0.5, fiber: 6.5 },
  { id: 'tuna_canned', name: 'Canned Light Tuna in Water', category: 'protein', diet: ['non_veg'], unit: '1 can drained (120g)', grams: 120, cal: 132, p: 28.8, c: 0, f: 1.2, fiber: 0 },

  // Carbohydrates & Grains
  { id: 'oats_rolled', name: 'Rolled Oats (Dry)', category: 'carbs', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg', 'indian'], unit: '60g portion', grams: 60, cal: 233, p: 8.0, c: 40.0, f: 4.2, fiber: 6.0 },
  { id: 'brown_rice', name: 'Cooked Brown Rice', category: 'carbs', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg', 'indian'], unit: '150g cooked', grams: 150, cal: 168, p: 3.9, c: 35.1, f: 1.4, fiber: 2.7 },
  { id: 'white_basmati_rice', name: 'Basmati White Rice (Cooked)', category: 'carbs', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg', 'indian'], unit: '150g cooked', grams: 150, cal: 195, p: 4.2, c: 42.0, f: 0.6, fiber: 1.0 },
  { id: 'whole_wheat_roti', name: 'Whole Wheat Roti / Chapati', category: 'carbs', diet: ['vegan', 'vegetarian', 'eggetarian', 'indian'], unit: '2 rotis (70g)', grams: 70, cal: 190, p: 6.2, c: 37.0, f: 1.8, fiber: 4.5 },
  { id: 'sweet_potato', name: 'Baked Sweet Potato', category: 'carbs', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg', 'indian'], unit: '200g serving', grams: 200, cal: 180, p: 4.0, c: 41.0, f: 0.3, fiber: 6.6 },
  { id: 'dal_tadka', name: 'Yellow Lentil Dal (Tadka)', category: 'carbs', diet: ['vegan', 'vegetarian', 'eggetarian', 'indian'], unit: '1 cup cooked (200g)', grams: 200, cal: 210, p: 12.0, c: 30.0, f: 4.5, fiber: 7.0 },
  { id: 'chana_chickpeas', name: 'Chickpeas / Chana Masala', category: 'carbs', diet: ['vegan', 'vegetarian', 'eggetarian', 'indian'], unit: '150g cooked', grams: 150, cal: 220, p: 10.5, c: 34.0, f: 5.0, fiber: 8.0 },
  { id: 'quinoa', name: 'Cooked Quinoa', category: 'carbs', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg'], unit: '150g cooked', grams: 150, cal: 180, p: 6.5, c: 32.0, f: 2.8, fiber: 4.2 },
  { id: 'banana', name: 'Fresh Banana', category: 'carbs', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg', 'indian'], unit: '1 medium (118g)', grams: 118, cal: 105, p: 1.3, c: 27.0, f: 0.3, fiber: 3.1 },
  { id: 'blueberries', name: 'Fresh Blueberries', category: 'carbs', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg'], unit: '100g portion', grams: 100, cal: 57, p: 0.7, c: 14.5, f: 0.3, fiber: 2.4 },

  // Healthy Fats & Nuts
  { id: 'almonds', name: 'Whole Raw Almonds', category: 'fats', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg', 'indian'], unit: '28g serving', grams: 28, cal: 164, p: 6.0, c: 6.1, f: 14.2, fiber: 3.5 },
  { id: 'peanut_butter', name: 'Natural Peanut Butter', category: 'fats', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg', 'indian'], unit: '2 tbsp (32g)', grams: 32, cal: 190, p: 8.0, c: 7.0, f: 16.0, fiber: 2.0 },
  { id: 'olive_oil', name: 'Extra Virgin Olive Oil', category: 'fats', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg'], unit: '1 tbsp (14g)', grams: 14, cal: 119, p: 0, c: 0, f: 13.5, fiber: 0 },
  { id: 'ghee_pure', name: 'Desi Cow Ghee', category: 'fats', diet: ['vegetarian', 'eggetarian', 'indian'], unit: '1 tsp (5g)', grams: 5, cal: 45, p: 0, c: 0, f: 5.0, fiber: 0 },
  { id: 'avocado', name: 'Fresh Hass Avocado', category: 'fats', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg'], unit: '1/2 medium (75g)', grams: 75, cal: 120, p: 1.5, c: 6.4, f: 11.0, fiber: 5.0 },
  { id: 'curd_dahi', name: 'Fresh Dahi / Curd (Plain)', category: 'protein', diet: ['vegetarian', 'eggetarian', 'indian'], unit: '150g portion', grams: 150, cal: 98, p: 5.5, c: 6.8, f: 5.5, fiber: 0 },

  // Fibrous Vegetables
  { id: 'broccoli_steamed', name: 'Steamed Broccoli Florets', category: 'carbs', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg', 'indian'], unit: '150g serving', grams: 150, cal: 52, p: 4.2, c: 10.5, f: 0.6, fiber: 3.9 },
  { id: 'spinach_cooked', name: 'Cooked Spinach / Palak', category: 'carbs', diet: ['vegan', 'vegetarian', 'eggetarian', 'non_veg', 'indian'], unit: '150g serving', grams: 150, cal: 35, p: 4.5, c: 5.6, f: 0.7, fiber: 3.6 }
];

// ============================================================================
// 2. DEFAULT USER STATE & STORAGE KEYS
// ============================================================================

const STORAGE_KEYS = {
  PROFILE: 'apexfit_profile',
  WORKOUT_PLAN: 'apexfit_workout_plan',
  MEAL_PLAN: 'apexfit_meal_plan',
  PROGRESS_HISTORY: 'apexfit_progress_history',
  HABITS: 'apexfit_habits',
  SETTINGS: 'apexfit_settings'
};

const DEFAULT_PROFILE = {
  name: 'Alex Hunter',
  age: 26,
  sex: 'male',
  unitSystem: 'metric',
  heightCm: 178,
  weightKg: 74.0,
  targetWeightKg: 78.0,
  bodyFatPct: 16.0,
  goal: 'muscle_gain',
  experience: 'intermediate',
  trainingDays: 4,
  durationMin: 60,
  activityMultiplier: 1.375,
  location: 'gym',
  equipment: 'full_gym',
  dietPreference: 'non_veg',
  allergies: '',
  mealsPerDay: 4,
  sleepHours: 7.5,
  injuries: ''
};

// Initial Sample Progress History to populate charts immediately
const DEFAULT_PROGRESS_HISTORY = [
  { date: '2026-09-15', weight: 72.8, bodyFat: 16.8, waist: 82.5, chest: 100, arms: 37.0, calories: 2380, protein: 158, workoutDone: true },
  { date: '2026-09-22', weight: 73.1, bodyFat: 16.6, waist: 82.5, chest: 100.5, arms: 37.2, calories: 2420, protein: 162, workoutDone: true },
  { date: '2026-09-29', weight: 73.4, bodyFat: 16.4, waist: 82.0, chest: 101.0, arms: 37.5, calories: 2450, protein: 165, workoutDone: true },
  { date: '2026-10-06', weight: 73.8, bodyFat: 16.2, waist: 82.0, chest: 101.5, arms: 37.8, calories: 2430, protein: 164, workoutDone: true },
  { date: '2026-10-13', weight: 74.0, bodyFat: 16.0, waist: 81.5, chest: 102.0, arms: 38.0, calories: 2450, protein: 166, workoutDone: true }
];

// App State Cache
let currentUserProfile = null;
let currentWorkoutPlan = null;
let currentMealPlan = null;
let currentProgressHistory = [];
let currentHabits = { waterLogged: 2250, sleepLogged: 7.5, lastDate: new Date().toISOString().split('T')[0] };
let currentSettings = { theme: 'dark', unitSystem: 'metric', timerAudio: true };

// Active Chart Instances
let chartWeight = null;
let chartCalories = null;
let chartDonut = null;
let chartStrength = null;

// Audio Context for Rest Timer
let audioCtx = null;

// Timers
let sessionStopwatchInterval = null;
let sessionSeconds = 0;
let isSessionRunning = false;

let restTimerInterval = null;
let restTimerSecondsRemaining = 90;
let isRestTimerRunning = false;

// ============================================================================
// 3. SCIENTIFIC CALCULATION ENGINES
// ============================================================================

/**
 * Validates profile fields before calculations.
 * Returns { valid: boolean, errors: string[] }
 */
export function validateProfile(profile) {
  const errors = [];
  if (!profile.name || profile.name.trim().length === 0) {
    errors.push('Please enter your full name or nickname.');
  }
  if (!profile.age || profile.age < 14 || profile.age > 100) {
    errors.push('Age must be between 14 and 100 years.');
  }
  if (!profile.heightCm || profile.heightCm < 100 || profile.heightCm > 250) {
    errors.push('Height must be between 100 cm and 250 cm.');
  }
  if (!profile.weightKg || profile.weightKg < 30 || profile.weightKg > 250) {
    errors.push('Current weight must be between 30 kg and 250 kg.');
  }
  if (!profile.targetWeightKg || profile.targetWeightKg < 30 || profile.targetWeightKg > 250) {
    errors.push('Target weight must be between 30 kg and 250 kg.');
  }
  if (profile.bodyFatPct && (profile.bodyFatPct < 3 || profile.bodyFatPct > 65)) {
    errors.push('Body fat percentage should be between 3% and 65% if provided.');
  }
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Calculates Body Mass Index (BMI) and categorization
 * Formula: weight (kg) / (height (m))^2
 */
export function calculateBMI(weightKg, heightCm) {
  const heightMeters = heightCm / 100;
  const bmi = weightKg / (heightMeters * heightMeters);
  let category = 'Normal';
  let badgeColor = 'text-emerald';

  if (bmi < 18.5) {
    category = 'Underweight';
    badgeColor = 'text-amber';
  } else if (bmi < 24.9) {
    category = 'Normal weight';
    badgeColor = 'text-emerald';
  } else if (bmi < 29.9) {
    category = 'Overweight';
    badgeColor = 'text-amber';
  } else if (bmi < 34.9) {
    category = 'Obese (Class 1)';
    badgeColor = 'text-rose';
  } else if (bmi < 39.9) {
    category = 'Obese (Class 2)';
    badgeColor = 'text-rose';
  } else {
    category = 'Obese (Class 3)';
    badgeColor = 'text-rose';
  }

  return {
    value: parseFloat(bmi.toFixed(1)),
    category,
    badgeColor
  };
}

/**
 * Calculates Basal Metabolic Rate (BMR) using Mifflin-St Jeor equation.
 * Male: 10 * W + 6.25 * H - 5 * A + 5
 * Female: 10 * W + 6.25 * H - 5 * A - 161
 */
export function calculateBMR(weightKg, heightCm, age, sex) {
  let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
  if (sex === 'female') {
    bmr -= 161;
  } else {
    bmr += 5;
  }
  return Math.round(bmr);
}

/**
 * Calculates Total Daily Energy Expenditure (TDEE)
 * Formula: BMR * Activity Multiplier
 */
export function calculateTDEE(bmr, activityMultiplier) {
  return Math.round(bmr * parseFloat(activityMultiplier));
}

/**
 * Calculates recommended daily caloric target based on fitness goal
 * Includes physiological safety floor (min 1,200 kcal female, 1,500 kcal male)
 */
export function calculateCalorieTarget(tdee, goal, sex) {
  let target = tdee;
  let label = 'Maintenance';
  let delta = 0;

  switch (goal) {
    case 'fat_loss':
      delta = -500;
      target = tdee - 500;
      label = 'Moderate Deficit (-500 kcal)';
      break;
    case 'muscle_gain':
      delta = 300;
      target = tdee + 300;
      label = 'Lean Surplus (+300 kcal)';
      break;
    case 'recomp':
      delta = -100;
      target = tdee - 100;
      label = 'High-Protein Recomp (-100 kcal)';
      break;
    case 'strength':
      delta = 200;
      target = tdee + 200;
      label = 'Strength Surplus (+200 kcal)';
      break;
    case 'general_fitness':
    case 'maintenance':
    default:
      delta = 0;
      target = tdee;
      label = 'Energy Equilibrium (Maintenance)';
      break;
  }

  // Safety floor check
  const floor = sex === 'female' ? 1200 : 1500;
  if (target < floor) {
    target = floor;
    label += ` (Clamped to safe metabolic floor: ${floor} kcal)`;
  }

  return {
    target: Math.round(target),
    label,
    delta
  };
}

/**
 * Calculates target macronutrients (Protein, Carbs, Fat, Fiber)
 * Energy densities: Protein: 4 kcal/g, Carbs: 4 kcal/g, Fat: 9 kcal/g
 */
export function calculateMacros(calorieTarget, weightKg, goal) {
  // Protein multiplier in g per kg of bodyweight
  let proteinRatio = 2.0; // default for muscle gain
  if (goal === 'fat_loss') proteinRatio = 2.2;
  else if (goal === 'recomp') proteinRatio = 2.2;
  else if (goal === 'strength') proteinRatio = 2.0;
  else if (goal === 'maintenance' || goal === 'general_fitness') proteinRatio = 1.7;

  let proteinGrams = Math.round(weightKg * proteinRatio);
  let proteinCals = proteinGrams * 4;

  // Fat: 25% of total caloric target (min 0.8g per kg bodyweight for endocrine health)
  let fatCals = Math.round(calorieTarget * 0.25);
  let fatGrams = Math.round(fatCals / 9);
  const minFatGrams = Math.round(weightKg * 0.8);
  if (fatGrams < minFatGrams) {
    fatGrams = minFatGrams;
    fatCals = fatGrams * 9;
  }

  // Carbs: Remaining calories
  let remainingCals = calorieTarget - (proteinCals + fatCals);
  if (remainingCals < 200) {
    remainingCals = 200;
  }
  let carbsGrams = Math.round(remainingCals / 4);

  // Fiber: ~14g per 1000 kcal
  let fiberGrams = Math.round((calorieTarget / 1000) * 14);

  // Recalculate true calories from macros to assure consistency
  const totalMacroCals = (proteinGrams * 4) + (carbsGrams * 4) + (fatGrams * 9);

  return {
    protein: proteinGrams,
    carbs: carbsGrams,
    fat: fatGrams,
    fiber: fiberGrams,
    totalCalories: totalMacroCals
  };
}

/**
 * Calculates Estimated Timeline for weight target
 */
export function calculateTimeline(currentWeight, targetWeight, goal) {
  const diff = targetWeight - currentWeight;
  const absDiff = Math.abs(diff);

  if (absDiff < 0.2) {
    return { text: 'Maintenance Goal (0 kg delta)', weeks: 0 };
  }

  if (goal === 'fat_loss' || diff < 0) {
    // Sustainable fat loss: ~0.45 - 0.6 kg / week
    const weeks = Math.round(absDiff / 0.5);
    return {
      text: `~${weeks}–${weeks + 3} weeks at sustainable rate (~0.5 kg/week)`,
      delta: diff,
      weeks
    };
  } else {
    // Sustainable lean muscle accrual: ~0.25 - 0.35 kg / week for intermediates
    const weeks = Math.round(absDiff / 0.3);
    return {
      text: `~${weeks}–${weeks + 4} weeks at clean hypertrophy rate (~0.3 kg/week)`,
      delta: diff,
      weeks
    };
  }
}

/**
 * Hydration requirement estimate
 * Baseline 35 ml per kg + training workout allowance
 */
export function calculateHydration(weightKg, trainingDays) {
  const baselineMl = weightKg * 35;
  const trainingAddMl = trainingDays >= 3 ? 600 : 350;
  const totalMl = Math.round(baselineMl + trainingAddMl);
  return {
    liters: (totalMl / 1000).toFixed(1),
    totalMl
  };
}

// ============================================================================
// 4. WORKOUT PLAN GENERATOR
// ============================================================================

/**
 * Generates personalized weekly workout split based on days, equipment, and experience
 */
export function generateWorkoutPlan(profile) {
  const days = parseInt(profile.trainingDays, 10);
  const equip = profile.equipment;
  const schedule = [];

  // Helper to pick exercises matching equipment
  function getExercise(primaryId, dumbbellFallback, bodyweightFallback) {
    if (equip === 'bodyweight') {
      return EXERCISE_DATABASE[bodyweightFallback] || EXERCISE_DATABASE.push_ups;
    }
    if (equip === 'dumbbells_only') {
      return EXERCISE_DATABASE[dumbbellFallback] || EXERCISE_DATABASE[primaryId];
    }
    return EXERCISE_DATABASE[primaryId] || EXERCISE_DATABASE[dumbbellFallback];
  }

  // 1-3 Days: Full Body
  if (days <= 3) {
    for (let i = 1; i <= days; i++) {
      const routineName = i === 1 ? 'Full Body A (Chest & Quad Bias)' : (i === 2 ? 'Full Body B (Back & Hams Bias)' : 'Full Body C (Shoulders & Arms)');
      schedule.push({
        dayNumber: i,
        title: `Day ${i}: ${routineName}`,
        focus: 'Compound Full Body Hypertrophy',
        duration: profile.durationMin,
        completed: false,
        exercises: [
          createExerciseInstance(getExercise('barbell_squat', 'goblet_squat', 'bodyweight_squats')),
          createExerciseInstance(getExercise('bench_press', 'db_bench_press', 'push_ups')),
          createExerciseInstance(getExercise('barbell_row', 'db_single_arm_row', 'inverted_row')),
          createExerciseInstance(getExercise('overhead_press', 'db_seated_shoulder_press', 'pike_pushups')),
          createExerciseInstance(getExercise('romanian_deadlift', 'db_rdl', 'glute_bridges')),
          createExerciseInstance(getExercise('plank', 'plank', 'plank'))
        ]
      });
    }
  } 
  // 4 Days: Upper / Lower Split
  else if (days === 4) {
    schedule.push({
      dayNumber: 1,
      title: 'Day 1: Upper Body Strength & Hypertrophy A',
      focus: 'Chest, Upper Back, Shoulders, Triceps',
      duration: profile.durationMin,
      completed: false,
      exercises: [
        createExerciseInstance(getExercise('bench_press', 'db_bench_press', 'push_ups')),
        createExerciseInstance(getExercise('barbell_row', 'db_single_arm_row', 'inverted_row')),
        createExerciseInstance(getExercise('overhead_press', 'db_seated_shoulder_press', 'pike_pushups')),
        createExerciseInstance(getExercise('lat_pulldown', 'pull_ups', 'inverted_row')),
        createExerciseInstance(getExercise('tricep_pushdown', 'overhead_db_tricep_extension', 'diamond_pushups')),
        createExerciseInstance(getExercise('lateral_raises', 'lateral_raises', 'pike_pushups'))
      ]
    });

    schedule.push({
      dayNumber: 2,
      title: 'Day 2: Lower Body & Core Power A',
      focus: 'Quads, Hamstrings, Glutes, Calves',
      duration: profile.durationMin,
      completed: false,
      exercises: [
        createExerciseInstance(getExercise('barbell_squat', 'goblet_squat', 'bodyweight_squats')),
        createExerciseInstance(getExercise('romanian_deadlift', 'db_rdl', 'good_mornings')),
        createExerciseInstance(getExercise('bulgarian_split_squat', 'bulgarian_split_squat', 'walking_lunges')),
        createExerciseInstance(getExercise('leg_curl', 'db_rdl', 'glute_bridges')),
        createExerciseInstance(getExercise('standing_calf_raise', 'standing_calf_raise', 'standing_calf_raise')),
        createExerciseInstance(getExercise('hanging_leg_raises', 'hanging_leg_raises', 'plank'))
      ]
    });

    schedule.push({
      dayNumber: 3,
      title: 'Day 3: Upper Body Hypertrophy & Arms B',
      focus: 'Incline Chest, Lats, Deltoids, Biceps',
      duration: profile.durationMin,
      completed: false,
      exercises: [
        createExerciseInstance(getExercise('incline_db_press', 'incline_db_press', 'push_ups')),
        createExerciseInstance(getExercise('pull_ups', 'db_single_arm_row', 'inverted_row')),
        createExerciseInstance(getExercise('seated_cable_row', 'db_single_arm_row', 'inverted_row')),
        createExerciseInstance(getExercise('lateral_raises', 'lateral_raises', 'pike_pushups')),
        createExerciseInstance(getExercise('barbell_curl', 'db_incline_curl', 'hammer_curls')),
        createExerciseInstance(getExercise('skull_crushers', 'overhead_db_tricep_extension', 'diamond_pushups'))
      ]
    });

    schedule.push({
      dayNumber: 4,
      title: 'Day 4: Lower Body Posterior & Posterior Chain B',
      focus: 'Hamstrings, Glutes, Quads, Trunk Rotation',
      duration: profile.durationMin,
      completed: false,
      exercises: [
        createExerciseInstance(getExercise('leg_press', 'goblet_squat', 'bodyweight_squats')),
        createExerciseInstance(getExercise('romanian_deadlift', 'db_rdl', 'good_mornings')),
        createExerciseInstance(getExercise('walking_lunges', 'walking_lunges', 'bodyweight_squats')),
        createExerciseInstance(getExercise('standing_calf_raise', 'standing_calf_raise', 'standing_calf_raise')),
        createExerciseInstance(getExercise('plank', 'plank', 'plank'))
      ]
    });
  } 
  // 5 or 6 Days: Push / Pull / Legs (PPL)
  else {
    const splitNames = ['Push (Chest, Shoulders, Triceps)', 'Pull (Back, Rear Delts, Biceps)', 'Legs & Core', 'Upper Body Power', 'Lower Body Hypertrophy', 'Arms & Conditioning'];
    for (let i = 1; i <= days; i++) {
      const routineName = splitNames[i - 1] || `Day ${i} Circuit`;
      schedule.push({
        dayNumber: i,
        title: `Day ${i}: ${routineName}`,
        focus: routineName,
        duration: profile.durationMin,
        completed: false,
        exercises: [
          createExerciseInstance(getExercise('bench_press', 'db_bench_press', 'push_ups')),
          createExerciseInstance(getExercise('barbell_row', 'db_single_arm_row', 'inverted_row')),
          createExerciseInstance(getExercise('barbell_squat', 'goblet_squat', 'bodyweight_squats')),
          createExerciseInstance(getExercise('lateral_raises', 'lateral_raises', 'pike_pushups')),
          createExerciseInstance(getExercise('plank', 'plank', 'plank'))
        ]
      });
    }
  }

  return {
    splitName: `${days}-Day ${days === 4 ? 'Upper / Lower' : (days <= 3 ? 'Full Body' : 'Push / Pull / Legs')} Split`,
    days: schedule
  };
}

function createExerciseInstance(ex) {
  return {
    id: ex.id,
    name: ex.name,
    muscle: ex.muscle,
    sets: ex.sets || 3,
    reps: ex.reps || '10-12 reps',
    rest: ex.rest || 75,
    cues: ex.cues,
    alternatives: ex.alternatives || [],
    loggedSets: [
      { setNum: 1, weight: 60, reps: 10, done: false },
      { setNum: 2, weight: 60, reps: 10, done: false },
      { setNum: 3, weight: 60, reps: 10, done: false }
    ]
  };
}

// ============================================================================
// 5. NUTRITION & MEAL PLAN GENERATOR
// ============================================================================

/**
 * Generates initial daily meal template matching target calories and dietary preferences
 */
export function generateMealPlan(profile, macroTargets) {
  const preference = profile.dietPreference; // non_veg, vegetarian, vegan, eggetarian, indian
  const isIndian = preference === 'indian';

  let meals = [];

  if (isIndian) {
    meals = [
      {
        id: 'm1',
        title: 'Breakfast: Power Oats & Protein',
        items: [
          { foodId: 'oats_rolled', name: 'Rolled Oats with Milk', portionGrams: 60, cal: 233, p: 8.0, c: 40.0, f: 4.2, fiber: 6.0 },
          { foodId: 'whey_protein', name: 'Whey Protein Scoop', portionGrams: 32, cal: 120, p: 25.0, c: 2.0, f: 1.0, fiber: 0 },
          { foodId: 'almonds', name: 'Raw Almonds & Walnuts', portionGrams: 20, cal: 117, p: 4.3, c: 4.4, f: 10.1, fiber: 2.5 }
        ]
      },
      {
        id: 'm2',
        title: 'Lunch: Roti, Dal Tadka & Paneer',
        items: [
          { foodId: 'whole_wheat_roti', name: 'Whole Wheat Roti', portionGrams: 70, cal: 190, p: 6.2, c: 37.0, f: 1.8, fiber: 4.5 },
          { foodId: 'dal_tadka', name: 'Yellow Lentil Dal Tadka', portionGrams: 200, cal: 210, p: 12.0, c: 30.0, f: 4.5, fiber: 7.0 },
          { foodId: 'paneer_raw', name: 'Spiced Paneer Tikka / Bhurji', portionGrams: 120, cal: 318, p: 22.0, c: 4.2, f: 25.0, fiber: 0 },
          { foodId: 'curd_dahi', name: 'Fresh Dahi / Curd', portionGrams: 150, cal: 98, p: 5.5, c: 6.8, f: 5.5, fiber: 0 }
        ]
      },
      {
        id: 'm3',
        title: 'Evening Snack: Sprouted Chana & Fruit',
        items: [
          { foodId: 'chana_chickpeas', name: 'Boiled Chana Chaat', portionGrams: 120, cal: 176, p: 8.4, c: 27.2, f: 4.0, fiber: 6.4 },
          { foodId: 'banana', name: 'Fresh Banana', portionGrams: 118, cal: 105, p: 1.3, c: 27.0, f: 0.3, fiber: 3.1 }
        ]
      },
      {
        id: 'm4',
        title: 'Dinner: Basmati Rice, Palak & Soya/Eggs',
        items: [
          { foodId: 'white_basmati_rice', name: 'Cooked Basmati Rice', portionGrams: 150, cal: 195, p: 4.2, c: 42.0, f: 0.6, fiber: 1.0 },
          { foodId: 'soy_chunks', name: 'Soya Chunks Curry', portionGrams: 40, cal: 138, p: 20.8, c: 13.2, f: 0.4, fiber: 5.2 },
          { foodId: 'spinach_cooked', name: 'Palak / Saag Greens', portionGrams: 150, cal: 35, p: 4.5, c: 5.6, f: 0.7, fiber: 3.6 },
          { foodId: 'ghee_pure', name: 'Desi Ghee (topper)', portionGrams: 5, cal: 45, p: 0, c: 0, f: 5.0, fiber: 0 }
        ]
      }
    ];
  } else if (preference === 'vegan') {
    meals = [
      {
        id: 'm1',
        title: 'Breakfast: Oatmeal & Plant Fuel',
        items: [
          { foodId: 'oats_rolled', name: 'Rolled Oats', portionGrams: 75, cal: 291, p: 10.0, c: 50.0, f: 5.2, fiber: 7.5 },
          { foodId: 'peanut_butter', name: 'Natural Peanut Butter', portionGrams: 32, cal: 190, p: 8.0, c: 7.0, f: 16.0, fiber: 2.0 },
          { foodId: 'blueberries', name: 'Blueberries', portionGrams: 100, cal: 57, p: 0.7, c: 14.5, f: 0.3, fiber: 2.4 }
        ]
      },
      {
        id: 'm2',
        title: 'Lunch: Baked Tofu & Quinoa Bowl',
        items: [
          { foodId: 'tofu_firm', name: 'Firm Tofu (Pan-seared)', portionGrams: 200, cal: 166, p: 20.0, c: 3.7, f: 8.7, fiber: 2.0 },
          { foodId: 'quinoa', name: 'Cooked Quinoa', portionGrams: 180, cal: 216, p: 7.8, c: 38.4, f: 3.4, fiber: 5.0 },
          { foodId: 'broccoli_steamed', name: 'Steamed Broccoli', portionGrams: 150, cal: 52, p: 4.2, c: 10.5, f: 0.6, fiber: 3.9 }
        ]
      },
      {
        id: 'm3',
        title: 'Snack: Chickpeas & Roasted Almonds',
        items: [
          { foodId: 'chana_chickpeas', name: 'Roasted Spiced Chickpeas', portionGrams: 150, cal: 220, p: 10.5, c: 34.0, f: 5.0, fiber: 8.0 },
          { foodId: 'almonds', name: 'Raw Almonds', portionGrams: 28, cal: 164, p: 6.0, c: 6.1, f: 14.2, fiber: 3.5 }
        ]
      },
      {
        id: 'm4',
        title: 'Dinner: Soya & Brown Rice Skillet',
        items: [
          { foodId: 'brown_rice', name: 'Brown Rice', portionGrams: 180, cal: 201, p: 4.7, c: 42.1, f: 1.7, fiber: 3.2 },
          { foodId: 'soy_chunks', name: 'Textured Soya Chunks', portionGrams: 50, cal: 172, p: 26.0, c: 16.5, f: 0.5, fiber: 6.5 },
          { foodId: 'avocado', name: 'Fresh Avocado', portionGrams: 75, cal: 120, p: 1.5, c: 6.4, f: 11.0, fiber: 5.0 }
        ]
      }
    ];
  } else {
    // Non-veg / default high-protein optimal split
    meals = [
      {
        id: 'm1',
        title: 'Breakfast: Scrambled Eggs & Oatmeal',
        items: [
          { foodId: 'whole_eggs', name: 'Whole Eggs (Scrambled)', portionGrams: 100, cal: 143, p: 12.6, c: 0.7, f: 9.5, fiber: 0 },
          { foodId: 'egg_whites', name: 'Liquid Egg Whites', portionGrams: 120, cal: 62, p: 13.2, c: 0.9, f: 0.2, fiber: 0 },
          { foodId: 'oats_rolled', name: 'Rolled Oats with Cinnamon', portionGrams: 60, cal: 233, p: 8.0, c: 40.0, f: 4.2, fiber: 6.0 },
          { foodId: 'blueberries', name: 'Fresh Blueberries', portionGrams: 80, cal: 46, p: 0.6, c: 11.6, f: 0.2, fiber: 1.9 }
        ]
      },
      {
        id: 'm2',
        title: 'Lunch: Grilled Chicken & Brown Rice',
        items: [
          { foodId: 'chicken_breast', name: 'Grilled Chicken Breast', portionGrams: 175, cal: 288, p: 54.2, c: 0, f: 6.3, fiber: 0 },
          { foodId: 'brown_rice', name: 'Steamed Brown Rice', portionGrams: 180, cal: 201, p: 4.7, c: 42.1, f: 1.7, fiber: 3.2 },
          { foodId: 'broccoli_steamed', name: 'Steamed Broccoli with Lemon', portionGrams: 150, cal: 52, p: 4.2, c: 10.5, f: 0.6, fiber: 3.9 },
          { foodId: 'olive_oil', name: 'Extra Virgin Olive Oil (drizzle)', portionGrams: 10, cal: 85, p: 0, c: 0, f: 9.6, fiber: 0 }
        ]
      },
      {
        id: 'm3',
        title: 'Snack: Whey Protein & Greek Yogurt',
        items: [
          { foodId: 'whey_protein', name: 'Whey Protein Isolate', portionGrams: 32, cal: 120, p: 25.0, c: 2.0, f: 1.0, fiber: 0 },
          { foodId: 'greek_yogurt', name: 'Greek Yogurt (0% Plain)', portionGrams: 180, cal: 117, p: 19.8, c: 7.2, f: 0.7, fiber: 0 },
          { foodId: 'almonds', name: 'Whole Raw Almonds', portionGrams: 20, cal: 117, p: 4.3, c: 4.4, f: 10.1, fiber: 2.5 }
        ]
      },
      {
        id: 'm4',
        title: 'Dinner: Baked Salmon & Sweet Potato',
        items: [
          { foodId: 'salmon_fillet', name: 'Baked Atlantic Salmon', portionGrams: 150, cal: 312, p: 34.0, c: 0, f: 19.5, fiber: 0 },
          { foodId: 'sweet_potato', name: 'Roasted Sweet Potato Wedges', portionGrams: 200, cal: 180, p: 4.0, c: 41.0, f: 0.3, fiber: 6.6 },
          { foodId: 'spinach_cooked', name: 'Sautéed Garlic Spinach', portionGrams: 150, cal: 35, p: 4.5, c: 5.6, f: 0.7, fiber: 3.6 }
        ]
      }
    ];
  }

  return {
    preference,
    meals
  };
}

/**
 * Calculates current total nutrition of a meal plan
 */
export function calculateMealNutrition(mealPlan) {
  let totalCal = 0;
  let totalP = 0;
  let totalC = 0;
  let totalF = 0;
  let totalFiber = 0;

  mealPlan.meals.forEach(m => {
    let mealCal = 0;
    let mealP = 0;
    let mealC = 0;
    let mealF = 0;
    let mealFiber = 0;

    m.items.forEach(item => {
      mealCal += item.cal;
      mealP += item.p;
      mealC += item.c;
      mealF += item.f;
      mealFiber += (item.fiber || 0);
    });

    m.subtotal = {
      cal: Math.round(mealCal),
      p: parseFloat(mealP.toFixed(1)),
      c: parseFloat(mealC.toFixed(1)),
      f: parseFloat(mealF.toFixed(1)),
      fiber: parseFloat(mealFiber.toFixed(1))
    };

    totalCal += mealCal;
    totalP += mealP;
    totalC += mealC;
    totalF += mealF;
    totalFiber += mealFiber;
  });

  return {
    totalCal: Math.round(totalCal),
    totalP: Math.round(totalP),
    totalC: Math.round(totalC),
    totalF: Math.round(totalF),
    totalFiber: Math.round(totalFiber)
  };
}

// ============================================================================
// 6. PERSISTENCE & LOCALSTORAGE MANAGEMENT
// ============================================================================

export function saveUserProfile(profile) {
  localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
}

export function loadUserProfile() {
  const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Failed to parse user profile', e);
    }
  }
  return DEFAULT_PROFILE;
}

export function saveWorkoutPlan(plan) {
  localStorage.setItem(STORAGE_KEYS.WORKOUT_PLAN, JSON.stringify(plan));
}

export function loadWorkoutPlan() {
  const data = localStorage.getItem(STORAGE_KEYS.WORKOUT_PLAN);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Failed to parse workout plan', e);
    }
  }
  return null;
}

export function saveMealPlan(plan) {
  localStorage.setItem(STORAGE_KEYS.MEAL_PLAN, JSON.stringify(plan));
}

export function loadMealPlan() {
  const data = localStorage.getItem(STORAGE_KEYS.MEAL_PLAN);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Failed to parse meal plan', e);
    }
  }
  return null;
}

export function saveProgressHistory(history) {
  localStorage.setItem(STORAGE_KEYS.PROGRESS_HISTORY, JSON.stringify(history));
}

export function loadProgressHistory() {
  const data = localStorage.getItem(STORAGE_KEYS.PROGRESS_HISTORY);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Failed to parse progress history', e);
    }
  }
  return DEFAULT_PROGRESS_HISTORY;
}

export function saveHabits(habits) {
  localStorage.setItem(STORAGE_KEYS.HABITS, JSON.stringify(habits));
}

export function loadHabits() {
  const data = localStorage.getItem(STORAGE_KEYS.HABITS);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Failed to parse habits', e);
    }
  }
  return currentHabits;
}

export function saveSettings(settings) {
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
}

export function loadSettings() {
  const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Failed to parse settings', e);
    }
  }
  return currentSettings;
}

export function exportUserData() {
  const exportPayload = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    profile: currentUserProfile,
    workoutPlan: currentWorkoutPlan,
    mealPlan: currentMealPlan,
    progressHistory: currentProgressHistory,
    habits: currentHabits,
    settings: currentSettings
  };

  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `FitAlways_Backup_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Profile and fitness history exported successfully.');
}

export function importUserData(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    if (!data.profile) {
      throw new Error('Invalid JSON backup file: Missing profile payload.');
    }
    currentUserProfile = data.profile;
    currentWorkoutPlan = data.workoutPlan || generateWorkoutPlan(currentUserProfile);
    currentMealPlan = data.mealPlan || generateMealPlan(currentUserProfile, calculateMacros(calculateCalorieTarget(calculateTDEE(calculateBMR(currentUserProfile.weightKg, currentUserProfile.heightCm, currentUserProfile.age, currentUserProfile.sex), currentUserProfile.activityMultiplier), currentUserProfile.goal, currentUserProfile.sex).target, currentUserProfile.weightKg, currentUserProfile.goal));
    currentProgressHistory = data.progressHistory || DEFAULT_PROGRESS_HISTORY;
    currentHabits = data.habits || currentHabits;
    currentSettings = data.settings || currentSettings;

    saveUserProfile(currentUserProfile);
    saveWorkoutPlan(currentWorkoutPlan);
    saveMealPlan(currentMealPlan);
    saveProgressHistory(currentProgressHistory);
    saveHabits(currentHabits);
    saveSettings(currentSettings);

    syncAllViews();
    showToast('Data imported and restored successfully!');
  } catch (err) {
    alert('Import failed: ' + err.message);
  }
}

// ============================================================================
// 7. CHART.JS VISUALIZATION SUITE
// ============================================================================

export function initOrUpdateCharts() {
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js CDN not ready yet.');
    return;
  }

  const isLight = document.documentElement.classList.contains('light');
  const textColor = isLight ? '#475569' : '#94a3b8';
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.07)';

  // Chart 1: Weight History
  const weightCtx = document.getElementById('chart-weight-history');
  if (weightCtx) {
    const labels = currentProgressHistory.map(entry => entry.date.slice(5));
    const weights = currentProgressHistory.map(entry => entry.weight);
    const targetWeights = Array(currentProgressHistory.length).fill(currentUserProfile.targetWeightKg);

    if (chartWeight) chartWeight.destroy();

    chartWeight = new Chart(weightCtx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Actual Weight (kg)',
            data: weights,
            borderColor: '#fbbf24',
            backgroundColor: 'rgba(251, 191, 36, 0.12)',
            tension: 0.3,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: '#fbbf24'
          },
          {
            label: 'Target Weight (kg)',
            data: targetWeights,
            borderColor: '#ef4444',
            borderDash: [5, 5],
            fill: false,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: textColor, boxWidth: 12 } }
        },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor }, grid: { color: gridColor } }
        }
      }
    });
  }

  // Chart 2: Daily Calories History
  const calCtx = document.getElementById('chart-calories-history');
  if (calCtx) {
    const labels = currentProgressHistory.map(entry => entry.date.slice(5));
    const calories = currentProgressHistory.map(entry => entry.calories);
    const bmr = calculateBMR(currentUserProfile.weightKg, currentUserProfile.heightCm, currentUserProfile.age, currentUserProfile.sex);
    const tdee = calculateTDEE(bmr, currentUserProfile.activityMultiplier);
    const target = calculateCalorieTarget(tdee, currentUserProfile.goal, currentUserProfile.sex).target;
    const targetArray = Array(currentProgressHistory.length).fill(target);

    if (chartCalories) chartCalories.destroy();

    chartCalories = new Chart(calCtx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Logged Calories (kcal)',
            data: calories,
            backgroundColor: '#ef4444',
            borderRadius: 4
          },
          {
            type: 'line',
            label: 'Target (kcal)',
            data: targetArray,
            borderColor: '#fbbf24',
            borderDash: [4, 4],
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: textColor, boxWidth: 12 } }
        },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor }, grid: { color: gridColor } }
        }
      }
    });
  }

  // Chart 3: Macronutrient Target Donut
  const donutCtx = document.getElementById('chart-macro-donut');
  if (donutCtx) {
    const bmr = calculateBMR(currentUserProfile.weightKg, currentUserProfile.heightCm, currentUserProfile.age, currentUserProfile.sex);
    const tdee = calculateTDEE(bmr, currentUserProfile.activityMultiplier);
    const calTarget = calculateCalorieTarget(tdee, currentUserProfile.goal, currentUserProfile.sex).target;
    const macros = calculateMacros(calTarget, currentUserProfile.weightKg, currentUserProfile.goal);

    if (chartDonut) chartDonut.destroy();

    chartDonut = new Chart(donutCtx, {
      type: 'doughnut',
      data: {
        labels: ['Protein (g)', 'Carbs (g)', 'Fat (g)'],
        datasets: [{
          data: [macros.protein * 4, macros.carbs * 4, macros.fat * 9],
          backgroundColor: ['#fbbf24', '#ef4444', '#b45309'],
          borderColor: isLight ? '#ffffff' : '#0f0f14',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { color: textColor, boxWidth: 12 } }
        },
        cutout: '68%'
      }
    });
  }

  // Chart 4: Strength Progression
  const strengthCtx = document.getElementById('chart-strength-history');
  if (strengthCtx) {
    const selector = document.getElementById('chart-lift-selector');
    const liftKey = selector ? selector.value : 'bench';
    
    // Sample lift weights for demonstration
    const baseWeight = liftKey === 'bench' ? 70 : (liftKey === 'squat' ? 95 : (liftKey === 'deadlift' ? 120 : 45));
    const strengthData = [baseWeight - 5, baseWeight - 2.5, baseWeight, baseWeight + 2.5, baseWeight + 5];

    if (chartStrength) chartStrength.destroy();

    chartStrength = new Chart(strengthCtx, {
      type: 'line',
      data: {
        labels: currentProgressHistory.map(entry => entry.date.slice(5)),
        datasets: [{
          label: 'Working Top Set (kg)',
          data: strengthData,
          borderColor: '#fbbf24',
          tension: 0.2,
          pointRadius: 4,
          pointBackgroundColor: '#ef4444'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: textColor, boxWidth: 12 } }
        },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor }, grid: { color: gridColor } }
        }
      }
    });
  }
}

// ============================================================================
// 8. AUDIO BEEP ENGINE (Rest Interval Alarm)
// ============================================================================

function playTimerBeep() {
  if (!currentSettings.timerAudio) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 pitch
    osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  } catch (err) {
    console.warn('AudioContext prevented by browser autoplay policy until user gesture', err);
  }
}

// ============================================================================
// 9. UI RENDERING ENGINES
// ============================================================================

/**
 * Syncs and updates all views, tabs, forms, and calculators
 */
export function syncAllViews() {
  const p = currentUserProfile;

  // 1. Math calculations
  const bmiInfo = calculateBMI(p.weightKg, p.heightCm);
  const bmr = calculateBMR(p.weightKg, p.heightCm, p.age, p.sex);
  const tdee = calculateTDEE(bmr, p.activityMultiplier);
  const targetObj = calculateCalorieTarget(tdee, p.goal, p.sex);
  const targetCalories = targetObj.target;
  const macros = calculateMacros(targetCalories, p.weightKg, p.goal);
  const timeline = calculateTimeline(p.weightKg, p.targetWeightKg, p.goal);
  const hydration = calculateHydration(p.weightKg, p.trainingDays);

  // 2. Dashboard KPIs
  document.getElementById('dash-user-name').textContent = p.name || 'Athlete';
  document.getElementById('dash-meta-goal').textContent = formatGoalName(p.goal);
  document.getElementById('dash-meta-split').textContent = currentWorkoutPlan ? currentWorkoutPlan.splitName : `${p.trainingDays}-Day Split`;
  document.getElementById('dash-meta-cal').textContent = `Target: ${targetCalories.toLocaleString()} kcal`;

  document.getElementById('dash-kpi-calories').innerHTML = `${targetCalories.toLocaleString()} <span class="kpi-unit">kcal</span>`;
  document.getElementById('dash-cal-tag').textContent = targetObj.delta > 0 ? 'Surplus' : (targetObj.delta < 0 ? 'Deficit' : 'Balanced');
  document.getElementById('dash-kpi-cal-sub').textContent = `TDEE: ${tdee.toLocaleString()} kcal · ${targetObj.delta >= 0 ? '+' : ''}${targetObj.delta} kcal`;

  document.getElementById('dash-kpi-bmi').textContent = bmiInfo.value;
  document.getElementById('dash-bmi-tag').textContent = bmiInfo.category;
  document.getElementById('dash-kpi-bmi-sub').textContent = `Height: ${p.heightCm} cm · Weight: ${p.weightKg} kg`;

  const weightDiff = (p.targetWeightKg - p.weightKg).toFixed(1);
  document.getElementById('dash-weight-tag').textContent = `${weightDiff > 0 ? '+' : ''}${weightDiff} kg`;
  document.getElementById('dash-kpi-weight').innerHTML = `${p.weightKg} <span class="kpi-unit">→ ${p.targetWeightKg} kg</span>`;
  document.getElementById('dash-kpi-timeline').textContent = timeline.text;

  document.getElementById('dash-kpi-tdee').innerHTML = `${tdee.toLocaleString()} <span class="kpi-unit">TDEE</span>`;
  document.getElementById('dash-kpi-bmr-sub').textContent = `BMR: ${bmr.toLocaleString()} kcal (Mifflin–St Jeor)`;

  // Dashboard Macro Bars
  const nutriStats = currentMealPlan ? calculateMealNutrition(currentMealPlan) : { totalCal: targetCalories, totalP: macros.protein, totalC: macros.carbs, totalF: macros.fat };
  document.getElementById('dash-macro-protein-text').textContent = `${nutriStats.totalP}g / ${macros.protein}g`;
  document.getElementById('dash-macro-protein-bar').style.width = `${Math.min(100, Math.round((nutriStats.totalP / macros.protein) * 100))}%`;

  document.getElementById('dash-macro-carbs-text').textContent = `${nutriStats.totalC}g / ${macros.carbs}g`;
  document.getElementById('dash-macro-carbs-bar').style.width = `${Math.min(100, Math.round((nutriStats.totalC / macros.carbs) * 100))}%`;

  document.getElementById('dash-macro-fat-text').textContent = `${nutriStats.totalF}g / ${macros.fat}g`;
  document.getElementById('dash-macro-fat-bar').style.width = `${Math.min(100, Math.round((nutriStats.totalF / macros.fat) * 100))}%`;

  // Habits: Water & Sleep
  document.getElementById('dash-water-count').textContent = `${currentHabits.waterLogged.toLocaleString()} / ${hydration.totalMl.toLocaleString()} ml`;
  document.getElementById('dash-water-bar').style.width = `${Math.min(100, Math.round((currentHabits.waterLogged / hydration.totalMl) * 100))}%`;
  document.getElementById('dash-sleep-count').textContent = `${currentHabits.sleepLogged} hrs / ${p.sleepHours} target`;
  document.getElementById('dash-sleep-input').value = currentHabits.sleepLogged;

  // Scientific Calculator Panel
  document.getElementById('res-bmr').textContent = `${bmr.toLocaleString()} kcal/day`;
  document.getElementById('calc-bmr-formula-text').textContent = `Mifflin-St Jeor: 10×${p.weightKg} + 6.25×${p.heightCm} - 5×${p.age} ${p.sex === 'female' ? '- 161' : '+ 5'}`;
  document.getElementById('res-tdee').textContent = `${tdee.toLocaleString()} kcal/day`;
  document.getElementById('calc-tdee-formula-text').textContent = `${bmr.toLocaleString()} BMR × ${p.activityMultiplier} Activity Multiplier`;
  document.getElementById('res-calorie-target').textContent = `${targetCalories.toLocaleString()} kcal/day`;
  document.getElementById('calc-target-formula-text').textContent = targetObj.label;
  document.getElementById('res-bmi').textContent = `${bmiInfo.value} (${bmiInfo.category})`;
  document.getElementById('calc-bmi-formula-text').textContent = `BMI = ${p.weightKg} kg / (${(p.heightCm / 100).toFixed(2)} m)²`;

  if (p.bodyFatPct) {
    const lbm = (p.weightKg * (1 - p.bodyFatPct / 100)).toFixed(1);
    const fatMass = (p.weightKg * (p.bodyFatPct / 100)).toFixed(1);
    document.getElementById('res-lbm').textContent = `${lbm} kg`;
    document.getElementById('res-fatmass').textContent = `${fatMass} kg`;
    document.getElementById('res-bf').textContent = `${p.bodyFatPct}%`;
  } else {
    document.getElementById('res-lbm').textContent = 'Not specified';
    document.getElementById('res-fatmass').textContent = 'Not specified';
    document.getElementById('res-bf').textContent = 'Not provided (optional)';
  }

  document.getElementById('res-weight-delta').textContent = `${Math.abs(weightDiff)} kg ${weightDiff >= 0 ? 'to gain' : 'to lose'}`;
  document.getElementById('res-timeline').textContent = timeline.text;
  document.getElementById('res-hydration').textContent = `${hydration.liters} Liters/day (${hydration.totalMl} ml)`;
  document.getElementById('res-rest-days').textContent = `${7 - p.trainingDays} Rest Days / week`;
  document.getElementById('res-volume-desc').textContent = `${p.experience.toUpperCase()}: 12–16 sets / muscle group / week`;

  // Sync Input Form Controls
  syncProfileFormInputs();

  // Render Sub-Views
  renderWorkoutPlannerView();
  renderNutritionPlannerView();
  renderProgressTrackerView();
  initOrUpdateCharts();
}

function syncProfileFormInputs() {
  const p = currentUserProfile;
  const nameInput = document.getElementById('input-name');
  if (nameInput) nameInput.value = p.name;

  const ageInput = document.getElementById('input-age');
  if (ageInput) ageInput.value = p.age;

  const sexInput = document.getElementById('input-sex');
  if (sexInput) sexInput.value = p.sex;

  const hCmInput = document.getElementById('input-height-cm');
  if (hCmInput) hCmInput.value = p.heightCm;

  const wKgInput = document.getElementById('input-weight-kg');
  if (wKgInput) wKgInput.value = p.weightKg;

  const twKgInput = document.getElementById('input-target-weight-kg');
  if (twKgInput) twKgInput.value = p.targetWeightKg;

  const bfInput = document.getElementById('input-bodyfat');
  if (bfInput) bfInput.value = p.bodyFatPct || '';

  const goalInput = document.getElementById('input-goal');
  if (goalInput) goalInput.value = p.goal;

  const expInput = document.getElementById('input-experience');
  if (expInput) expInput.value = p.experience;

  const daysInput = document.getElementById('input-days');
  if (daysInput) daysInput.value = p.trainingDays;

  const durInput = document.getElementById('input-duration');
  if (durInput) durInput.value = p.durationMin;

  const actInput = document.getElementById('input-activity');
  if (actInput) actInput.value = p.activityMultiplier;

  const locInput = document.getElementById('input-location');
  if (locInput) locInput.value = p.location;

  const equipInput = document.getElementById('input-equipment');
  if (equipInput) equipInput.value = p.equipment;

  const dietInput = document.getElementById('input-diet');
  if (dietInput) dietInput.value = p.dietPreference;

  const allInput = document.getElementById('input-allergies');
  if (allInput) allInput.value = p.allergies || '';

  const mealsInput = document.getElementById('input-meals');
  if (mealsInput) mealsInput.value = p.mealsPerDay;

  const sleepInput = document.getElementById('input-sleep');
  if (sleepInput) sleepInput.value = p.sleepHours;

  const injInput = document.getElementById('input-injuries');
  if (injInput) injInput.value = p.injuries || '';
}

function formatGoalName(goal) {
  const map = {
    fat_loss: 'Fat Loss',
    muscle_gain: 'Muscle Gain',
    recomp: 'Body Recomposition',
    strength: 'Strength Building',
    general_fitness: 'General Fitness',
    maintenance: 'Maintenance'
  };
  return map[goal] || goal;
}

// ============================================================================
// 10. WORKOUT PLANNER VIEW & INTERACTION
// ============================================================================

let activeWorkoutDayIndex = 0;

export function renderWorkoutPlannerView() {
  if (!currentWorkoutPlan || !currentWorkoutPlan.days || currentWorkoutPlan.days.length === 0) {
    currentWorkoutPlan = generateWorkoutPlan(currentUserProfile);
    saveWorkoutPlan(currentWorkoutPlan);
  }

  const plan = currentWorkoutPlan;
  document.getElementById('workout-split-tag').textContent = plan.splitName;
  document.getElementById('workout-plan-title').textContent = `${currentUserProfile.name}'s ${plan.splitName}`;

  // Render Day Tabs
  const dayTabsContainer = document.getElementById('workout-day-selector');
  dayTabsContainer.innerHTML = '';

  let completedCount = 0;
  plan.days.forEach((day, index) => {
    if (day.completed) completedCount++;

    const btn = document.createElement('button');
    btn.className = `day-tab-btn ${index === activeWorkoutDayIndex ? 'active' : ''}`;
    btn.innerHTML = `
      <span class="day-tab-num">Day ${day.dayNumber} ${day.completed ? '✓' : ''}</span>
      <span class="day-tab-title">${day.title.split(':')[1] || day.title}</span>
    `;
    btn.addEventListener('click', () => {
      activeWorkoutDayIndex = index;
      renderWorkoutPlannerView();
    });
    dayTabsContainer.appendChild(btn);
  });

  // Weekly Completion % on dashboard
  const pct = Math.round((completedCount / plan.days.length) * 100);
  const weeklyCompEl = document.getElementById('dash-weekly-completion');
  if (weeklyCompEl) {
    weeklyCompEl.textContent = `${pct}% (${completedCount} of ${plan.days.length} done)`;
  }

  // Active Day Details
  const activeDay = plan.days[activeWorkoutDayIndex];
  if (!activeDay) return;

  document.getElementById('active-day-title').textContent = activeDay.title;
  document.getElementById('active-day-focus').textContent = activeDay.focus;
  document.getElementById('active-day-duration').textContent = `Est. ${activeDay.duration} min`;
  
  let totalSets = 0;
  activeDay.exercises.forEach(ex => totalSets += (ex.loggedSets ? ex.loggedSets.length : 3));
  document.getElementById('active-day-sets-total').textContent = `${totalSets} Working Sets`;

  const statusPill = document.getElementById('active-day-status-pill');
  if (activeDay.completed) {
    statusPill.textContent = 'Completed ✓';
    statusPill.className = 'completion-pill completed';
  } else {
    statusPill.textContent = 'Scheduled';
    statusPill.className = 'completion-pill';
  }

  // Render Exercises List
  const exercisesContainer = document.getElementById('exercises-list-stack');
  exercisesContainer.innerHTML = '';

  // Render Dashboard Preview of today's workout
  const dashExercisesContainer = document.getElementById('dash-today-exercises');
  if (dashExercisesContainer) {
    dashExercisesContainer.innerHTML = '';
    activeDay.exercises.slice(0, 4).forEach(ex => {
      const row = document.createElement('div');
      row.className = 'dash-exercise-row';
      row.innerHTML = `
        <div>
          <span class="font-semibold">${ex.name}</span>
          <span class="text-xs text-muted block">${ex.muscle}</span>
        </div>
        <span class="text-xs tabular-nums">${ex.sets} sets × ${ex.reps}</span>
      `;
      dashExercisesContainer.appendChild(row);
    });
  }

  activeDay.exercises.forEach((ex, exIndex) => {
    const card = document.createElement('div');
    card.className = 'exercise-card';

    let setRowsHtml = '';
    ex.loggedSets.forEach((set, sIndex) => {
      setRowsHtml += `
        <tr>
          <td class="set-num">Set ${set.setNum}</td>
          <td>
            <input type="number" class="set-input set-weight-input" data-ex="${exIndex}" data-set="${sIndex}" value="${set.weight}" min="0" max="500" step="0.5" />
            <span class="text-xs text-muted">kg</span>
          </td>
          <td>
            <input type="number" class="set-input set-reps-input" data-ex="${exIndex}" data-set="${sIndex}" value="${set.reps}" min="1" max="100" />
            <span class="text-xs text-muted">reps</span>
          </td>
          <td class="text-right">
            <button class="set-check-btn ${set.done ? 'checked' : ''}" data-ex="${exIndex}" data-set="${sIndex}" title="Toggle Done & Start Rest">
              ${set.done ? '✓' : '○'}
            </button>
          </td>
        </tr>
      `;
    });

    card.innerHTML = `
      <div class="exercise-header-row">
        <div>
          <h3 class="exercise-title">${ex.name}</h3>
          <div class="exercise-meta-text">
            <span>${ex.muscle}</span>
            <span class="meta-dot">·</span>
            <span>Target: ${ex.sets} sets × ${ex.reps}</span>
            <span class="meta-dot">·</span>
            <span>Rest: ${ex.rest}s</span>
          </div>
        </div>
        <div class="exercise-actions">
          <button class="btn btn-subtle btn-xs btn-swap-exercise" data-ex="${exIndex}">
            Swap Alternative
          </button>
        </div>
      </div>
      <div class="exercise-instructions">
        <strong>Form Cue:</strong> ${ex.cues}
      </div>
      <table class="set-table">
        <thead>
          <tr>
            <th>Set</th>
            <th>Weight</th>
            <th>Reps</th>
            <th class="text-right">Completed</th>
          </tr>
        </thead>
        <tbody>
          ${setRowsHtml}
        </tbody>
      </table>
    `;

    exercisesContainer.appendChild(card);
  });

  // Attach set listeners
  exercisesContainer.querySelectorAll('.set-weight-input').forEach(input => {
    input.addEventListener('change', (e) => {
      const exIdx = parseInt(e.target.dataset.ex, 10);
      const setIdx = parseInt(e.target.dataset.set, 10);
      activeDay.exercises[exIdx].loggedSets[setIdx].weight = parseFloat(e.target.value) || 0;
      saveWorkoutPlan(currentWorkoutPlan);
    });
  });

  exercisesContainer.querySelectorAll('.set-reps-input').forEach(input => {
    input.addEventListener('change', (e) => {
      const exIdx = parseInt(e.target.dataset.ex, 10);
      const setIdx = parseInt(e.target.dataset.set, 10);
      activeDay.exercises[exIdx].loggedSets[setIdx].reps = parseInt(e.target.value, 10) || 0;
      saveWorkoutPlan(currentWorkoutPlan);
    });
  });

  exercisesContainer.querySelectorAll('.set-check-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const exIdx = parseInt(btn.dataset.ex, 10);
      const setIdx = parseInt(btn.dataset.set, 10);
      const setObj = activeDay.exercises[exIdx].loggedSets[setIdx];
      setObj.done = !setObj.done;
      saveWorkoutPlan(currentWorkoutPlan);

      if (setObj.done) {
        // Trigger rest interval countdown!
        const restSec = activeDay.exercises[exIdx].rest || 90;
        startRestTimer(restSec);
      }
      renderWorkoutPlannerView();
    });
  });

  exercisesContainer.querySelectorAll('.btn-swap-exercise').forEach(btn => {
    btn.addEventListener('click', () => {
      const exIdx = parseInt(btn.dataset.ex, 10);
      openExerciseSwapModal(exIdx);
    });
  });
}

function openExerciseSwapModal(exIndex) {
  const activeDay = currentWorkoutPlan.days[activeWorkoutDayIndex];
  const currentEx = activeDay.exercises[exIndex];
  const modal = document.getElementById('modal-swap-exercise');
  document.getElementById('swap-modal-current').textContent = `Current Exercise: ${currentEx.name}`;

  const container = document.getElementById('swap-alternatives-container');
  container.innerHTML = '';

  const altIds = currentEx.alternatives || [];
  if (altIds.length === 0) {
    container.innerHTML = '<p class="text-sm text-muted">No direct alternatives registered for this movement.</p>';
  } else {
    altIds.forEach(id => {
      const alt = EXERCISE_DATABASE[id];
      if (!alt) return;
      const item = document.createElement('div');
      item.className = 'food-select-item';
      item.innerHTML = `
        <div>
          <strong class="text-sm block">${alt.name}</strong>
          <span class="text-xs text-muted">${alt.muscle} · ${alt.cues.slice(0, 60)}...</span>
        </div>
        <button class="btn btn-secondary btn-xs">Select</button>
      `;
      item.addEventListener('click', () => {
        activeDay.exercises[exIndex] = createExerciseInstance(alt);
        saveWorkoutPlan(currentWorkoutPlan);
        closeModal('modal-swap-exercise');
        renderWorkoutPlannerView();
        showToast(`Swapped to ${alt.name}`);
      });
      container.appendChild(item);
    });
  }

  modal.classList.remove('hidden');
}

// ============================================================================
// 11. NUTRITION & MEAL PLANNER VIEW & INTERACTION
// ============================================================================

export function renderNutritionPlannerView() {
  const p = currentUserProfile;
  const bmr = calculateBMR(p.weightKg, p.heightCm, p.age, p.sex);
  const tdee = calculateTDEE(bmr, p.activityMultiplier);
  const targetCalories = calculateCalorieTarget(tdee, p.goal, p.sex).target;
  const macroTargets = calculateMacros(targetCalories, p.weightKg, p.goal);

  if (!currentMealPlan || !currentMealPlan.meals) {
    currentMealPlan = generateMealPlan(p, macroTargets);
    saveMealPlan(currentMealPlan);
  }

  const totals = calculateMealNutrition(currentMealPlan);

  // Update Summary Banner
  document.getElementById('nutri-total-calories').textContent = totals.totalCal.toLocaleString();
  document.getElementById('nutri-target-calories').textContent = targetCalories.toLocaleString();
  const calDelta = totals.totalCal - targetCalories;
  const calDeltaEl = document.getElementById('nutri-cal-delta');
  calDeltaEl.textContent = `${calDelta >= 0 ? '+' : ''}${calDelta} kcal ${Math.abs(calDelta) < 50 ? '(On Target)' : (calDelta > 0 ? 'Surplus' : 'Deficit')}`;

  document.getElementById('nutri-total-protein').textContent = `${totals.totalP}g`;
  document.getElementById('nutri-target-protein').textContent = `${macroTargets.protein}g`;
  const pDelta = totals.totalP - macroTargets.protein;
  document.getElementById('nutri-protein-delta').textContent = `${pDelta >= 0 ? '+' : ''}${pDelta}g`;

  document.getElementById('nutri-total-carbs').textContent = `${totals.totalC}g`;
  document.getElementById('nutri-target-carbs').textContent = `${macroTargets.carbs}g`;
  const cDelta = totals.totalC - macroTargets.carbs;
  document.getElementById('nutri-carbs-delta').textContent = `${cDelta >= 0 ? '+' : ''}${cDelta}g`;

  document.getElementById('nutri-total-fat').textContent = `${totals.totalF}g`;
  document.getElementById('nutri-target-fat').textContent = `${macroTargets.fat}g`;
  const fDelta = totals.totalF - macroTargets.fat;
  document.getElementById('nutri-fat-delta').textContent = `${fDelta >= 0 ? '+' : ''}${fDelta}g`;

  document.getElementById('nutri-total-fiber').textContent = `${totals.totalFiber}g`;

  // Render Meal Cards
  const mealContainer = document.getElementById('meal-plan-container');
  mealContainer.innerHTML = '';

  currentMealPlan.meals.forEach((meal, mealIdx) => {
    const card = document.createElement('div');
    card.className = 'meal-card';

    let itemsHtml = '';
    meal.items.forEach((item, itemIdx) => {
      itemsHtml += `
        <tr>
          <td>
            <strong>${item.name}</strong>
          </td>
          <td>
            <div class="portion-stepper">
              <button class="step-btn btn-portion-dec" data-m="${mealIdx}" data-i="${itemIdx}">-</button>
              <input type="number" class="step-input portion-input" data-m="${mealIdx}" data-i="${itemIdx}" value="${item.portionGrams}" min="5" max="1000" step="5" />
              <button class="step-btn btn-portion-inc" data-m="${mealIdx}" data-i="${itemIdx}">+</button>
              <span class="text-xs text-muted">g</span>
            </div>
          </td>
          <td class="tabular-nums font-semibold">${item.cal}</td>
          <td class="tabular-nums">${item.p}g</td>
          <td class="tabular-nums">${item.c}g</td>
          <td class="tabular-nums">${item.f}g</td>
          <td class="text-right">
            <button class="btn btn-subtle btn-xs btn-remove-food" data-m="${mealIdx}" data-i="${itemIdx}" title="Remove item">✕</button>
          </td>
        </tr>
      `;
    });

    card.innerHTML = `
      <div class="meal-header">
        <h3 class="meal-title">${meal.title}</h3>
        <div class="meal-subtotal tabular-nums">
          Subtotal: <strong>${meal.subtotal.cal} kcal</strong> · P: ${meal.subtotal.p}g · C: ${meal.subtotal.c}g · F: ${meal.subtotal.f}g
        </div>
      </div>
      <table class="food-items-table">
        <thead>
          <tr>
            <th>Food Item</th>
            <th>Portion</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Carbs</th>
            <th>Fats</th>
            <th class="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>
      <div class="meal-card-footer">
        <button class="btn btn-subtle btn-xs btn-add-food-to-meal" data-m="${mealIdx}">+ Add Food to ${meal.title.split(':')[0]}</button>
      </div>
    `;

    mealContainer.appendChild(card);
  });

  // Attach Portion Controls Listeners
  mealContainer.querySelectorAll('.btn-portion-dec').forEach(btn => {
    btn.addEventListener('click', () => {
      const mIdx = parseInt(btn.dataset.m, 10);
      const iIdx = parseInt(btn.dataset.i, 10);
      adjustFoodPortion(mIdx, iIdx, -10);
    });
  });

  mealContainer.querySelectorAll('.btn-portion-inc').forEach(btn => {
    btn.addEventListener('click', () => {
      const mIdx = parseInt(btn.dataset.m, 10);
      const iIdx = parseInt(btn.dataset.i, 10);
      adjustFoodPortion(mIdx, iIdx, 10);
    });
  });

  mealContainer.querySelectorAll('.portion-input').forEach(input => {
    input.addEventListener('change', (e) => {
      const mIdx = parseInt(e.target.dataset.m, 10);
      const iIdx = parseInt(e.target.dataset.i, 10);
      const newGrams = parseInt(e.target.value, 10) || 50;
      setFoodPortion(mIdx, iIdx, newGrams);
    });
  });

  mealContainer.querySelectorAll('.btn-remove-food').forEach(btn => {
    btn.addEventListener('click', () => {
      const mIdx = parseInt(btn.dataset.m, 10);
      const iIdx = parseInt(btn.dataset.i, 10);
      currentMealPlan.meals[mIdx].items.splice(iIdx, 1);
      saveMealPlan(currentMealPlan);
      renderNutritionPlannerView();
    });
  });

  mealContainer.querySelectorAll('.btn-add-food-to-meal').forEach(btn => {
    btn.addEventListener('click', () => {
      const mIdx = parseInt(btn.dataset.m, 10);
      openAddFoodModal(mIdx);
    });
  });
}

function adjustFoodPortion(mealIdx, itemIdx, deltaGrams) {
  const item = currentMealPlan.meals[mealIdx].items[itemIdx];
  const oldGrams = item.portionGrams;
  const newGrams = Math.max(10, oldGrams + deltaGrams);
  setFoodPortion(mealIdx, itemIdx, newGrams);
}

function setFoodPortion(mealIdx, itemIdx, newGrams) {
  const item = currentMealPlan.meals[mealIdx].items[itemIdx];
  const ratio = newGrams / item.portionGrams;
  item.portionGrams = newGrams;
  item.cal = Math.round(item.cal * ratio);
  item.p = parseFloat((item.p * ratio).toFixed(1));
  item.c = parseFloat((item.c * ratio).toFixed(1));
  item.f = parseFloat((item.f * ratio).toFixed(1));
  if (item.fiber) item.fiber = parseFloat((item.fiber * ratio).toFixed(1));

  saveMealPlan(currentMealPlan);
  renderNutritionPlannerView();
  initOrUpdateCharts();
}

let activeTargetMealIndex = 0;

function openAddFoodModal(mealIdx) {
  activeTargetMealIndex = mealIdx;
  const modal = document.getElementById('modal-food');
  document.getElementById('food-modal-title').textContent = `Add Food to ${currentMealPlan.meals[mealIdx].title.split(':')[0]}`;
  filterAndRenderFoodModalList('all', '');
  modal.classList.remove('hidden');
}

function filterAndRenderFoodModalList(category, query) {
  const container = document.getElementById('food-selection-container');
  container.innerHTML = '';

  const filtered = FOOD_DATABASE.filter(f => {
    const matchCat = category === 'all' || (category === 'indian' ? f.diet.includes('indian') : f.category === category);
    const matchQuery = !query || f.name.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<p class="text-sm text-muted">No foods found matching query.</p>';
    return;
  }

  filtered.forEach(food => {
    const item = document.createElement('div');
    item.className = 'food-select-item';
    item.innerHTML = `
      <div>
        <strong class="text-sm block">${food.name}</strong>
        <span class="text-xs text-muted">${food.unit} · ${food.cal} kcal · P: ${food.p}g · C: ${food.c}g · F: ${food.f}g</span>
      </div>
      <button class="btn btn-secondary btn-xs">+ Add</button>
    `;
    item.addEventListener('click', () => {
      currentMealPlan.meals[activeTargetMealIndex].items.push({
        foodId: food.id,
        name: food.name,
        portionGrams: food.grams,
        cal: food.cal,
        p: food.p,
        c: food.c,
        f: food.f,
        fiber: food.fiber || 0
      });
      saveMealPlan(currentMealPlan);
      closeModal('modal-food');
      renderNutritionPlannerView();
      showToast(`Added ${food.name} to meal plan.`);
    });
    container.appendChild(item);
  });
}

// ============================================================================
// 12. PROGRESS TRACKER VIEW & LOG ENTRIES
// ============================================================================

export function renderProgressTrackerView() {
  const tableBody = document.getElementById('progress-table-body');
  tableBody.innerHTML = '';

  const initialEntry = currentProgressHistory[0];
  const latestEntry = currentProgressHistory[currentProgressHistory.length - 1];

  if (initialEntry && latestEntry) {
    const diff = (latestEntry.weight - initialEntry.weight).toFixed(1);
    document.getElementById('prog-total-change').textContent = `${diff > 0 ? '+' : ''}${diff} kg`;
    document.getElementById('prog-change-note').textContent = `From ${initialEntry.weight} kg to ${latestEntry.weight} kg`;
  }

  document.getElementById('prog-total-entries').textContent = `${currentProgressHistory.length} Days`;
  const workoutsDone = currentProgressHistory.filter(e => e.workoutDone).length;
  document.getElementById('prog-workouts-done').textContent = `${workoutsDone} Sessions`;

  const totalCals = currentProgressHistory.reduce((acc, curr) => acc + (curr.calories || 0), 0);
  const avgCals = Math.round(totalCals / (currentProgressHistory.length || 1));
  document.getElementById('prog-avg-cals').textContent = `${avgCals.toLocaleString()} kcal`;

  document.getElementById('table-entry-count').textContent = `Showing ${currentProgressHistory.length} entries`;

  // Render Rows in reverse chronological order
  [...currentProgressHistory].reverse().forEach((entry, revIndex) => {
    const realIndex = currentProgressHistory.length - 1 - revIndex;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="font-semibold">${entry.date}</td>
      <td class="tabular-nums">${entry.weight} kg</td>
      <td class="tabular-nums">${entry.bodyFat ? entry.bodyFat + '%' : '—'}</td>
      <td class="text-xs text-muted tabular-nums">
        ${entry.waist ? entry.waist + 'cm' : '—'} / ${entry.chest ? entry.chest + 'cm' : '—'} / ${entry.arms ? entry.arms + 'cm' : '—'}
      </td>
      <td class="tabular-nums">${entry.calories ? entry.calories + ' kcal' : '—'} · ${entry.protein ? entry.protein + 'g' : '—'}</td>
      <td>
        <span class="${entry.workoutDone ? 'text-emerald font-semibold' : 'text-muted'}">${entry.workoutDone ? 'Completed ✓' : 'Rest / Missed'}</span>
      </td>
      <td class="text-right">
        <button class="btn btn-subtle btn-xs btn-delete-log-entry" data-index="${realIndex}" title="Delete Entry">✕</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  tableBody.querySelectorAll('.btn-delete-log-entry').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index, 10);
      if (confirm('Delete this progress log entry?')) {
        currentProgressHistory.splice(idx, 1);
        saveProgressHistory(currentProgressHistory);
        renderProgressTrackerView();
        initOrUpdateCharts();
        showToast('Entry deleted.');
      }
    });
  });
}

// ============================================================================
// 13. REST INTERVAL TIMER & WORKOUT STOPWATCH
// ============================================================================

export function startRestTimer(seconds) {
  restTimerSecondsRemaining = seconds;
  isRestTimerRunning = true;
  updateRestTimerUI();

  const drawer = document.getElementById('rest-timer-drawer');
  drawer.classList.remove('hidden');

  if (restTimerInterval) clearInterval(restTimerInterval);

  restTimerInterval = setInterval(() => {
    if (restTimerSecondsRemaining > 0) {
      restTimerSecondsRemaining--;
      updateRestTimerUI();
    } else {
      clearInterval(restTimerInterval);
      isRestTimerRunning = false;
      playTimerBeep();
      showToast('Rest interval completed! Ready for next set.');
      updateRestTimerUI();
    }
  }, 1000);
}

function updateRestTimerUI() {
  const m = Math.floor(restTimerSecondsRemaining / 60);
  const s = restTimerSecondsRemaining % 60;
  const str = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  
  const drawerClock = document.getElementById('rest-timer-clock');
  if (drawerClock) drawerClock.textContent = str;

  const quickDisplay = document.getElementById('quick-timer-display');
  if (quickDisplay) quickDisplay.textContent = str;

  const toggleBtn = document.getElementById('btn-toggle-rest-timer');
  if (toggleBtn) {
    toggleBtn.textContent = isRestTimerRunning ? 'Pause Timer' : 'Start Timer';
  }
}

// Workout Session Clock
function toggleSessionStopwatch() {
  const startBtn = document.getElementById('btn-session-start');
  if (isSessionRunning) {
    clearInterval(sessionStopwatchInterval);
    isSessionRunning = false;
    startBtn.textContent = 'Resume';
  } else {
    isSessionRunning = true;
    startBtn.textContent = 'Pause';
    sessionStopwatchInterval = setInterval(() => {
      sessionSeconds++;
      const hrs = Math.floor(sessionSeconds / 3600);
      const mins = Math.floor((sessionSeconds % 3600) / 60);
      const secs = sessionSeconds % 60;
      const display = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      document.getElementById('session-clock-display').textContent = display;
    }, 1000);
  }
}

function resetSessionStopwatch() {
  clearInterval(sessionStopwatchInterval);
  isSessionRunning = false;
  sessionSeconds = 0;
  document.getElementById('session-clock-display').textContent = '00:00:00';
  document.getElementById('btn-session-start').textContent = 'Start';
}

// ============================================================================
// 14. EVENT LISTENERS & APPLICATION INITIALIZATION
// ============================================================================

function switchTab(tabId) {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `tab-${tabId}`);
  });

  // Re-render and resize charts if navigating to dashboard
  if (tabId === 'dashboard') {
    setTimeout(initOrUpdateCharts, 50);
  }
}

function showToast(message) {
  const shelf = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-emerald">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  shelf.appendChild(toast);
  setTimeout(() => {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, 3200);
}

function closeModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) el.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Load Stored Data
  currentSettings = loadSettings();
  currentUserProfile = loadUserProfile();
  currentWorkoutPlan = loadWorkoutPlan() || generateWorkoutPlan(currentUserProfile);
  currentMealPlan = loadMealPlan() || generateMealPlan(currentUserProfile, calculateMacros(calculateCalorieTarget(calculateTDEE(calculateBMR(currentUserProfile.weightKg, currentUserProfile.heightCm, currentUserProfile.age, currentUserProfile.sex), currentUserProfile.activityMultiplier), currentUserProfile.goal, currentUserProfile.sex).target, currentUserProfile.weightKg, currentUserProfile.goal));
  currentProgressHistory = loadProgressHistory();
  currentHabits = loadHabits();

  // Apply Theme
  if (currentSettings.theme === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    document.getElementById('moon-icon').classList.add('hidden');
    document.getElementById('sun-icon').classList.remove('hidden');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    document.getElementById('moon-icon').classList.remove('hidden');
    document.getElementById('sun-icon').classList.add('hidden');
  }

  // 2. Navigation Tabs
  document.querySelectorAll('.nav-btn, [data-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = btn.dataset.tab;
      if (tab) switchTab(tab);
    });
  });

  // 3. Theme Toggle
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      currentSettings.theme = 'light';
      document.getElementById('moon-icon').classList.add('hidden');
      document.getElementById('sun-icon').classList.remove('hidden');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      currentSettings.theme = 'dark';
      document.getElementById('moon-icon').classList.remove('hidden');
      document.getElementById('sun-icon').classList.add('hidden');
    }
    saveSettings(currentSettings);
    initOrUpdateCharts();
  };

  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('settings-theme-btn').addEventListener('click', toggleTheme);

  // 4. Quick Actions in Header & Hero
  document.getElementById('cta-today-workout').addEventListener('click', () => switchTab('workout'));
  document.getElementById('btn-dash-jump-workout').addEventListener('click', () => switchTab('workout'));
  document.getElementById('btn-start-workout-session').addEventListener('click', () => {
    switchTab('workout');
    toggleSessionStopwatch();
  });

  // Quick Water Tracking
  document.getElementById('btn-quick-log-water').addEventListener('click', () => {
    currentHabits.waterLogged += 250;
    saveHabits(currentHabits);
    syncAllViews();
    showToast('Logged +250ml water intake!');
  });

  document.getElementById('dash-water-add-cup').addEventListener('click', () => {
    currentHabits.waterLogged += 250;
    saveHabits(currentHabits);
    syncAllViews();
  });

  document.getElementById('dash-water-add-bottle').addEventListener('click', () => {
    currentHabits.waterLogged += 500;
    saveHabits(currentHabits);
    syncAllViews();
  });

  document.getElementById('dash-water-reset').addEventListener('click', () => {
    currentHabits.waterLogged = 0;
    saveHabits(currentHabits);
    syncAllViews();
  });

  // Sleep Logger
  document.getElementById('dash-sleep-save').addEventListener('click', () => {
    const val = parseFloat(document.getElementById('dash-sleep-input').value) || 7.5;
    currentHabits.sleepLogged = val;
    saveHabits(currentHabits);
    syncAllViews();
    showToast(`Logged ${val} hrs sleep for last night.`);
  });

  // Formula Explainer Modal
  document.getElementById('btn-open-formula-modal').addEventListener('click', () => {
    document.getElementById('modal-formula').classList.remove('hidden');
  });

  // Modal Closers
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(btn.dataset.closeModal);
    });
  });

  // Close modal when clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.add('hidden');
    });
  });

  // 5. Rest Timer Drawer
  document.getElementById('open-timer-btn').addEventListener('click', () => {
    document.getElementById('rest-timer-drawer').classList.toggle('hidden');
  });

  document.getElementById('close-timer-drawer').addEventListener('click', () => {
    document.getElementById('rest-timer-drawer').classList.add('hidden');
  });

  document.getElementById('btn-toggle-rest-timer').addEventListener('click', () => {
    if (isRestTimerRunning) {
      clearInterval(restTimerInterval);
      isRestTimerRunning = false;
    } else {
      startRestTimer(restTimerSecondsRemaining);
    }
    updateRestTimerUI();
  });

  document.getElementById('btn-reset-rest-timer').addEventListener('click', () => {
    clearInterval(restTimerInterval);
    isRestTimerRunning = false;
    restTimerSecondsRemaining = 90;
    updateRestTimerUI();
  });

  document.querySelectorAll('.timer-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.timer-preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sec = parseInt(btn.dataset.seconds, 10);
      startRestTimer(sec);
    });
  });

  // 6. Workout Session Stopwatch
  document.getElementById('btn-session-start').addEventListener('click', toggleSessionStopwatch);
  document.getElementById('btn-session-reset').addEventListener('click', resetSessionStopwatch);

  // Complete Day Workout
  document.getElementById('btn-complete-day-workout').addEventListener('click', () => {
    const activeDay = currentWorkoutPlan.days[activeWorkoutDayIndex];
    activeDay.completed = !activeDay.completed;
    saveWorkoutPlan(currentWorkoutPlan);
    renderWorkoutPlannerView();
    showToast(activeDay.completed ? 'Workout marked completed!' : 'Workout status reset.');
  });

  // Warm-up / Cool-down Accordions
  document.getElementById('btn-toggle-warmup').addEventListener('click', (e) => {
    const body = document.getElementById('warmup-content');
    const isHidden = body.classList.toggle('hidden');
    e.target.textContent = isHidden ? 'Show Routine' : 'Hide Routine';
  });

  document.getElementById('btn-toggle-cooldown').addEventListener('click', (e) => {
    const body = document.getElementById('cooldown-content');
    const isHidden = body.classList.toggle('hidden');
    e.target.textContent = isHidden ? 'Show Routine' : 'Hide Routine';
  });

  // 7. Profile Form Submission
  const profileForm = document.getElementById('fitness-profile-form');
  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const unitSystem = currentSettings.unitSystem || 'metric';
    let heightCm = parseFloat(document.getElementById('input-height-cm').value);
    let weightKg = parseFloat(document.getElementById('input-weight-kg').value);
    let targetWeightKg = parseFloat(document.getElementById('input-target-weight-kg').value);

    if (unitSystem === 'imperial') {
      const ft = parseFloat(document.getElementById('input-height-ft').value) || 0;
      const inch = parseFloat(document.getElementById('input-height-in').value) || 0;
      heightCm = Math.round((ft * 12 + inch) * 2.54);

      const wLbs = parseFloat(document.getElementById('input-weight-lbs').value) || 0;
      weightKg = parseFloat((wLbs * 0.453592).toFixed(1));

      const twLbs = parseFloat(document.getElementById('input-target-weight-lbs').value) || 0;
      targetWeightKg = parseFloat((twLbs * 0.453592).toFixed(1));
    }

    const updatedProfile = {
      name: document.getElementById('input-name').value.trim(),
      age: parseInt(document.getElementById('input-age').value, 10),
      sex: document.getElementById('input-sex').value,
      unitSystem,
      heightCm,
      weightKg,
      targetWeightKg,
      bodyFatPct: document.getElementById('input-bodyfat').value ? parseFloat(document.getElementById('input-bodyfat').value) : null,
      goal: document.getElementById('input-goal').value,
      experience: document.getElementById('input-experience').value,
      trainingDays: parseInt(document.getElementById('input-days').value, 10),
      durationMin: parseInt(document.getElementById('input-duration').value, 10),
      activityMultiplier: parseFloat(document.getElementById('input-activity').value),
      location: document.getElementById('input-location').value,
      equipment: document.getElementById('input-equipment').value,
      dietPreference: document.getElementById('input-diet').value,
      allergies: document.getElementById('input-allergies').value.trim(),
      mealsPerDay: parseInt(document.getElementById('input-meals').value, 10),
      sleepHours: parseFloat(document.getElementById('input-sleep').value),
      injuries: document.getElementById('input-injuries').value.trim()
    };

    const validation = validateProfile(updatedProfile);
    if (!validation.valid) {
      alert(validation.errors.join('\n'));
      return;
    }

    currentUserProfile = updatedProfile;
    saveUserProfile(currentUserProfile);

    // Re-generate customized workout split & meal template
    currentWorkoutPlan = generateWorkoutPlan(currentUserProfile);
    saveWorkoutPlan(currentWorkoutPlan);

    const bmr = calculateBMR(currentUserProfile.weightKg, currentUserProfile.heightCm, currentUserProfile.age, currentUserProfile.sex);
    const tdee = calculateTDEE(bmr, currentUserProfile.activityMultiplier);
    const targetCals = calculateCalorieTarget(tdee, currentUserProfile.goal, currentUserProfile.sex).target;
    const macros = calculateMacros(targetCals, currentUserProfile.weightKg, currentUserProfile.goal);
    currentMealPlan = generateMealPlan(currentUserProfile, macros);
    saveMealPlan(currentMealPlan);

    syncAllViews();
    showToast('Profile updated & customized workout and meal plans generated!');
  });

  // Load Demo Profile Button
  document.getElementById('btn-load-demo-profile').addEventListener('click', () => {
    currentUserProfile = { ...DEFAULT_PROFILE };
    saveUserProfile(currentUserProfile);
    currentWorkoutPlan = generateWorkoutPlan(currentUserProfile);
    saveWorkoutPlan(currentWorkoutPlan);
    currentMealPlan = generateMealPlan(currentUserProfile, calculateMacros(calculateCalorieTarget(calculateTDEE(calculateBMR(currentUserProfile.weightKg, currentUserProfile.heightCm, currentUserProfile.age, currentUserProfile.sex), currentUserProfile.activityMultiplier), currentUserProfile.goal, currentUserProfile.sex).target, currentUserProfile.weightKg, currentUserProfile.goal));
    saveMealPlan(currentMealPlan);
    syncAllViews();
    showToast('Loaded sample profile.');
  });

  // Reset Form
  document.getElementById('btn-reset-form').addEventListener('click', () => {
    profileForm.reset();
  });

  // 8. Unit System Toggle
  const unitBtns = document.querySelectorAll('#unit-system-toggle .segment-btn, #settings-units-control .segment-btn');
  unitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const unit = btn.dataset.unit;
      currentSettings.unitSystem = unit;
      saveSettings(currentSettings);

      document.querySelectorAll('#unit-system-toggle .segment-btn, #settings-units-control .segment-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.unit === unit);
      });

      const isMetric = unit === 'metric';
      document.querySelectorAll('.unit-metric-group').forEach(el => el.classList.toggle('hidden', !isMetric));
      document.querySelectorAll('.unit-imperial-group').forEach(el => el.classList.toggle('hidden', isMetric));
    });
  });

  // 9. Nutrition Actions
  document.getElementById('btn-quick-indian-diet').addEventListener('click', () => {
    currentUserProfile.dietPreference = 'indian';
    saveUserProfile(currentUserProfile);
    const bmr = calculateBMR(currentUserProfile.weightKg, currentUserProfile.heightCm, currentUserProfile.age, currentUserProfile.sex);
    const tdee = calculateTDEE(bmr, currentUserProfile.activityMultiplier);
    const targetCals = calculateCalorieTarget(tdee, currentUserProfile.goal, currentUserProfile.sex).target;
    currentMealPlan = generateMealPlan(currentUserProfile, calculateMacros(targetCals, currentUserProfile.weightKg, currentUserProfile.goal));
    saveMealPlan(currentMealPlan);
    renderNutritionPlannerView();
    showToast('Generated Traditional Indian meal architecture (Roti, Dal, Paneer, Curd, Chana)');
  });

  document.getElementById('btn-reset-meal-plan').addEventListener('click', () => {
    const bmr = calculateBMR(currentUserProfile.weightKg, currentUserProfile.heightCm, currentUserProfile.age, currentUserProfile.sex);
    const tdee = calculateTDEE(bmr, currentUserProfile.activityMultiplier);
    const targetCals = calculateCalorieTarget(tdee, currentUserProfile.goal, currentUserProfile.sex).target;
    currentMealPlan = generateMealPlan(currentUserProfile, calculateMacros(targetCals, currentUserProfile.weightKg, currentUserProfile.goal));
    saveMealPlan(currentMealPlan);
    renderNutritionPlannerView();
    showToast('Reset meal plan to standard template.');
  });

  document.getElementById('btn-log-day-meals').addEventListener('click', () => {
    const totals = calculateMealNutrition(currentMealPlan);
    const todayStr = new Date().toISOString().split('T')[0];
    const existing = currentProgressHistory.find(e => e.date === todayStr);

    if (existing) {
      existing.calories = totals.totalCal;
      existing.protein = totals.totalP;
    } else {
      currentProgressHistory.push({
        date: todayStr,
        weight: currentUserProfile.weightKg,
        bodyFat: currentUserProfile.bodyFatPct,
        calories: totals.totalCal,
        protein: totals.totalP,
        workoutDone: true
      });
    }

    saveProgressHistory(currentProgressHistory);
    renderProgressTrackerView();
    initOrUpdateCharts();
    showToast(`Logged today's nutrition (${totals.totalCal} kcal, ${totals.totalP}g protein) to progress!`);
  });

  // Food Search in Modal
  document.getElementById('food-search-query').addEventListener('input', (e) => {
    const activeCategory = document.querySelector('#food-category-filter .segment-btn.active').dataset.category;
    filterAndRenderFoodModalList(activeCategory, e.target.value);
  });

  document.querySelectorAll('#food-category-filter .segment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#food-category-filter .segment-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const query = document.getElementById('food-search-query').value;
      filterAndRenderFoodModalList(btn.dataset.category, query);
    });
  });

  // 10. Progress Tracker Actions
  document.getElementById('btn-open-log-modal').addEventListener('click', () => {
    document.getElementById('log-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('log-weight').value = currentUserProfile.weightKg;
    document.getElementById('modal-log-entry').classList.remove('hidden');
  });

  document.getElementById('btn-quick-log-weight').addEventListener('click', () => {
    document.getElementById('log-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('log-weight').value = currentUserProfile.weightKg;
    document.getElementById('modal-log-entry').classList.remove('hidden');
  });

  document.getElementById('form-log-progress').addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('log-date').value;
    const weight = parseFloat(document.getElementById('log-weight').value);
    const bodyFat = document.getElementById('log-bodyfat').value ? parseFloat(document.getElementById('log-bodyfat').value) : null;
    const waist = document.getElementById('log-waist').value ? parseFloat(document.getElementById('log-waist').value) : null;
    const chest = document.getElementById('log-chest').value ? parseFloat(document.getElementById('log-chest').value) : null;
    const arms = document.getElementById('log-arms').value ? parseFloat(document.getElementById('log-arms').value) : null;
    const calories = document.getElementById('log-calories').value ? parseInt(document.getElementById('log-calories').value, 10) : null;
    const protein = document.getElementById('log-protein').value ? parseInt(document.getElementById('log-protein').value, 10) : null;
    const workoutDone = document.getElementById('log-workout-done').checked;

    currentProgressHistory.push({
      date,
      weight,
      bodyFat,
      waist,
      chest,
      arms,
      calories,
      protein,
      workoutDone
    });

    // Update current weight in profile as well
    currentUserProfile.weightKg = weight;
    saveUserProfile(currentUserProfile);
    saveProgressHistory(currentProgressHistory);

    closeModal('modal-log-entry');
    syncAllViews();
    showToast('Progress entry recorded.');
  });

  // 11. Settings Actions (Export, Import, Wipe)
  document.getElementById('btn-export-json').addEventListener('click', exportUserData);

  document.getElementById('file-import-json').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      importUserData(event.target.result);
    };
    reader.readAsText(file);
  });

  document.getElementById('btn-wipe-data').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all profiles, workouts, meals, and history? This cannot be undone.')) {
      localStorage.clear();
      currentUserProfile = { ...DEFAULT_PROFILE };
      currentWorkoutPlan = generateWorkoutPlan(currentUserProfile);
      currentMealPlan = generateMealPlan(currentUserProfile, calculateMacros(calculateCalorieTarget(calculateTDEE(calculateBMR(currentUserProfile.weightKg, currentUserProfile.heightCm, currentUserProfile.age, currentUserProfile.sex), currentUserProfile.activityMultiplier), currentUserProfile.goal, currentUserProfile.sex).target, currentUserProfile.weightKg, currentUserProfile.goal));
      currentProgressHistory = [...DEFAULT_PROGRESS_HISTORY];
      currentHabits = { waterLogged: 2000, sleepLogged: 7.5, lastDate: new Date().toISOString().split('T')[0] };
      saveUserProfile(currentUserProfile);
      saveWorkoutPlan(currentWorkoutPlan);
      saveMealPlan(currentMealPlan);
      saveProgressHistory(currentProgressHistory);
      saveHabits(currentHabits);
      syncAllViews();
      showToast('All records reset to default state.');
    }
  });

  // Audio Toggle
  document.getElementById('settings-audio-toggle').addEventListener('change', (e) => {
    currentSettings.timerAudio = e.target.checked;
    saveSettings(currentSettings);
  });

  // Lift selector in analytics
  const liftSelector = document.getElementById('chart-lift-selector');
  if (liftSelector) {
    liftSelector.addEventListener('change', initOrUpdateCharts);
  }

  // Initial UI Render
  syncAllViews();
});
