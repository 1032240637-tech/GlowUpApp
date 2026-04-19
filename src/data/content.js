/* ============================================
   GLOWUP — CONTENT DATA MODULE
   All data from Data.txt + antiaging.txt + AntiOxidants.txt + mental health.txt
   Structured, deduplicated, priority-ranked
   ============================================ */

// ── Category Definitions ──
export const categories = [
  { id: 'keystone', name: 'Keystone', icon: '⚡', color: '#a78bfa', desc: '7 habits. 95% of your results.' },
  { id: 'diet', name: 'Diet', icon: '🥗', color: '#34d399', desc: 'Eat right or nothing else matters' },
  { id: 'sleep', name: 'Sleep', icon: '😴', color: '#818cf8', desc: 'Your body rebuilds here' },
  { id: 'lifestyle', name: 'Lifestyle', icon: '🏃', color: '#fb923c', desc: 'Move or decay. Your choice.' },
  { id: 'mental', name: 'Mind', icon: '🧠', color: '#f472b6', desc: 'Control your mind or it controls you' },
  { id: 'supplements', name: 'Supplements', icon: '💊', color: '#06b6d4', desc: 'Only what actually works' },
  { id: 'skin', name: 'Skin', icon: '✨', color: '#fbbf24', desc: 'Glow is built, not bought' },
  { id: 'environment', name: 'Environment', icon: '🌿', color: '#34d399', desc: 'Design your space. Design your life.' },
  { id: 'eliminate', name: 'Eliminate', icon: '🚫', color: '#f87171', desc: 'Stop doing damage first' },
  { id: 'antiaging', name: 'Anti-Aging', icon: '🧬', color: '#c084fc', desc: 'Age slower than everyone else' },
  { id: 'dopamine', name: 'Digital Wellness', icon: '📵', color: '#e879f9', desc: 'Your phone is stealing your life' },
  { id: 'productivity', name: 'Productivity', icon: '🔥', color: '#fb923c', desc: 'Do less. Achieve more.' },
];

// ── Keystone Habits (The 80/20) ──
export const keystoneHabits = [
  {
    id: 'k1',
    num: 1,
    title: 'Fixed 7 AM Wake Time',
    desc: 'Every day, including weekends',
    detail: 'Controls cortisol, sleep, cravings, mood, and skin repair simultaneously. Wake time resets circadian clock not bedtime. Force 7 AM and natural 10:30 PM sleep follows in 3–5 days. Circadian alignment impacts DNA methylation (Horvath Clock) more than total hours.',
    priority: 'high',
    tags: ['sleep', 'hormones', 'skin']
  },
  {
    id: 'k2',
    num: 2,
    title: 'Phone Out of Bedroom by 9:30 PM',
    desc: 'The #1 life change you can make tonight',
    detail: 'Just 5 minutes of phone light KILLS your sleep hormone for 90 minutes. ONE peek at your screen and your brain thinks it\'s daytime. Charge your phone in the kitchen. Buy a ₹500 alarm clock. This isn\'t about willpower — remove the phone and the problem disappears. Tonight.',
    priority: 'high',
    tags: ['sleep', 'dopamine', 'environment']
  },
  {
    id: 'k3',
    num: 3,
    title: 'Morning Sunlight Within 30 Min',
    desc: '10–15 min. No sunglasses.',
    detail: 'NO pill, NO supplement, NO hack replaces this. Morning sunlight tells your brain "the day has started" and sets your sleep timer for tonight — automatically. Skip this and your whole day is off. Step outside, look toward the sky (not at the sun), and give your body its #1 biological input. This is FREE and more powerful than any supplement you can buy.',
    priority: 'high',
    tags: ['circadian', 'hormones', 'mood']
  },
  {
    id: 'k4',
    num: 4,
    title: 'Protein + Fiber at Every Meal',
    desc: '3 meals/day. Same times. No skipping.',
    detail: 'Skip meals → blood sugar crashes → you binge at night → feel guilty → repeat. STOP THE CYCLE. Eat 3 real meals with protein (eggs, paneer, dal, chicken) at fixed times. Your cravings will vanish in 3 days. Stop counting calories — just eat real food at real times. Eat fats FIRST in your meal and you\'ll feel full faster than any diet pill.',
    priority: 'high',
    tags: ['nutrition', 'hormones', 'energy']
  },
  {
    id: 'k5',
    num: 5,
    title: 'SPF 50 Sunscreen Every Morning',
    desc: 'Without this, everything else is wasted',
    detail: 'Every serum, every cream, every routine you do is WORTHLESS without sunscreen. The sun is destroying your skin every single day — dark spots, wrinkles, uneven tone. That pigmentation you see? It\'s not genetics. It\'s sun damage + bad sleep + sugar. Put on SPF 50 every morning like brushing your teeth. Non-negotiable.',
    priority: 'high',
    tags: ['skin', 'anti-aging']
  },
  {
    id: 'k6',
    num: 6,
    title: 'Go to the Gym',
    desc: 'Lift heavy things 3-5x per week',
    detail: 'Your body is either building or breaking down. There is no in-between. 20 minutes of lifting weights changes your body shape, burns fat even while you sleep, fixes hormones, and builds confidence nothing else can. Squats, deadlifts, push-ups, rows — start with these. You don\'t need 2 hours. You need 20 focused minutes, consistently. The gym is the only place where pain creates beauty.',
    priority: 'high',
    tags: ['fitness', 'hormones', 'body']
  },
  {
    id: 'k7',
    num: 7,
    title: 'Sleep Before 11 PM',
    desc: 'Your body does 60% of repairs here',
    detail: 'Between 10 PM and 2 AM, your body releases the most growth hormone — this is when your skin heals, muscles repair, and brain cleans itself. Miss this window and you wake up puffy, tired, and aging faster. Every hour of sleep BEFORE midnight is worth two hours after. Sleep before 11 PM for 2 weeks and look in the mirror — you\'ll see the difference.',
    priority: 'high',
    tags: ['sleep', 'recovery', 'skin']
  }
];

