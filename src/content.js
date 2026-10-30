// ★ EDIT THIS FILE ONLY ★
// هنا تقدر تعدل كل الصور والرسائل والنصوص بسهولة

const content = {
  // --- Background music ---
  // تم إيقاف الأغنية (إذا أردت تفعيلها لاحقاً ضع مسار الملف مثل '/music/music.mp3')
  music: null,

  // --- Secret Date / Password Protection ---
  password: {
    code: '707',
    title: 'enter a secret date',
    subtitle: 'a date only we know ♡',
    buttonText: 'UNLOCK ♡',
    errorMessages: [
      'no babee!',
      'no try 707',
    ],
    sticker: '/images/hello-kitty-crying.jpg',
  },

  welcome: {
    greeting: 'hello ',
    name: 'my love',
    question: 'would you like to open your gift?',
    yesButton: 'YES PLEASE',
    noButton: 'NO THANKS',
  },

  noThanks: {
    message: "i promise you'll like it",
    tryAgainButton: 'TRY AGAIN',
  },

  menu: {
    title: 'pick a gift',
    subtitle: 'choose one to open ↓',
    items: [
      { id: 'memories', icon: '📸', sticker: '/images/hello-kitty-camera.jpg', label: 'Captured\nMemories' },
      { id: 'flowers', icon: '🌷', sticker: '/images/hello-kitty-flowers.jpg', label: 'something i love\nabout you' },
      { id: 'song', icon: '🎵', sticker: '/images/hello-kitty-music.jpg', label: 'our\nsong' },
      { id: 'letter', icon: '💌', sticker: '/images/hello-kitty-cake.jpg', label: 'Love\nLetter' },
    ],
  },

  // ==========================================
  // 📸 1. صفحة الصور (Captured Memories)
  // صورة واحدة فقط وتحتها مسدج
  // ==========================================
  memories: {
    icon: '🎈',
    title: 'A memory',
    // 👈 صورتك من مجلد public:
    image: '/images/pic3.jpg',
    // 👈 الرسالة تحت الصورة:
    message: `I remember so many things, and I have countless little memories of us in my mind, but the closest one I can think of is when you posted that note about me. You have no idea how happy it made me. It was the sweetest thing ever, and what made it even cuter was that it came from u💫`,
    returnButton: 'RETURN',
  },

  // ==========================================
  // 🌷 2. صفحة الورد (Virtual Flowers)
  // صورة وتحتها مسدج
  // ==========================================
  flowers: {
    icon: '🎈',
    title: 'Something I love about you',
    // 👈 صورة الورد من مجلد public:
    image: '/images/pic4.jpg',
    // 👈 الرسالة تحت صورة الورد:
    message: `I love how you understand me, how you always make me feel heard and support me in everything I do. I can come to you with the happiest news, knowing you’ll be just as excited as I am. You’re my safe place, my comfort person, and someone I can always be myself around. I’ve never felt as comfortable with anyone as I do with you, and I don’t think I ever will. I love you so much, my bebe😚`,
    returnButton: 'RETURN',
  },

  // ==========================================
  // 🎵 3. صفحة الأغنية (Our Song)
  // صورة وتحتها مسدج فقط (بدون مشغل صوت)
  // ==========================================
  song: {
    icon: '🎈',
    title: 'Remember this?',
    // 👈 صورة الأغنية من مجلد public:
    image: '/images/pic1.jpg',
    // 👈 الرسالة تحت الصورة:
    message: ` Do you remember when I told you that this song has your name in it? Ever since then, I’ve been playing it everywhere. It’s become my favorite song, all because it has your name in it. I guess anything that reminds me of you becomes special to me💕`,
    returnButton: 'RETURN',
  },

  // ==========================================
  // 💌 4. صفحة الرسالة (Love Letter)
  // صورة وتحتها مسدج
  // ==========================================
  letter: {
    icon: '🎈',
    title: 'message for u',
    // 👈 صورة الرسالة من مجلد public:
    image: '/images/pic2.jpg',
    // 👈 نص الرسالة تحت الصورة:
    message: `Sometimes I wish you could see yourself through my eyes and understand how special you are to me. I love all the little things about you, our random conversations, and all the silly moments we share. I hope life is always kind to you and gives you every reason to smile. I’m so glad I got to know you, strawberry. I’ll always be cheering for u,
Your love ♡`,
    returnButton: 'RETURN',
  },
}

export default content
