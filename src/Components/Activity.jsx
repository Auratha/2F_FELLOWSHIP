import React from "react";

function Activity() {
  return (
    <section id="activity">
      {/* Title */}
      <div className="w-fit ml-5 text-xl font-bold my-6 mb-3 md:text-3xl lg:text-2xl">
        <h2>Activities &#8212;</h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 p-5 pb-0 text-xl">
        <div>
          <img
            src="/activity_gallery/activity1.jpg"
            alt="Activity 1"
            className="w-full mb-6 activity-img"
          />
          <p className="activity-text font-bold">
            25.01.25 <br />
            Join Us for a Joyful Time of Worship!
          </p>
          <p className="text-gray-700 mt-2 mb-24 activity-text">
            Every Saturday at CCC Chiang Mai, we come together to pray, worship,
            and celebrate through music and song! From 2:00 to 4:00 PM, we lift
            our voices, play instruments, and sing with joy. You don’t need to
            be a musician—just bring your heart and energy, and let’s worship
            together in a lively and uplifting atmosphere! Come early and enjoy
            a free meal before we begin. It’s a great opportunity to meet new
            friends, share stories, and connect with a welcoming community.
            Whether you’ve joined us before or it’s your first time, you’re
            always welcome. Let’s make this time of worship a powerful and
            unforgettable experience! See you this Saturday at CCC Chiang Mai!
          </p>
        </div>
        <div>
          <img
            src="/activity_gallery/activity2.jpg"
            alt="Activity 2"
            className="w-full mb-6 activity-img"
          />
          <p className="activity-text font-bold">
            01.02.25 <br /> Saturday Discussion – Learn, Share & Grow Together!
          </p>
          <p className="text-gray-700 mt-2 mb-24 activity-text">
            As part of our Saturday 2:00 – 4:00 PM gathering, we dedicate a
            special time each week to explore meaningful topics, share insights,
            and grow in knowledge together! <br />
            <br /> 🌟 A New Topic Every Week – Each session covers a different
            topic, giving everyone a chance to learn and reflect. <br /> 🎤
            Rotating Speakers – Different people lead the discussions, bringing
            fresh perspectives and experiences. <br /> 🤝 Open for Everyone –
            Whether you're a regular or new, you’re welcome to join, listen, and
            share your thoughts! <br /> <br /> It’s a great time to gain wisdom,
            connect with others, and be inspired. Come and be part of the
            conversation! See you this Saturday! 😊✨
          </p>
        </div>
        <div>
          <img
            src="/activity_gallery/activity3.jpg"
            alt="Activity 3"
            className="w-full mb-6 activity-img"
          />
          <p className="activity-text font-bold">
            23.01.25 <br /> Share the Gospel with Us – Every Tuesday & Thursday!
          </p>
          <p className="text-gray-700 mt-2 mb-24 activity-text">
            Every week, we have a special opportunity to meet new people, share
            the gospel, and spread joy at two universities in Chiang Mai! <br />
            <br /> 📍 Tuesdays – Payap University <br /> 📍 Thursdays – Chiang
            Mai University <br /> 🕐 Starting at 1:00 PM <br />
            <br /> We go out with warm hearts and happy spirits to connect with
            students, teachers, and anyone open to hearing about God’s love.
            Whether you love sharing your faith or just want to meet new people
            in a meaningful way, you’re welcome to join us! Let’s walk together,
            share the gospel, and bring light to the campus! See you there! 😊✨
          </p>
        </div>
        <div>
          <img
            src="/activity_gallery/activity4.jpg"
            alt="Activity 4"
            className="w-full mb-6 activity-img"
          />
          <p className="activity-text font-bold">
            12.11.24 <br /> Tuesday Football Fun – Everyone’s Welcome!
          </p>
          <p className="text-gray-700 mt-2 mb-24 activity-text ">
            Looking for a fun way to stay active and meet new friends? Join us
            every Tuesday for a friendly game of football! It doesn’t matter if
            you’re a believer or not—everyone is welcome to play, have fun, and
            enjoy the game together. We organize everything in our Messenger
            group, where we discuss the location and time each week. If you’re
            interested in joining, just let us know, and we’ll add you to the
            group! Come for the game, stay for the great company. See you on the
            field this Tuesday! ⚽✨
          </p>
        </div>
        <div>
          <img
            src="/activity_gallery/activity5.jpg"
            alt="Activity 5"
            className="w-full mb-6 activity-img"
          />
          <p className="activity-text font-bold">
            21.11.24 <br /> Join Our Special CCC Chiang Mai Trips! 🚗✨
          </p>
          <p className="text-gray-700 mt-2 mb-24 activity-text">
            Every now and then, CCC Chiang Mai Center organizes exciting trips
            where we explore new places, connect with different communities, and
            enjoy unforgettable experiences together! In this photo, we visited
            a Lahu village, where the kind villagers welcomed us with
            traditional food and warm hospitality. We had a wonderful time
            talking with the Lahu people, learning about their culture, and
            simply relaxing in a beautiful setting. These trips are open to
            everyone, so if you love adventure, meeting new people, and making
            meaningful connections, come join us next time! Let’s create amazing
            memories together! 😊🌿✨
          </p>
        </div>
        <div>
          <img
            src="/activity_gallery/activity6.jpg"
            alt="Activity 6"
            className="w-full mb-6 activity-img"
          />
          <p className="activity-text font-bold">
            14.11.24 <br /> Coffee & Conversations ☕✨
          </p>
          <p className="text-gray-700 mt-2 mb-24 activity-text">
            Sometimes, after our Saturday, Tuesday, or Thursday activities, we
            head to a coffee shop to relax, chat, and enjoy good company over a
            cup of coffee or tea. It’s a great time to connect with each other,
            share thoughts, and build friendships in a casual and cozy setting.
            This isn’t a scheduled event every time—we do it when there’s extra
            time and more people can join. So, if you're free and want to
            continue the conversation over a warm drink, feel free to come
            along! Good coffee, great company, and meaningful conversations—join
            us when you can! ☕😊✨
          </p>
        </div>
      </div>
    </section>
  );
}

export default Activity;