// ── Diet Data ──
export const dietData = {
  topTier: [
    { id: 'd1', title: 'Protein at Every Meal', desc: '25–40g per meal. Build, don\'t break.', detail: 'Your hair, skin, muscles, and hormones are ALL made of protein. Skimp on protein and your body eats itself. Every meal needs eggs, paneer, dal, chicken, or fish. This is not optional — it\'s the raw material your body NEEDS.', priority: 'high', icon: '🥩', quickTags: ['Eggs', 'Paneer', 'Dal', 'Curd', 'Tofu', 'Chickpeas', 'Sprouts', 'Fish'] },
    { id: 'd2', title: 'Stop Skipping Meals', desc: 'Eat 3 real meals at the same time daily', detail: 'You think skipping meals helps you lose weight? It does the OPPOSITE. Your body panics, stores fat, spikes stress hormones, and then you binge at midnight. Eat 3 meals. Same times. Every day. Consistency beats every diet ever invented.', priority: 'high', icon: '⏰' },
    { id: 'd3', title: 'Cut Added Sugar', desc: 'Under 20g/day. Sugar is aging you.', detail: 'Sugar literally GLUES itself to your skin\'s collagen and destroys it. This damage is PERMANENT. Every sweet treat is fast-forwarding your aging. Your dull skin, your wrinkles, your breakouts — sugar is behind all of it. Cut it now or pay later.', priority: 'high', icon: '🍬' },
    { id: 'd4', title: 'Cut Ultra-Processed Foods', desc: 'If it has ingredients you can\'t pronounce, skip it', detail: 'Chips, biscuits, Maggi, packaged snacks — these aren\'t food, they\'re chemicals shaped like food. They bloat your face, inflame your skin, and crash your energy. Eat things that grew from the ground or had a mother. That\'s it.', priority: 'high', icon: '📦' },
    { id: 'd5', title: 'Drink 2.5–3L Water Daily', desc: 'More water = LESS bloating. Not more.', detail: 'Think drinking less water reduces bloating? WRONG. When you\'re dehydrated, your body HOLDS water desperately. Drink MORE and your body lets go. Your skin plumps up, puffiness drops, and you look fresher within DAYS. Carry a bottle everywhere.', priority: 'high', icon: '💧' },
    { id: 'd6', title: 'Eat Fats First in Your Meal', desc: 'Nuts/avocado/ghee before carbs', detail: 'Eat your fats and protein BEFORE carbs and your brain gets a "I\'m full" signal way earlier. This one trick kills cravings and keeps you satisfied for hours. It mimics how those expensive weight-loss drugs work — for free.', priority: 'high', icon: '🥑', quickTags: ['EVOO', 'Avocado', 'Walnuts', 'Almonds', 'Ghee'] },
    { id: 'd7', title: '10-Min Walk After Big Meals', desc: 'Cuts blood sugar spike by HALF', detail: 'A 10-minute walk after your biggest meal cuts your blood sugar spike by 50%. That\'s as powerful as some medications. No gym needed. Just walk. After lunch, get up and move for 10 minutes. Your energy won\'t crash, your skin won\'t break out, you won\'t feel sleepy.', priority: 'high', icon: '🚶' },
  ],
  highValue: [
    { id: 'd8', title: 'Stop Eating After 8 PM', desc: '8-10 hour eating window. Kitchen closes.', detail: 'Late-night eating spikes insulin while your body should be repairing. Your skin ages faster when you eat late. Set a hard rule: kitchen closes at 8 PM. Your body will thank you every morning.', priority: 'medium', icon: '⏳' },
    { id: 'd9', title: 'Eat More Vegetables', desc: 'At BOTH lunch and dinner', detail: 'Most people eat almost zero vegetables and wonder why they feel terrible. Add a big portion of veggies to lunch AND dinner. Your gut heals, your skin clears up, your energy stabilizes. This is the single biggest upgrade most people are missing.', priority: 'medium', icon: '🥦', quickTags: ['Spinach', 'Broccoli', 'Oats', 'Khichdi', 'Poha'] },
    { id: 'd10', title: 'Daily Curd/Yogurt', desc: 'Your gut controls your skin', detail: 'Bad gut = bad skin. It\'s that simple. A bowl of unsweetened curd every day feeds your good bacteria, which directly controls whether your skin is clear or covered in breakouts. Cheap, easy, powerful.', priority: 'medium', icon: '🥛' },
    { id: 'd11', title: 'Eat 2 Fruits Daily', desc: 'Nature\'s skin serum — from inside', detail: 'Papaya, guava, orange, kiwi, berries — these are PACKED with Vitamin C, which your body needs to build collagen (the thing that keeps skin tight and glowing). 2 kiwis before bed even help you fall asleep faster.', priority: 'medium', icon: '🍊', quickTags: ['Berries', 'Blueberries', 'Pomegranate', 'Papaya', 'Guava', 'Oranges', 'Kiwi'] },
    { id: 'd12', title: 'Omega-3 Daily', desc: 'Flaxseed or walnuts — brain + skin fuel', detail: 'Your brain is 60% fat. Your skin barrier needs healthy fats. Without omega-3, you\'re dry, inflamed, and moody. One tablespoon of ground flaxseed or a handful of walnuts daily. Your skin glows, your mood lifts, inflammation drops.', priority: 'medium', icon: '🐟', quickTags: ['Flaxseed', 'Walnuts', 'Pumpkinseeds'] },
    { id: 'd13', title: 'Frozen Wild Blueberries', desc: 'Twice the power of fresh ones', detail: 'Frozen wild blueberries have DOUBLE the skin-protecting power of fresh store-bought ones. They fight dark spots and aging from the inside. Throw them in smoothies, yogurt, or eat them frozen. The cheapest anti-aging food that exists.', priority: 'medium', icon: '🫐' },
    { id: 'd14', title: 'Steam/Boil Instead of Fry', desc: 'Frying creates wrinkle-causing chemicals', detail: 'Every time you fry or grill food at high heat, you create chemicals that literally wrinkle your skin from inside. Steam it. Boil it. Poach it. Same taste, zero damage. Your future face will thank you.', priority: 'medium', icon: '♨️' },
  ],
  useful: [
    { id: 'd15', title: 'Chop Broccoli 40 Min Early', desc: 'Unlocks the anti-aging compound', detail: 'Chop your broccoli and let it sit for 40 minutes BEFORE cooking. This activates a powerful compound that cleans out damaged cells. One of the most powerful anti-aging food tricks that costs nothing.', priority: 'low', icon: '🥬' },
    { id: 'd16', title: 'Vinegar on Raw Greens', desc: 'Helps your body absorb iron', detail: 'Squeeze lemon or vinegar on your raw spinach salad. The acid helps your body absorb iron much better. Low iron = tired, pale, hair falling out. Simple trick, big results.', priority: 'low', icon: '🫒' },
    { id: 'd17', title: 'Pomegranate Before Workout', desc: '30 min before lifting', detail: 'Pomegranate 30 minutes before your workout helps clear out old, weak muscle cells and keeps your muscles powerful for decades. Plus it tastes amazing. Win-win.', priority: 'low', icon: '🧃' },
    { id: 'd18', title: 'Anti-Inflammatory Spices', desc: 'Turmeric, ginger, cinnamon daily', detail: 'These spices fight inflammation inside your body silently. Turmeric in your dal, ginger in your tea, cinnamon on your oats. Small additions, massive long-term protection. Your grandma was right.', priority: 'low', icon: '🌿', quickTags: ['Turmeric', 'Cinnamon', 'Ginger', 'Cloves', 'Fennel', 'Fenugreek', 'Tulsi', 'Pepper', 'Lemon', 'Green Tea'] },
  ],
  avoid: [
    { id: 'da1', title: 'Sugary Drinks & Packaged Juices', desc: 'Liquid sugar destroys you fastest', priority: 'avoid', icon: '🥤', quickTags: ['Soda', 'Juice', 'Smoothies', 'Lattes'] },
    { id: 'da2', title: 'Refined Carbs (Maida)', desc: 'Spikes insulin, triggers breakouts', priority: 'avoid', icon: '🍞', quickTags: ['Maida', 'Maggi', 'Chips', 'Biscuits', 'Pastries'] },
    { id: 'da3', title: 'Seed Oils in Fried Food', desc: 'Inflames you from inside out', priority: 'avoid', icon: '🍟', quickTags: ['Fryfoods', 'Seedoils', 'TransFats'] },
    { id: 'da4', title: 'Diet Soda', desc: 'Wrecks your gut bacteria. Not a health drink.', priority: 'avoid', icon: '🥫' },
    { id: 'da5', title: 'Excess Milk if Acne-Prone', desc: 'Triggers hormonal breakouts', priority: 'avoid', icon: '🥛' },
    { id: 'da6', title: '"Detox" Teas & Fat Burners', desc: 'Scam products. Can damage your liver.', priority: 'avoid', icon: '⚠️' },
    { id: 'da7', title: 'Alcohol', desc: 'Destroys your deep sleep completely', priority: 'avoid', icon: '🍺' },
  ]
};

// ── Sleep Data ──
export const sleepData = {
  topTier: [
    { id: 's1', title: 'Fixed Wake Time > Fixed Bedtime', desc: 'Wake at 7 AM. Sleep fixes itself.', detail: 'Stop trying to force yourself to sleep early. It doesn\'t work. Instead, force yourself to WAKE at 7 AM — even if you slept late. In 3-5 days, your body will naturally crash by 10:30 PM. Wake time is the master switch. Use it.', priority: 'high', icon: '⏰' },
    { id: 's2', title: 'Morning Sunlight 10–15 Min', desc: 'Within 30 min of waking. No exceptions.', detail: 'This sets your body\'s sleep timer for tonight — automatically. No pill does this. No supplement does this. 10 minutes of morning sunlight programs your brain to produce sleep hormones 14-16 hours later. It\'s free. It\'s the most important thing you can do for your sleep.', priority: 'high', icon: '☀️' },
    { id: 's3', title: 'No Screens After 9:30 PM', desc: '5 min of screen = 90 min of lost sleep', detail: 'Your phone screen tricks your brain into thinking it\'s noon. Just 5 minutes of scrolling KILLS your sleep hormone for the next 90 minutes. That "quick check" before bed? It just cost you nearly 2 hours of quality sleep. Put. It. Down.', priority: 'high', icon: '📵' },
    { id: 's4', title: 'Phone Charges Outside Bedroom', desc: 'Remove it. Don\'t resist it.', detail: 'You will NEVER have the willpower to not check your phone when it\'s next to you. Never. Stop pretending you will. Put it in the kitchen. Buy an alarm clock. The problem vanishes when the phone vanishes. Environment beats willpower every single time.', priority: 'high', icon: '🔌' },
    { id: 's5', title: 'Cool, Dark Room', desc: '18–22°C. Pitch black.', detail: 'Your body NEEDS to cool down to fall asleep. A warm bedroom fights this. Set AC to 20-22°C or open windows. Get blackout curtains or an eye mask. Even a tiny bit of light reaching your eyes reduces sleep quality by 50%. Make your room a cave.', priority: 'high', icon: '❄️' },
    { id: 's6', title: 'Bed = Sleep Only', desc: 'No eating. No scrolling. No Netflix.', detail: 'If you eat, scroll, work, and watch TV in bed, your brain has NO IDEA what the bed is for. Train it. Bed = sleep ONLY. After 2 weeks of this, your brain starts shutting down the moment you lie down. This is conditioning — use it.', priority: 'high', icon: '🛏️' },
  ],
  highValue: [
    { id: 's7', title: 'Dim Lights 1 Hour Before Bed', desc: 'Bright lights = your brain thinks it\'s daytime', detail: 'Switch to warm, dim lights after 9 PM. Bright overhead lights tell your brain to stay awake. Dim lamps create a signal: "day is ending, time to wind down." Your body starts producing sleep hormones automatically.', priority: 'medium', icon: '💡' },
    { id: 's8', title: 'Dinner 3+ Hours Before Sleep', desc: 'Late food blocks your body\'s repair mode', detail: 'Eat dinner by 7:30 PM maximum. When you eat late, your body spends the night digesting instead of repairing your skin, muscles, and brain. The repair hormone peaks at 10 PM-2 AM — but only if your body isn\'t busy processing food.', priority: 'medium', icon: '🍽️' },
    { id: 's9', title: 'No Caffeine After 2 PM', desc: 'It stays in your system for 7+ hours', detail: 'That 4 PM coffee? It\'s still in your system at 11 PM. You might fall asleep, but your deep sleep is DESTROYED. You wake up tired and need more coffee. It\'s a trap. Cut caffeine by 2 PM and watch your sleep transform.', priority: 'medium', icon: '☕' },
    { id: 's10', title: '4-7-8 Breathing', desc: 'Instant calm in 3 breaths', detail: 'Breathe in for 4 seconds. Hold for 7. Breathe out slowly for 8. Do this 3 times. Your heart rate drops, your mind calms, your body switches from "alert mode" to "sleep mode." Use this whenever you can\'t fall asleep. Works in under 2 minutes.', priority: 'medium', icon: '🫁' },
    { id: 's11', title: '20-Minute Rule', desc: 'Can\'t sleep? Get up.', detail: 'If you\'re lying in bed awake for more than 20 minutes, GET UP. Go to another room. Do something boring in dim light. Come back when sleepy. Lying awake in bed trains your brain that bed = frustration. Break that connection.', priority: 'medium', icon: '🕐' },
  ],
  useful: [
    { id: 's12', title: 'Magnesium Before Bed', desc: '200-400mg. Nature\'s chill pill.', detail: 'Magnesium relaxes your muscles and calms your nervous system. Most people are deficient. Take 200-400mg of magnesium glycinate 1 hour before bed. You\'ll fall asleep faster and sleep deeper. One of the few supplements that actually works for sleep.', priority: 'low', icon: '💊' },
    { id: 's13', title: 'Glycine 3g Before Bed', desc: 'Cools your body for faster sleep', detail: 'Your body needs to cool down to fall asleep. Glycine helps lower your core temperature, so you fall asleep faster. It also helps your body detoxify overnight. Cheap supplement, real results.', priority: 'low', icon: '🧪' },
    { id: 's14', title: '2 Kiwis 1 Hr Before Bed', desc: 'Natural sleep hack that actually works', detail: 'Eat 2 kiwis (with the skin) about an hour before bed. They boost serotonin and help you fall asleep faster. You\'ll notice brighter under-eyes the next morning. Weird but effective. Try it for a week.', priority: 'low', icon: '🥝' },
    { id: 's15', title: 'Chamomile Tea', desc: 'Gentle natural calm before bed', detail: 'Chamomile has a compound that gently activates the same brain receptors as anti-anxiety medication — but naturally and without addiction. One cup before bed, warm, no sugar. Let it become your shutdown ritual.', priority: 'low', icon: '🍵' },
  ],
  avoid: [
    { id: 'sa1', title: 'Melatonin Pills at Age 20', desc: 'Your body makes enough. Fix your light exposure instead.', priority: 'avoid', icon: '💊' },
    { id: 'sa2', title: 'Sleeping In on Weekends', desc: '2 extra hours = jet lag on Monday', priority: 'avoid', icon: '😴' },
    { id: 'sa3', title: 'Alcohol Before Sleep', desc: 'You pass out, not sleep. Big difference.', detail: 'Alcohol might knock you out, but it destroys your deep sleep and dream sleep. You wake up tired, foggy, and emotionally drained. Your heart rate stays elevated all night. One drink costs you quality sleep for the entire night.', priority: 'avoid', icon: '🍷' },
  ]
};

