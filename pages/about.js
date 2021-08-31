import Head from "next/head";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="dark:bg-black dark:text-white">
      <Head>
        <title>Lol</title>
      </Head>

      <Navbar
        name="No Child Left Behind - Kanye West"
        url="https://open.spotify.com/track/3onYsG7nB3FwEVHYYWCrIM?si=b4035a1834484ffc"
      />

      <section className="px-5 py-20 pb-16 md:p-16 md:pt-40 flex justify-center">
        <div>
          <h1 className="text-5xl lg:text-6xl text-blue-450 dark:text-red-500 font-medium font-c mb-10">
            Who on earth is Hitesh?
          </h1>

          <article className="prose dark:prose-dark font-sf">
            <p>Greetings, visitor!</p>
            <p>
              Welcome to my blog. You’re probably wondering who the hell I am.
              Good news, I have no idea either.
            </p>
            <p>
              My name’s Hitesh. I’m in college right now. Well, almost a year
              left, to be exact.
            </p>
            <p>And what are my interests?</p>
            <p>
              Haha. Like any normal person, I decided to find out{" "}
              <strong>using data</strong>. So I got my entire browsing and
              search history from google, and then ran a topic modelling
              algorithm called{" "}
              <a
                href="https://github.com/ddangelov/Top2Vec"
                rel="noopener"
              >
                Top2Vec
              </a>{" "}
              on it. Turns out I’ve searched for everything from ‘how write
              screenplay’ to ‘firebase authentication reactjs’.
            </p>
            <p>
              My point is, it’s a bit hard for me to explain who I am or what I
              do or what I like. Trust me, I’ve been dreading self-introductions
              since kindergarten.
            </p>
            <p>
              But, following the glorious tradition of oversharing on the
              internet - here’s my story.
            </p>
            <p>
              I was born in Trivandrum, Kerala, a beach town on the southern
              coast of India. I went to school and pretty much slept in the back
              bench for 10+2 years. High school was a tad weird, but I suppose
              it’s meant to be. My grades weren’t remarkable by any standard,
              but I got into college for a computer science programme.
            </p>
            <p>
              Freshman year, I was really into voice tech. Amazon had just
              started selling smart speakers in India, and upon messing around a
              bit I realized that you could code your own apps for Alexa called
              ‘skills’. At the time I also saw myself as a cool human-computer
              interaction designer kind of guy (lmaoooo); so the idea of making
              apps where the primary input was the user’s speech was rather
              interesting. I met a lot of cool people who were into voice tech
              as well on Twitter, wrote an article called ‘
              <a
                href="https://chatbotslife.com/building-alexa-skills-in-python-for-absolute-beginners-8166a7ad01fa"
                rel="noopener"
              >
                Building Alexa skills in Python, for absolute beginners
              </a>
              ’ - my most popular post on Medium till date, and if the numbers
              they send me are correct, it gets around a hundred views every
              week
              <em>
                <strong> still</strong>
              </em>
              . Both Amazon and Google sent me a bunch of free tees, cloud
              credits, and an Echo and a Home respectively.
            </p>
            <p>
              Then what happened? Well, the honeymoon was rather short lived.
            </p>
            <p></p>
            <div className="captioned-image-container">
              <figure>
                <a
                  className="image-link image2 image2-325-488"
                  target="_blank"
                  href="https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F1e42da4b-c25a-4562-a67e-1f18b4553473_1092x727.jpeg"
                  rel="noopener"
                >
                  <img
                    src="https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F1e42da4b-c25a-4562-a67e-1f18b4553473_1092x727.jpeg"
                    data-attrs='{"src":"https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/1e42da4b-c25a-4562-a67e-1f18b4553473_1092x727.jpeg","height":727,"width":1092,"resizeWidth":488,"bytes":null,"alt":"Hype Cycle Research Methodology","title":null,"type":null,"href":null}'
                    alt="Hype Cycle Research Methodology"
                    title="Hype Cycle Research Methodology"
                  />
                </a>
                <figcaption className="image-caption">
                  The Gartner hype cycle.
                </figcaption>
              </figure>
            </div>
            <p>
              Voice assistants are fun, but we aren’t at Star Trek ship computer
              level yet. On the Gartner hype cycle, I’d put them right now at
              the Trough of Disillusionment (personal opinion). All we can do at
              the moment is wait for the teams of brilliant people at the
              companies/universities working on this to push us up the Slope of
              Enlightenment.
            </p>
            <blockquote>
              <p>
                (Edit: btw if you’re someone interested in making voice apps you
                should check out{" "}
                <strong>
                  <a
                    href="https://github.com/jovotech/jovo-framework"
                    rel="noopener"
                  >
                    Jovo
                  </a>
                </strong>
                , they’re building a common framework for cross-platform
                development and could make your life way easier)
              </p>
            </blockquote>
            <p>
              But anyway, second year of college creeped up, and something
              happened that completely changed my life - a friend told me to
              watch The Office.
            </p>
            <p>Holy amazeballs.</p>
            <p>I loved it. In fact, I loved it a tad too much.</p>
            <p>
              OpenAI had started rolling out the GPT-2 models at that time, and
              I thought, ‘
              <a
                href="https://medium.com/@hellohitesh/i-miss-the-office-so-i-made-an-ai-write-me-new-scripts-c4a14af4dd86"
                rel="noopener"
              >
                oh boy wouldn’t it be really cool if I gave it all the scripts
                from the office and made it generate MORE the office?
              </a>
              ’.
            </p>
            <p>
              If you thought that was weird, you’re gonna love this. I connected
              a bunch of amateur ECG cables to an Arduino, stuck them around my
              body, and watched the scene where Creed becomes manager of Dunder
              Mifflin.
              <a
                href="https://www.instagram.com/p/B3Q9Y-Xn9oXrwpYuN8YOeKznQ9e4csGThEC6580/"
                rel="noopener"
              >
                The idea was to play around with biofeedback data and see if
                watching The Office had any observable biological effects on me
              </a>
              . But it turned out that a bunch of cheap cables you get online
              aren’t really scientific-grade and also, as I mention in the
              caption, muscle activity from laughing is mostly the only thing it
              picked up.
            </p>
            <p>
              But of course, true fans don’t stop there. Everyone’s heard of
              style transfer for images, but what about for text?
            </p>
            <p>
              I googled around a bit and came across Tensorflow’s neural machine
              translation tutorial. ‘<em>Well, alrighty then</em>’, said my
              brain, and we (my brain and I) took a corpus of Shakespeare’s
              works as well as their modern english Sparknotes versions and{" "}
              <a
                href="https://www.instagram.com/p/B_P7D4ulvrLDxQWnWDMJwQtEeKaKjUxAte1unc0/"
                rel="noopener"
              >
                yeah now you can read lines from the show in Old English
              </a>
              .
            </p>
            <div className="captioned-image-container">
              <figure>
                <a
                  className="image-link image2 image2-471-471"
                  target="_blank"
                  href="https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8755bf7a-1183-4f73-b5f3-38486a3d5772_1080x1080.jpeg"
                  rel="noopener"
                >
                  <img
                    src="https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8755bf7a-1183-4f73-b5f3-38486a3d5772_1080x1080.jpeg"
                    data-attrs='{"src":"https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/8755bf7a-1183-4f73-b5f3-38486a3d5772_1080x1080.jpeg","height":1080,"width":1080,"resizeWidth":471,"bytes":37780,"alt":null,"title":null,"type":"image/jpeg","href":null}'
                    alt=""
                  />
                </a>
              </figure>
            </div>
            <p>
              Then it hit me that while all this was fun I wasn’t actually
              making any money. It felt a bit weird to accept that I would have
              to sell out to capitalism, but then I also realized that things
              worked on the basis of exchange of value - a
              <em>
                nd that if I needed money I would have to start building things
                that would be valuable for other people.
              </em>
            </p>
            <p>
              So, now I’m on a journey to do that - make stuff that people would
              actually pay for. And this newsletter is kind of where I plan to
              write about it all. If you’re into that kind of thing - welcome, I
              would love to have you as a reader.
            </p>
            <p>
              As always, my{" "}
              <a
                href="mailto:htshnr@gmail.com?subject=Hello%20from%20a%20reader"
                rel="noopener"
              >
                email
              </a>{" "}
              and{" "}
              <a href="https://twitter.com/htshnr" rel="noopener">
                DM
              </a>
              s are open, and if you were thinking of reaching out just holler.
            </p>
            <p></p>
            <p>Cheerio,</p>
            <p>Hitesh.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