// ── Lifestyle & Exercise Data ──
export const lifestyleData = {
  topTier: [
    { id: 'l1', title: '8,000+ Steps Daily', desc: 'Walk more. Everything gets better.', detail: 'Walking reduces face puffiness, improves mood, helps digestion, and burns fat. It\'s the most underrated exercise. Take a 10-minute walk after your biggest meal — it cuts your blood sugar spike by HALF. No gym required. Just walk.', priority: 'high', icon: '🚶' },
    { id: 'l2', title: 'Strength Training 3x/Week', desc: '20 min of lifting beats 1 hour of cardio', detail: 'Running for hours burns calories while you run. Strength training burns calories for 48 HOURS after you stop. It reshapes your body, fixes your hormones, and boosts your confidence. 20 minutes, 3 times a week. No excuses.', priority: 'high', icon: '🏋️' },
    { id: 'l3', title: 'Zone 2 Cardio', desc: '45 min, 2-3x/week. Can still talk = right pace.', detail: 'Walk fast or light jog where you can still hold a conversation. This is the "sweet spot" that cleans out damaged cells and builds new energy factories in your muscles. It\'s the #1 exercise for living longer and having more daily energy.', priority: 'high', icon: '🫀' },
    { id: 'l4', title: 'Home Workout Circuit', desc: '20 min. No equipment. No excuses.', detail: '3 rounds: Squats ×12, Push-ups ×8, Glute Bridges ×12, Dead Bug ×8 each side, Calf Raises ×15, Wall Sit 30 seconds. That\'s a COMPLETE workout in 20 minutes at home. No gym membership needed. No commute. Just start.', priority: 'high', icon: '💪', quickTags: ['Squat', 'Pushup', 'Bridge', 'Deadbug', 'Plank', 'Wallsit'] },
  ],
  highValue: [
    { id: 'l5', title: 'Breathe Through Your Nose', desc: 'Mouth breathing destroys your face shape', detail: 'Chronic mouth breathing changes your facial structure over time — weaker jaw, longer face, worse posture. It also keeps your body in stress mode 24/7. Close your mouth. Breathe through your nose. Your face shape literally changes.', priority: 'medium', icon: '👃' },
    { id: 'l6', title: 'Move Every 60 Minutes', desc: 'Sitting still for 1 hour undoes your workout', detail: 'Sitting for more than 60 minutes damages your blood vessels so badly that it CANCELS the benefits of your morning workout. Set a timer. Stand up. Walk for 2 minutes. Do some heel raises. Protect what you earned in the gym.', priority: 'medium', icon: '⏱️' },
    { id: 'l7', title: 'Seated Heel Raises', desc: 'Do these while sitting at your desk', detail: 'Can\'t walk after a meal? Just lift your heels up and down continuously for 10 minutes while sitting. This small movement cuts your blood sugar spike by 50%. Works at your desk, in class, anywhere. No one even notices you\'re doing it.', priority: 'medium', icon: '🦶' },
    { id: 'l8', title: 'Jump Daily', desc: '10-20 jumps. 2 minutes. Builds unbreakable bones.', detail: 'Jump rope or just jump in place — 10 to 20 times daily. This builds bone density that prevents fractures as you age. Takes 2 minutes. Most people who get fractures at 60+ could have prevented it by jumping daily at 20. Start now.', priority: 'medium', icon: '⬆️' },
  ],
  useful: [
    { id: 'l9', title: 'Sauna 4x/Week', desc: 'If accessible — 40% lower death risk', detail: 'Regular sauna users have 40% lower risk of dying from ANY cause. It heat-shocks your body into repair mode, improves blood flow to skin, and mimics the benefits of cardio. If you have access to one, use it. 20 minutes at high heat.', priority: 'low', icon: '🧖' },
    { id: 'l10', title: 'Cold Water Exposure', desc: 'Instant mood and energy boost', detail: 'Cold water triggers a massive release of feel-good chemicals in your brain. Even a cold face splash gives you a mood boost, energy surge, and mental clarity. Start with cold water on your face and work up from there.', priority: 'low', icon: '🧊' },
    { id: 'l11', title: 'Social Sports', desc: 'Tennis, badminton, dance, swimming', detail: 'Playing sports with other people gives you the HIGHEST return for both physical health AND mental health combined. It works your body in ways the gym can\'t (lateral movements, reaction time) while giving you social connection — the #1 factor in living longer.', priority: 'low', icon: '🎾', quickTags: ['Dance', 'Swim', 'Cycle', 'Pickleball'] },
  ],
  avoid: [
    { id: 'la1', title: 'Excessive Long-Distance Running', desc: 'Spikes stress hormones. Ages your face.', priority: 'avoid', icon: '🏃' },
    { id: 'la2', title: '90-Min Gym Sessions', desc: 'Waste of time. Short and intense wins.', priority: 'avoid', icon: '⏰' },
    { id: 'la3', title: 'Heavy Cardio While Undereating', desc: 'Wrecks your hormones. Dangerous.', priority: 'avoid', icon: '⚠️' },
  ]
};

// ── Mental Practices Data ──
export const mentalData = {
  topTier: [
    { id: 'm1', title: 'No Phone First 60 Min After Waking', desc: 'Win the morning = win the day', detail: 'The moment you check your phone, your brain enters REACTIVE mode — responding to other people\'s priorities, not yours. Keep the phone away for the first 60 minutes. You\'ll feel calmer, more focused, and in control of YOUR day, not everyone else\'s.', priority: 'high', icon: '📵' },
    { id: 'm2', title: 'Morning Input Fasting', desc: 'No news. No emails. No social. 60 min.', detail: 'News makes you anxious. Social media makes you compare. Emails make you reactive. Your brain needs time to boot up without being attacked by information. Protect your first 60 minutes. This alone changes how your entire day feels.', priority: 'high', icon: '🧘' },
    { id: 'm3', title: '10-Min Daily Journaling', desc: 'What do I feel? What triggered it? What do I need?', detail: 'You can\'t fix what you can\'t see. 10 minutes of writing these 3 questions makes your invisible emotional patterns VISIBLE. Once you see the pattern, you can break it. This isn\'t "woo-woo" — it\'s how you stop repeating the same mistakes.', priority: 'high', icon: '📝' },
    { id: 'm4', title: 'Grayscale Phone Mode', desc: 'Kills 30% of your screen time overnight', detail: 'Turn your phone to black and white. Suddenly Instagram isn\'t interesting. TikTok is boring. Your screen time drops 30% without ANY willpower. It works because your brain is attracted to colors — remove them and the addiction weakens. Toggle it in accessibility settings.', priority: 'high', icon: '⬛' },
    { id: 'm5', title: 'Turn Off Notification Badges', desc: 'Those red dots are designed to stress you', detail: 'Every red notification badge is engineered by billion-dollar companies to make you anxious enough to open the app. Turn them ALL off except calls and texts. You\'ll check apps when YOU want to, not when they want you to. Take back control.', priority: 'high', icon: '🔕' },
  ],
  highValue: [
    { id: 'm6', title: '"One Thing" Task List', desc: '1 task that makes today count', detail: 'Every morning, pick ONE thing that, if completed, makes the entire day a success. Do it FIRST, before anything else. Most people do 20 small tasks and miss the one big one that actually matters. Be different.', priority: 'medium', icon: '🎯' },
    { id: 'm7', title: '90-Min Focus Blocks', desc: 'Deep work + 20-min break', detail: 'Your brain works in 90-minute cycles. Work intensely for 90 minutes, then take a 20-minute movement break. This rhythm matches your biology. Try to push through without breaks and your output DROPS. Work WITH your brain, not against it.', priority: 'medium', icon: '🧠' },
    { id: 'm8', title: '10-Second Pause Before Reacting', desc: 'Your anger clears in 6 seconds', detail: 'When you feel anger or frustration, your "fight or flight" brain takes over. But it only lasts 6 seconds. Count to 10 before reacting — texting back, snapping at someone, making a decision. Those 10 seconds save relationships and prevent regret.', priority: 'medium', icon: '⏸️' },
    { id: 'm9', title: 'Brain Dump', desc: 'Get every thought out of your head onto paper', detail: 'Your brain is NOT a storage device — it\'s a processing device. Every unwritten task, worry, and idea is eating up your mental RAM. Dump it ALL onto paper. Every. Single. Thing. Watch your stress drop immediately as your mind clears.', priority: 'medium', icon: '🗒️' },
    { id: 'm10', title: 'Therapy / Counseling', desc: 'Not weakness. It\'s a cheat code.', detail: 'You go to the gym for your body. Therapy is the gym for your mind. Talking to a professional about your patterns, fears, and struggles isn\'t weakness — it\'s one of the highest-leverage investments you can make in yourself. Period.', priority: 'medium', icon: '🗣️' },
    { id: 'm11', title: 'One Real Conversation Per Week', desc: 'Not texts. Real connection.', detail: 'One meaningful face-to-face conversation per week with someone you care about. Not WhatsApp. Not Instagram DMs. Sit down, look them in the eye, and actually talk. Social connection is the #1 predictor of how long and how well you live.', priority: 'medium', icon: '🤝' },
  ],
  useful: [
    { id: 'm12', title: 'Feynman Technique', desc: 'Can\'t explain it simply? You don\'t get it.', detail: 'Take any concept and try to explain it to a 12-year-old. Wherever you get stuck, that\'s your knowledge gap. Go back, learn it, and simplify again. This is the fastest way to truly master anything. Taught by a Nobel Prize winner.', priority: 'low', icon: '💡' },
    { id: 'm13', title: 'Read 10 Pages Daily', desc: 'Physical book. That\'s 18 books/year.', detail: 'Just 10 pages a day from a real book. Not a phone screen — a physical book. Your comprehension is higher, your eyes rest, and it becomes the perfect wind-down ritual before bed. 10 pages × 365 days = 18 books a year without trying hard.', priority: 'low', icon: '📖' },
    { id: 'm14', title: '2-Minute Rule', desc: 'Takes less than 2 min? Do it RIGHT NOW.', detail: 'That text you need to reply to, that dish in the sink, that email — if it takes under 2 minutes, do it IMMEDIATELY. Tiny deferred tasks pile up into a mountain of stress. Clear them instantly and your mental load stays light.', priority: 'low', icon: '⚡' },
  ],
  avoid: [
    { id: 'ma1', title: '"Productive" Scrolling', desc: 'Educational reels are still dopamine traps', priority: 'avoid', icon: '📱' },
    { id: 'ma2', title: 'Buying More Planners/Apps', desc: 'Planning isn\'t doing. Start executing.', priority: 'avoid', icon: '📋' },
    { id: 'ma3', title: 'Constant Background Noise', desc: 'Your brain needs silence to heal', priority: 'avoid', icon: '🔇' },
  ]
};

// ── Supplements Data ──
export const supplementsData = {
  topTier: [
    { id: 'sp1', title: 'Vitamin D3 + K2', desc: '2000-4000 IU D3 + 100mcg K2', detail: 'Most people are Vitamin D deficient and don\'t know it. Low D = weak bones, weak immunity, bad skin, low mood. D3 gives your body what the sun should but doesn\'t (especially indoors). K2 makes sure the calcium goes to your bones, not your arteries. Get your levels tested.', priority: 'high', icon: '☀️', caution: false },
    { id: 'sp2', title: 'Iron (Only if Tested Low)', desc: '#1 missed cause of looking dull and tired', detail: 'Pale skin, hair falling out, constant tiredness, brain fog — and nobody thinks to check iron. Low ferritin is the most MISSED cause of looking terrible, especially in women. Get a ferritin blood test. If it\'s low, supplement. If it\'s normal, don\'t. Simple.', priority: 'high', icon: '🩸', caution: true },
    { id: 'sp3', title: 'Vitamin B12', desc: 'Energy, nerves, mood — the basics', detail: 'If you\'re vegetarian, you\'re almost certainly low in B12. Low B12 = zero energy, tingling hands, bad mood, foggy brain. It\'s cheap to supplement and the difference is noticeable within weeks. Get tested, then supplement if needed.', priority: 'high', icon: '⚡', caution: false },
    { id: 'sp4', title: 'Omega-3 Fish Oil', desc: 'Anti-inflammation for your entire body', detail: 'Omega-3 calms inflammation everywhere — skin, gut, brain, joints. If you don\'t eat fish regularly, you need this supplement. Your skin barrier gets stronger, your mood improves, and your body stops being in constant "war mode." One of the most researched supplements ever.', priority: 'high', icon: '🐟', caution: false },
    { id: 'sp5', title: 'Magnesium Glycinate', desc: '200-400mg at night. Sleep + calm.', detail: 'Most people are magnesium deficient. Low magnesium = poor sleep, muscle twitches, anxiety, and stress. Take 200-400mg before bed and you\'ll sleep deeper, feel calmer, and recover faster. One of the few supplements where you can FEEL the difference.', priority: 'high', icon: '💊', caution: false },
  ],
  highValue: [
    { id: 'sp6', title: 'Creatine Monohydrate', desc: '5g daily. Not just for gym bros.', detail: 'Creatine isn\'t just for bodybuilders. It powers your BRAIN, reduces mental fatigue, fights depression, and makes your muscles look fuller. Women and vegetarians benefit the MOST. 5g daily in water. Cheap, safe, and backed by more research than almost any other supplement.', priority: 'medium', icon: '💪', caution: false },
    { id: 'sp7', title: 'Zinc', desc: '15-30mg daily. Clears skin, boosts immunity.', detail: 'Zinc heals acne, speeds up wound healing, and strengthens your immune system. Stress and poor diet drain zinc fast. 15-30mg daily — but don\'t go above 40mg or you\'ll deplete copper. A small dose with big visible results.', priority: 'medium', icon: '🛡️', caution: false },
    { id: 'sp8', title: 'Collagen + Vitamin C', desc: '15g collagen + 200mg Vit C together', detail: 'Your body builds collagen (the protein that keeps skin tight) using two things: collagen peptides and Vitamin C. Take them TOGETHER 1 hour before exercise or before bed. Visible skin improvement in 8 weeks. Your skin gets firmer and bouncier.', priority: 'medium', icon: '✨', caution: false },
    { id: 'sp9', title: 'Inositol (for PCOS)', desc: 'Doctor-supervised ONLY', detail: 'If you have PCOS, inositol can help with insulin sensitivity and hormone balance. But this is one you MUST take under doctor supervision, especially if you have any liver history. Don\'t self-prescribe this one.', priority: 'medium', icon: '🏥', caution: true },
  ],
  useful: [
    { id: 'sp10', title: 'Wheat Germ (Spermidine)', desc: '1-2 tbsp daily. Hair growth booster.', detail: 'Wheat germ triggers your body\'s cellular cleanup system and extends the hair growth phase. Visible hair thickness improvement in 3-4 months. Sprinkle on yogurt or smoothies. One of the few natural compounds that genuinely promotes hair density.', priority: 'low', icon: '🌾', caution: false },
    { id: 'sp11', title: 'Glycine', desc: '3g before bed. Sleep + detox.', detail: 'Glycine cools your body for faster sleep AND boosts your body\'s #1 detox molecule (glutathione). Take 3g on empty stomach before bed. Double benefit for the price of one cheap supplement.', priority: 'low', icon: '🧪', caution: false },
  ],
  avoid: [
    { id: 'spa1', title: 'Berberine', desc: 'Can stress your liver. Doctor approval only.', detail: 'Berberine is powerful but can put serious stress on your liver. If you have ANY liver history, skip this completely unless your doctor specifically clears it.', priority: 'avoid', icon: '⚠️', caution: true },
    { id: 'spa2', title: 'Melatonin (Under 30)', desc: 'Your body makes enough. Fix your light habits.', priority: 'avoid', icon: '💊' },
    { id: 'spa3', title: 'Fat Burners / Detox Teas', desc: 'Scam. Can damage your liver.', priority: 'avoid', icon: '🚫' },
    { id: 'spa4', title: 'Random Herbs for Hormones', desc: 'Unregulated and potentially dangerous', priority: 'avoid', icon: '🌿' },
  ]
};

// ── Skin Data ──
export const skinData = {
  internal: [
    { id: 'sk1', title: 'Sleep 7.5–8 Hours', desc: 'Skin does 60% of repairs during sleep', detail: 'Your skin fixes itself while you sleep. Skip sleep and your skin literally CAN\'T repair. Dark circles, dullness, breakouts — all traceable back to poor sleep. This isn\'t a skin tip — it\'s THE skin tip. Everything else is secondary.', priority: 'high', icon: '😴' },
    { id: 'sk2', title: 'SPF 50 Every Single Day', desc: 'Rain or shine. Indoors or out.', detail: 'UV rays come through clouds and windows. Every day without sunscreen is a day your skin ages faster. Dark spots, wrinkles, uneven tone — 90% of visible skin aging comes from sun damage, NOT age. SPF 50 is your #1 anti-aging product. Everything else is a waste without it.', priority: 'high', icon: '🧴' },
    { id: 'sk3', title: 'Hydrate 2.5–3L Water', desc: 'Your skin is 64% water', detail: 'Dehydrated skin looks dull, shows lines more, and heals slower. Drink 2.5-3L daily and watch your skin plump up within DAYS. It\'s the cheapest, easiest skincare product that exists — and most people aren\'t using enough of it.', priority: 'high', icon: '💧' },
    { id: 'sk4', title: 'Eliminate Sugar', desc: 'Sugar PERMANENTLY damages skin collagen', detail: 'Sugar bonds to your skin\'s collagen and PERMANENTLY destroys it. This process is irreversible. Every sugary snack is literally melting your skin\'s structural support. Wrinkles, sagging, dullness — sugar is behind it all. This damage cannot be undone. Only prevented.', priority: 'high', icon: '🍬' },
    { id: 'sk5', title: 'Protein + Vitamin C + Omega-3', desc: 'The 3 building blocks of glowing skin', detail: 'Your skin is BUILT from protein. Vitamin C is the tool your body uses to build collagen. Omega-3 keeps the skin barrier strong. Missing any ONE of these and your skin can\'t rebuild properly. Eat all three daily. Non-negotiable.', priority: 'high', icon: '🧬' },
  ],
  external: [
    { id: 'sk6', title: 'Morning Routine', desc: 'Cleanser → Moisturizer → SPF 50. That\'s it.', detail: 'Stop with the 10-step routine. Your morning needs 3 things: gentle cleanser, lightweight moisturizer, SPF 50. More products = more irritation = worse skin. Simple and consistent beats complex and sporadic every time.', priority: 'medium', icon: '🌅' },
    { id: 'sk7', title: 'Night Routine', desc: 'Cleanser → Moisturizer. Lukewarm water only.', detail: 'Night routine: gentle cleanser with LUKEWARM water (hot water strips your skin\'s oils), then moisturizer. That\'s IT. Your skin repairs itself overnight — just clean it and moisturize it. Stop overcomplicating this.', priority: 'medium', icon: '🌙' },
    { id: 'sk8', title: 'After 3 Weeks: Add ONE Active', desc: 'Niacinamide 4-5% OR Azelaic acid 10%', detail: 'Only AFTER 3 weeks of consistent basic routine should you add one active ingredient. ONE. Not five. Either niacinamide for brightness or azelaic acid for texture. Patch test first. Give it 6-8 weeks before judging results. Patience is the secret ingredient.', priority: 'medium', icon: '🧪' },
    { id: 'sk9', title: 'Red Light Therapy', desc: '10 min in the morning. If you have access.', detail: 'Red light boosts energy production in your skin cells, evening out tone and reducing signs of aging. Visible results in as little as 7 days. If you have access to a panel, use it. 10 minutes in the morning on your face.', priority: 'low', icon: '🔴' },
  ],
  avoid: [
    { id: 'ska1', title: 'Touching Face / Picking Pimples', desc: 'Bacteria + scarring. Hands off.', priority: 'avoid', icon: '🤚' },
    { id: 'ska2', title: 'Hot Water on Face', desc: 'Strips oils. Causes redness.', priority: 'avoid', icon: '🔥' },
    { id: 'ska3', title: 'DIY Remedies', desc: 'Lemon, toothpaste = skin damage', priority: 'avoid', icon: '🍋' },
    { id: 'ska4', title: 'Fairness/Steroid Creams', desc: 'Thins your skin. Wrecks hormones.', priority: 'avoid', icon: '🚫' },
    { id: 'ska5', title: 'Multiple Actives at Once', desc: 'More products = more problems', priority: 'avoid', icon: '⚗️' },
    { id: 'ska6', title: 'Old Pillowcases', desc: 'Change every 3-4 days', priority: 'avoid', icon: '🛏️' },
  ]
};

// ── Environment Data ──
export const environmentData = {
  topTier: [
    { id: 'e1', title: 'Phone Charges in Kitchen', desc: 'Out of bedroom. Out of your life at night.', detail: 'This single change fixes your sleep, your scrolling, your morning routine, and your mental health — all at once. The phone leaves your bedroom tonight. No negotiation. No "I\'ll just keep it on silent." OUT.', priority: 'high', icon: '🔌' },
    { id: 'e2', title: 'Buy an Alarm Clock', desc: '₹500 that changes your life', detail: 'The only reason your phone sleeps next to you is "I need it for my alarm." Spend ₹500 on an alarm clock and that excuse dies forever. One purchase. Lifetime of better sleep. Best money you\'ll ever spend.', priority: 'high', icon: '⏰' },
    { id: 'e3', title: 'Make Your Bed Immediately', desc: 'First win of the day. Takes 2 minutes.', detail: 'A messy room = a messy mind. Make your bed the second you get up. It takes 2 minutes and sets the tone for the entire day. You\'ve already accomplished something before most people wake up. Start with a win.', priority: 'high', icon: '🛏️' },
    { id: 'e4', title: 'Cool, Dark Bedroom', desc: '20°C + pitch black = perfect sleep cave', detail: 'Your bedroom should be cold, dark, and quiet — like a cave. Blackout curtains or eye mask. Fan or AC. No standby lights, no phone glow, no blinking LEDs. Design your room for one purpose: deep, uninterrupted sleep.', priority: 'high', icon: '🌑' },
  ],
  highValue: [
    { id: 'e5', title: 'Clear Kitchen Counter', desc: 'Clean space = better food choices', detail: 'A cluttered kitchen makes you order food. A clean kitchen makes you cook. Clear your counter and watch your eating habits improve automatically. Your environment shapes your behavior more than motivation ever will.', priority: 'medium', icon: '🍳' },
    { id: 'e6', title: 'Water Bottle + Book by Bed', desc: 'Replace phone reach with something healthy', detail: 'When you reach for your nightstand, what\'s there? Phone = scroll for 2 hours. Book + water = hydrate and wind down. Swap what\'s within arm\'s reach and your nighttime habits change automatically. Zero willpower needed.', priority: 'medium', icon: '📚' },
    { id: 'e7', title: 'Delete Apps + Set Timers', desc: 'Add friction to bad habits', detail: 'Delete social apps from your home screen. Set 30-minute daily timers. Every layer of friction you add = less scrolling. Make it HARD to waste time and EASY to do something useful. Design your phone for productivity, not distraction.', priority: 'medium', icon: '📱' },
    { id: 'e8', title: 'Sunday 1-Hour Reset', desc: 'Prep meals, clothes, and the whole week', detail: 'Spend 1 hour every Sunday: prep meals, lay out clothes, review your calendar, set 3 priorities for the week. This single hour saves you 5+ hours of stress and bad decisions during the week. The smartest hour you\'ll spend.', priority: 'medium', icon: '📅' },
  ]
};

// ── Habits to Eliminate (Ranked by Damage) ──
export const eliminateData = [
  { id: 'el1', rank: 1, title: 'Phone in Bed / Late-Night Scrolling', desc: 'THE most destructive daily habit', detail: 'This single habit destroys your sleep, your skin, your mood, your focus, and your self-control — ALL AT ONCE. Every minute of scrolling in bed is a minute stolen from your body\'s repair time. This is habit #1 to kill because it makes everything else impossible.', priority: 'avoid', icon: '📱' },
  { id: 'el2', rank: 2, title: 'Skipping Meals + Late-Night Binges', desc: 'The cycle that\'s ruining you', detail: 'Skip breakfast → crash by afternoon → survive on snacks → binge at midnight → feel guilty → sleep late → repeat. Sound familiar? You\'re stuck in a CYCLE, not a discipline problem. 3 meals at fixed times breaks this loop in 3 days.', priority: 'avoid', icon: '🍔' },
  { id: 'el3', rank: 3, title: 'Daily Sugar + Packaged Food', desc: 'Aging you 10 years from inside', detail: 'Sugar permanently damages your collagen. Packaged food inflames your gut. Together they create puffy face, dull skin, breakouts, and zero energy. Removing this ONE category of food transforms how you look AND feel within weeks. Not months. Weeks.', priority: 'avoid', icon: '🍭' },
  { id: 'el4', rank: 4, title: 'Mouth Breathing', desc: 'Silently reshaping your face — badly', detail: 'Mouth breathing shrinks your jaw, makes your face longer, worsens posture, and keeps your body in permanent stress mode. Tape your mouth during sleep if needed. This sounds extreme but the face shape changes are real and documented.', priority: 'avoid', icon: '😮' },
  { id: 'el5', rank: 5, title: 'Alcohol Before Sleep', desc: 'You pass out. You don\'t sleep.', detail: 'Alcohol knocks you unconscious — that\'s NOT sleeping. Your deep sleep and dream sleep are destroyed. You wake up tired, puffy, and moody. Your heart races all night. One drink before bed costs you an entire night of quality rest.', priority: 'avoid', icon: '🍺' },
  { id: 'el6', rank: 6, title: 'Coffee Before 10 AM on Empty Stomach', desc: 'You\'re making your anxiety WORSE', detail: 'Your stress hormones are already high in the morning. Adding caffeine on an empty stomach cranks anxiety up to maximum. Wait until 10 AM, eat something first, and your coffee actually WORKS without the jitters and crash.', priority: 'avoid', icon: '☕' },
  { id: 'el7', rank: 7, title: 'Sitting for 60+ Min Without Moving', desc: 'Cancels your morning workout', detail: 'Sitting still for over an hour damages your blood vessels so badly that it erases the benefits of exercise. Your morning run means NOTHING if you sit motionless for 8 hours after. Stand up every hour. Walk for 2 minutes. Protect your investment.', priority: 'avoid', icon: '🪑' },
  { id: 'el8', rank: 8, title: 'DIY Skin / Fairness Creams', desc: 'Doing more damage than doing nothing', detail: 'Lemon on your face? Burns. Toothpaste on pimples? Irritation. Fairness creams? Contain steroids that thin your skin permanently. These "remedies" are WORSE than doing nothing. Use dermatologist-approved products or just cleanser + moisturizer + SPF.', priority: 'avoid', icon: '🧴' },
  { id: 'el9', rank: 9, title: '"Detox" Products & Random Supplements', desc: 'Your liver IS your detox system', detail: 'Your body already has the best detox system ever made — your liver and kidneys. "Detox teas" don\'t detox anything. They\'re scams. Random supplements without testing can actually DAMAGE your liver. Stop buying garbage. Get blood tests instead.', priority: 'avoid', icon: '💊' },
  { id: 'el10', rank: 10, title: 'All-or-Nothing Thinking', desc: 'One bad day is NOT a failed life', detail: 'Ate junk today? So what. Skipped the gym? Tomorrow exists. The all-or-nothing mindset is what makes people quit after ONE mistake. Champions don\'t have perfect days — they have quick resets. Fell off? Get back on. That\'s it. That\'s the whole secret.', priority: 'avoid', icon: '🧠' },
];

// ── Anti-Aging / Biohacking Data ──
export const antiAgingData = [
  { id: 'aa1', title: 'Stop Eating After 8 PM', desc: '8-10 hour eating window', detail: 'Late-night eating forces your body to digest when it should be repairing. Your skin ages faster, your gut suffers, and you wake up puffy. Close the kitchen by 8 PM. Your body does its best repair work on an empty stomach.', priority: 'high', icon: '⏳', category: 'Diet' },
  { id: 'aa2', title: 'High Protein at Every Meal', desc: '30-40g per meal for muscle preservation', detail: 'After 25, you start losing muscle every year unless you fight it. High protein at every meal tells your body "keep building, don\'t break down." This single habit is the difference between aging gracefully and aging rapidly.', priority: 'high', icon: '🥩', category: 'Diet' },
  { id: 'aa3', title: 'Steam/Boil, Don\'t Fry', desc: 'Frying creates wrinkle chemicals', detail: 'High-heat cooking (frying, grilling) creates chemicals that literally wrinkle your skin from inside. Switch to steaming, boiling, or poaching. Same nutrition, zero skin damage. Your cooking method directly affects how fast you age.', priority: 'high', icon: '♨️', category: 'Diet' },
  { id: 'aa4', title: 'Chop Broccoli 40 Min Early', desc: 'Activates the anti-aging compound', detail: 'Chop broccoli and wait 40 minutes before cooking. This activates a powerful compound that tells your body to clean out damaged, aging cells. Broccoli sprouts are even more powerful. The cheapest anti-aging hack in your kitchen.', priority: 'medium', icon: '🥦', category: 'Diet' },
  { id: 'aa5', title: 'Wild Blueberries Daily', desc: 'The #1 anti-aging fruit', detail: 'Wild blueberries are loaded with compounds that protect your cells, fight dark spots, and improve blood flow to your brain. Eat them frozen (they\'re stronger that way). The most powerful anti-aging food you can buy at any grocery store.', priority: 'medium', icon: '🫐', category: 'Diet' },
  { id: 'aa6', title: 'Zone 2 Cardio', desc: '3×45min/week. The longevity exercise.', detail: 'Light jogging or brisk walking where you can still talk — this is the #1 exercise for living longer. It cleans out damaged cells and builds new energy systems in your body. Intense workouts are great, but THIS is what keeps you young decades from now.', priority: 'high', icon: '🫀', category: 'Lifestyle' },
  { id: 'aa7', title: 'Sauna Sessions', desc: '4×20min/week if accessible', detail: 'Regular sauna users have dramatically lower rates of dying from any cause. Heat triggers your body\'s deep repair systems. If you have access, use it. 20 minutes at high heat, 4 times a week. Few things have this strong an effect on longevity.', priority: 'medium', icon: '🧖', category: 'Lifestyle' },
  { id: 'aa8', title: 'Daily Jumping', desc: '10-20 jumps. 2 minutes for future-proof bones.', detail: 'Jump rope or just jump in place daily. This builds bone density that prevents fractures in your 50s and 60s. The people who break hips at 70 are the ones who didn\'t jump at 20. 2 minutes today, unbreakable bones for decades.', priority: 'medium', icon: '⬆️', category: 'Lifestyle' },
  { id: 'aa9', title: 'Consistent Sleep Schedule', desc: 'Same wake time ± 30 min daily', detail: 'Sleep consistency affects your biological age more than sleep duration. Irregular sleep accelerates aging at the DNA level. Wake up at the same time every day, weekends included. Your cells are literally aging based on your sleep rhythm.', priority: 'high', icon: '⏰', category: 'Lifestyle' },
  { id: 'aa10', title: 'Social Sports', desc: 'Play with people. Live longer.', detail: 'Playing sports with friends combines movement, reaction training, and social connection — the three strongest predictors of how long you live. Join a badminton group, play tennis, dance. It doesn\'t matter what. Just play with humans.', priority: 'medium', icon: '🎾', category: 'Lifestyle' },
  { id: 'aa11', title: 'Wheat Germ Daily', desc: '1-2 tbsp for cellular cleanup', detail: 'Wheat germ triggers your body\'s cellular recycling system — cleaning out old, damaged cells and replacing them with fresh ones. It also extends hair growth cycles. Sprinkle on yogurt or cereals. Visible hair improvement in 3-4 months.', priority: 'medium', icon: '🌾', category: 'Supplement' },
  { id: 'aa12', title: 'Red Light Therapy', desc: '10 min AM. Skin cells supercharged.', detail: 'Red light (660/850nm) supercharges your skin cells\' energy production. Skin tone evens out. Eye whites get brighter. Visible results in 7 days. If you have access to a panel, 10 minutes every morning on your face and neck.', priority: 'medium', icon: '🔴', category: 'Biohacking' },
  { id: 'aa13', title: 'Tongue Scraping + Nose Breathing', desc: 'Oral health = vascular health', detail: 'Tongue scraping removes bacteria that destroy important compounds in your mouth. Nose breathing preserves nitric oxide which keeps your blood vessels flexible. Together they lower your resting heart rate and improve circulation.', priority: 'low', icon: '👅', category: 'Biohacking' },
  { id: 'aa14', title: 'Kiwi Before Bed', desc: '2 kiwis with skin, 1 hour before sleep', detail: 'Two kiwis (eat the skin too) one hour before bed boost your sleep quality and fill you with antioxidants. You\'ll notice brighter under-eyes the next morning. A simple, delicious sleep hack that actually works.', priority: 'low', icon: '🥝', category: 'Biohacking' },
];

// ── Antioxidant Foods ──
export const antioxidantFoods = [
  { name: 'Cloves', icon: '🌺', benefit: 'Most powerful antioxidant spice on earth' },
  { name: 'Broccoli', icon: '🥦', benefit: 'Activates your body\'s cleanup system' },
  { name: 'Cinnamon', icon: '🫙', benefit: 'Controls blood sugar + fights aging' },
  { name: 'Walnuts', icon: '🥜', benefit: 'Brain food + healthy fats' },
  { name: 'Green Tea', icon: '🍵', benefit: 'Burns fat + protects cells' },
  { name: 'Arjuna Powder', icon: '🌿', benefit: 'Ancient heart protector' },
  { name: 'Turmeric', icon: '🟨', benefit: 'Nature\'s anti-inflammatory' },
  { name: 'Ginger', icon: '🫚', benefit: 'Kills pain + helps digestion' },
  { name: 'Fenugreek Seeds', icon: '🌱', benefit: 'Balances blood sugar + hormones' },
  { name: 'Tulsi', icon: '🌿', benefit: 'Calms stress at the root' },
  { name: 'Black Pepper', icon: '⚫', benefit: 'Makes everything else absorb 20x better' },
  { name: 'Fennel Seeds', icon: '🌿', benefit: 'Heals your gut + reduces bloating' },
  { name: 'Lemon', icon: '🍋', benefit: 'Vitamin C powerhouse' },
];

// ── Digital Wellness / Phone Data ──
export const dopamineData = [
  { id: 'dp1', title: 'Unplug by 9:30 PM', desc: 'Full digital shutdown. No exceptions.', priority: 'high', icon: '🔌' },
  { id: 'dp2', title: 'Grayscale Mode', desc: 'Makes your phone boring. That\'s the point.', priority: 'high', icon: '⬛' },
  { id: 'dp3', title: 'Kill All Notifications', desc: 'Keep only calls and texts active', priority: 'high', icon: '🔕' },
  { id: 'dp4', title: 'Delete Triggering Apps', desc: 'If you can\'t control it, remove it', priority: 'high', icon: '🗑️' },
  { id: 'dp5', title: 'Set App Timers', desc: '30-min daily limit. Be strict.', priority: 'medium', icon: '⏱️' },
  { id: 'dp6', title: 'Hide Your Phone', desc: 'Out of sight = out of mind', priority: 'medium', icon: '👁️' },
  { id: 'dp7', title: 'Charge Away from Bed', desc: 'Kitchen. Bathroom. Anywhere but bedroom.', priority: 'high', icon: '🔋' },
  { id: 'dp8', title: 'Use Alarm Clock', desc: '₹500 that ends phone-in-bed forever', priority: 'medium', icon: '⏰' },
  { id: 'dp9', title: 'No Phone AM (60 min)', desc: 'Win the morning before the world attacks', priority: 'high', icon: '🌅' },
  { id: 'dp10', title: 'No Phone PM (after 9:30)', desc: 'Your brain needs to shut down', priority: 'high', icon: '🌙' },
  { id: 'dp11', title: 'No Bed Scrolling', desc: 'Bed is for sleep. Nothing else.', priority: 'high', icon: '🛏️' },
  { id: 'dp12', title: 'Close All Browser Tabs', desc: 'Each tab is mental weight', priority: 'low', icon: '🗂️' },
  { id: 'dp13', title: 'Turn Off Badges', desc: 'Red dots are engineered anxiety', priority: 'medium', icon: '🔴' },
];

// ── Productivity Data ──
export const productivityData = [
  { id: 'pr1', title: 'Do the ONE Thing First', desc: 'Before anything else. The task that matters.', detail: 'Before emails, before social media, before meetings — do the ONE task that makes your day a win. Most people do 20 easy things and avoid the 1 important thing. Flip it. Do the hard thing first. Everything after is a bonus.', priority: 'high', icon: '🎯' },
  { id: 'pr2', title: 'Brain Dump Everything', desc: 'Get it out of your head. Now.', detail: 'Every thought, worry, task, and idea — write it ALL down. Your brain is a processor, not a hard drive. The moment you dump everything onto paper, your anxiety drops and your focus sharpens instantly. Do this every morning.', priority: 'medium', icon: '🗒️' },
  { id: 'pr3', title: '90-Min Focus Blocks', desc: 'Deep work in sync with your biology', detail: 'Your brain cycles in 90-minute waves. Work deeply for 90 minutes, then move for 20. Trying to focus for 4 hours straight makes you LESS productive. Work with your brain\'s natural rhythm and you\'ll accomplish more in 3 hours than most do in 8.', priority: 'high', icon: '🧠' },
  { id: 'pr4', title: 'Flow Block', desc: 'Phone on airplane. Single tab. Timer on.', detail: 'Create a 90-minute bubble where NOTHING can reach you. Phone on airplane mode, all notifications off, single browser tab open. This is where your best work happens. Protect this time like your career depends on it — because it does.', priority: 'medium', icon: '🌊' },
  { id: 'pr5', title: '2-Minute Rule', desc: 'Under 2 min? Do it NOW.', detail: 'That quick reply, that dish, that small task — if it takes less than 2 minutes, DO IT IMMEDIATELY. Tiny deferred tasks pile up into a mountain of stress and paralysis. Clear them instantly. Keep your mind light and fast.', priority: 'medium', icon: '⚡' },
  { id: 'pr6', title: 'Close All Tabs', desc: 'Digital clutter = mental clutter', detail: 'Every open browser tab is a tiny commitment your brain is tracking. 30 tabs = 30 incomplete thoughts = constant background stress. Close everything. Bookmark if needed. Your focus will sharpen immediately.', priority: 'low', icon: '🗂️' },
  { id: 'pr7', title: 'Sunday Reset (1 Hour)', desc: 'Prep the week. Save 5+ hours.', detail: 'One hour on Sunday: prep meals, lay out clothes, review calendar, set top 3 goals for the week. This hour saves you 5+ hours of decision fatigue, stress, and wasted time during the week. The highest-ROI hour of your week.', priority: 'medium', icon: '📅' },
  { id: 'pr8', title: 'Learn by Teaching', desc: 'Can\'t explain it simply? You don\'t know it.', detail: 'Study something, then try to explain it to a 12-year-old. Wherever you get stuck = knowledge gap. Go back and learn it properly. This method (used by a Nobel Prize winner) is the fastest path to truly understanding anything.', priority: 'low', icon: '📚' },
];

// ── Social Data ──
export const socialData = [
  { id: 'so1', title: 'Active Listening', desc: 'Full attention. No phone. Eye contact.', priority: 'high', icon: '👂' },
  { id: 'so2', title: 'Pause Before Responding', desc: '10 seconds. Your anger clears in 6.', priority: 'medium', icon: '⏸️' },
  { id: 'so3', title: 'Be Specific in Compliments', desc: '"That was good" → "I noticed how you..."', detail: 'Vague compliments feel empty. Specific observations feel genuine. Instead of "nice job," say "I noticed how you handled that tricky situation — that was impressive." Specificity shows you were actually paying attention. People remember this.', priority: 'medium', icon: '🎯' },
  { id: 'so4', title: 'Show Up in Person', desc: 'Being there > 100 texts', detail: 'A text says "I thought of you." Showing up says "you matter enough for me to be here." Physical presence in important moments creates bonds that digital communication never can. When someone needs you, GO there.', priority: 'high', icon: '🤝' },
  { id: 'so5', title: 'Schedule Real Hangouts', desc: 'Put it in the calendar or it won\'t happen', detail: '"Let\'s hang out sometime" = never. Put a specific day, time, and place in the calendar. Treat friendships like important meetings. Unscheduled good intentions die 95% of the time. Schedule it or lose it.', priority: 'medium', icon: '📅' },
  { id: 'so6', title: '"Yes, And..." Approach', desc: 'Build on ideas. Don\'t shut them down.', detail: 'Instead of "no, but..." try "yes, and..." This one language shift makes you the person people WANT to brainstorm with, hang out with, and work with. You become someone who builds people up instead of shutting them down.', priority: 'low', icon: '💬' },
];

// ── Medical Data ──
export const medicalData = {
  appointments: [
    { title: 'Gynecologist', desc: 'PCOS screening, period irregularities', icon: '👩‍⚕️' },
    { title: 'Physician / Endocrinologist', desc: 'Hormones, thyroid, metabolic health', icon: '🩺' },
    { title: 'Hepatologist', desc: 'If liver concerns persist', icon: '🏥' },
  ],
  labs: [
    'CBC', 'Ferritin', 'Vitamin D', 'B12', 'TSH', 'Free T4', 'HbA1c',
    'Fasting Glucose', 'Lipid Profile', 'AST', 'ALT', 'Bilirubin',
    'ALP', 'GGT', 'Albumin', 'Testosterone', 'DHEAS', 'LH', 'FSH',
    'Prolactin', 'Pelvic Ultrasound'
  ],
  tellDoctors: [
    'Liver surgery details',
    'Jaundice history (6× occurrences)',
    'All allergies',
    'All current supplements'
  ],
  redFlags: [
    { title: 'Yellow Eyes or Skin', desc: 'Jaundice — go to hospital NOW', icon: '🟡' },
    { title: 'Dark Urine', desc: 'Liver or kidney issue — get tested', icon: '🟤' },
    { title: 'Severe Abdominal Pain', desc: 'Could be emergency — don\'t wait', icon: '🔴' },
    { title: 'Heavy Bleeding', desc: 'Hormonal emergency — see doctor today', icon: '🩸' },
    { title: 'Self-Harm Thoughts', desc: 'Call crisis helpline immediately', icon: '💜' },
  ]
};

// ── Daily Routine ──
export const dailyRoutine = [
  { time: '7:00 AM', action: 'Wake Up', desc: 'Same time daily. Alarm across room.', icon: '⏰', period: 'morning' },
  { time: '7:05 AM', action: 'Sunlight + Water', desc: '10-15 min outside + 500ml water', icon: '☀️', period: 'morning' },
  { time: '7:30 AM', action: 'Protein Breakfast', desc: 'Phone stays away. 60 min no-phone.', icon: '🍳', period: 'morning' },
  { time: '10:30 AM', action: 'First Coffee', desc: 'After food. With nuts or fruit.', icon: '☕', period: 'morning' },
  { time: '1:00 PM', action: 'Biggest Meal', desc: 'Protein + veggies + carb + curd', icon: '🥗', period: 'afternoon' },
  { time: '1:30 PM', action: 'Walk 10 Min', desc: 'Any pace. Just move.', icon: '🚶', period: 'afternoon' },
  { time: '4:30 PM', action: 'Smart Snack', desc: 'Fruit + roasted chana or buttermilk', icon: '🍎', period: 'afternoon' },
  { time: '5:30 PM', action: 'Workout', desc: 'Lift or walk. 20-45 min.', icon: '💪', period: 'evening' },
  { time: '7:30 PM', action: 'Light Dinner', desc: 'Kitchen closes after this.', icon: '🍽️', period: 'evening' },
  { time: '9:00 PM', action: 'Dim Lights', desc: 'Warm lamps only. Brain wind-down.', icon: '💡', period: 'night' },
  { time: '9:30 PM', action: 'Phone OUT', desc: 'Charging in kitchen. Not bedroom.', icon: '📵', period: 'night' },
  { time: '10:00 PM', action: 'Wind Down', desc: 'Book, journal, stretch, skincare', icon: '📖', period: 'night' },
  { time: '10:30 PM', action: 'Lights Off', desc: 'Deep sleep. Body repairs.', icon: '🌙', period: 'night' },
];

// ── Weekly Structure ──
export const weeklyStructure = [
  { day: 'Monday', activity: 'Strength Training', duration: '15-20 min', icon: '🏋️', color: '#a78bfa' },
  { day: 'Tuesday', activity: 'Brisk Walk / Cycle', duration: '25 min (Zone 2)', icon: '🚴', color: '#06b6d4' },
  { day: 'Wednesday', activity: 'Strength Training', duration: '15-20 min', icon: '🏋️', color: '#a78bfa' },
  { day: 'Thursday', activity: 'Brisk Walk / Cycle', duration: '25 min (Zone 2)', icon: '🚴', color: '#06b6d4' },
  { day: 'Friday', activity: 'Strength Training', duration: '15-20 min', icon: '🏋️', color: '#a78bfa' },
  { day: 'Saturday', activity: 'Fun Activity', duration: '30+ min (dance/sport/swim)', icon: '🎾', color: '#f472b6' },
  { day: 'Sunday', activity: 'Rest + Prep', duration: 'Stretch + plan the week', icon: '🧘', color: '#34d399' },
];

// ── Results Timeline ──
export const resultsTimeline = [
  { timeframe: '1-2 Weeks', result: 'Energy stabilizes. Waking up gets easier.', icon: '⚡' },
  { timeframe: '2-3 Weeks', result: 'Face less puffy. Cravings fade. Skin brighter.', icon: '✨' },
  { timeframe: '4-6 Weeks', result: 'Visible glow. Dark spots fading. Habits on autopilot.', icon: '🌟' },
  { timeframe: '8-12 Weeks', result: 'Major transformation. Body + skin + confidence.', icon: '💪' },
  { timeframe: '8-16 Weeks', result: 'Hair gets thicker (it\'s slow but worth the wait).', icon: '💇' },
  { timeframe: '3+ Months', result: 'New default. This is just who you are now.', icon: '🏆' },
];

// ── Key Insights ──
export const keyInsights = [
  { id: 'i1', text: 'Wake time controls sleep time — not the other way around. Force 7 AM and 10:30 PM sleep follows automatically.', category: 'Sleep' },
  { id: 'i2', text: 'Drinking MORE water reduces bloating. Your body holds water when it\'s dehydrated. Give it enough and it lets go.', category: 'Diet' },
  { id: 'i3', text: 'Puffy face at normal weight = stress + water retention, not fat. Fix your sleep and watch it disappear in 2 weeks.', category: 'Body' },
  { id: 'i4', text: 'Dark spots at 20 are NOT genetics — it\'s sun + bad sleep + sugar. This is REVERSIBLE.', category: 'Skin' },
  { id: 'i5', text: 'Phone scrolling isn\'t an addiction — it\'s a habit loop. Remove the phone from your room and the "addiction" vanishes overnight.', category: 'Mind' },
  { id: 'i6', text: 'Coffee timing matters more than coffee amount. Wait 90 min after waking = no afternoon crash.', category: 'Diet' },
  { id: 'i7', text: 'Bad gut = bad skin. Your stomach directly controls whether your face is clear or covered in breakouts.', category: 'Skin' },
  { id: 'i8', text: '5 minutes of phone light = 90 minutes of destroyed sleep hormones. ONE peek ruins your night.', category: 'Sleep' },
  { id: 'i9', text: '15 min × 5 days beats 1.5 hours × 1 day. Consistency crushes intensity every time.', category: 'Lifestyle' },
  { id: 'i10', text: 'Iron deficiency is the #1 MISSED reason women look tired and dull. Get your ferritin tested.', category: 'Medical' },
  { id: 'i11', text: 'Glow comes from discipline, not products. 90% of people fail because they won\'t eliminate junk food.', category: 'Mindset' },
  { id: 'i12', text: 'You don\'t have a discipline problem — you have a CYCLE problem. Stress + bad sleep + phone + skipped meals reinforce each other.', category: 'Mindset' },
  { id: 'i13', text: 'Lifting weights beats running for body transformation, especially at normal weight. Build muscle, don\'t just burn calories.', category: 'Lifestyle' },
  { id: 'i14', text: 'Consistency beats perfection. Stable blood sugar beats calorie counting. Show up daily beats going hard once.', category: 'Mindset' },
  { id: 'i15', text: 'Eating fats before carbs mimics expensive weight-loss drugs — for free. Ghee/nuts first, rice second.', category: 'Diet' },
];

// ── Daily Habits Quick List ──
export const dailyHabits = [
  { name: 'Hydrate', icon: '💧' },
  { name: 'Chew Slowly', icon: '🦷' },
  { name: 'Sit Down to Eat', icon: '🪑' },
  { name: 'Sunlight Exposure', icon: '☀️' },
  { name: 'Tongue Scrape', icon: '👅' },
  { name: 'Nose Breathe', icon: '👃' },
  { name: 'Fix Posture', icon: '🧍' },
  { name: 'Make Bed', icon: '🛏️' },
  { name: 'Declutter', icon: '🗑️' },
  { name: 'Meal Prep', icon: '🍳' },
  { name: 'Follow Routine', icon: '📋' },
];

// ── Helper: get all searchable items ──
export function getAllItems() {
  const items = [];
  const addItems = (arr, cat) => arr.forEach(item => items.push({ ...item, category: cat }));

  keystoneHabits.forEach(h => items.push({ ...h, category: 'Keystone Habits' }));

  addItems(dietData.topTier, 'Diet');
  addItems(dietData.highValue, 'Diet');
  addItems(dietData.useful, 'Diet');
  addItems(dietData.avoid, 'Diet — Avoid');

  addItems(sleepData.topTier, 'Sleep');
  addItems(sleepData.highValue, 'Sleep');
  addItems(sleepData.useful, 'Sleep');
  addItems(sleepData.avoid, 'Sleep — Avoid');

  addItems(lifestyleData.topTier, 'Lifestyle');
  addItems(lifestyleData.highValue, 'Lifestyle');
  addItems(lifestyleData.useful, 'Lifestyle');
  addItems(lifestyleData.avoid, 'Lifestyle — Avoid');

  addItems(mentalData.topTier, 'Mind');
  addItems(mentalData.highValue, 'Mind');
  addItems(mentalData.useful, 'Mind');
  addItems(mentalData.avoid, 'Mind — Avoid');

  addItems(supplementsData.topTier, 'Supplements');
  addItems(supplementsData.highValue, 'Supplements');
  addItems(supplementsData.useful, 'Supplements');
  addItems(supplementsData.avoid, 'Supplements — Avoid');

  addItems(skinData.internal, 'Skin — Internal');
  addItems(skinData.external, 'Skin — External');
  addItems(skinData.avoid, 'Skin — Avoid');

  addItems(environmentData.topTier, 'Environment');
  addItems(environmentData.highValue, 'Environment');

  addItems(eliminateData, 'Eliminate');
  addItems(antiAgingData, 'Anti-Aging');

  productivityData.forEach(p => items.push({ ...p, category: 'Productivity' }));

  return items;
}

// ── Top 5 Non-Negotiables ──
export const topFiveCore = [
  { word: 'Wake', icon: '⏰', desc: '7 AM. Every day. No excuses.' },
  { word: 'Unplug', icon: '📵', desc: 'Phone out by 9:30 PM' },
  { word: 'Sunlight', icon: '☀️', desc: '10-15 min morning light' },
  { word: 'Hydrate', icon: '💧', desc: '2.5-3L water daily' },
  { word: 'Sunscreen', icon: '🧴', desc: 'SPF 50 every morning' },
];

export const bonusTrio = [
  { word: 'Sleep', icon: '😴' },
  { word: 'Walk', icon: '🚶' },
  { word: 'Protein', icon: '🥩' },
];
