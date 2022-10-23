import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Upciming from "../json/upcoming.json"
import News from "../json/news.json"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="author" content="SC CSE" />
        <meta name="description" content="The official website of Students' Chapter CSE AOT. " />
        <meta name="keywords"
          content="SC CSE, sccse, csesc, sc sce, students' chapter cse, students' chapter aot, iei students' chapter, Students' chapter cse, student chapter " />
        <meta property="og:site_name" content="Students' Chapter Cse" />
        <meta property="og:title" content="Students' Chapter Cse" />
        <meta property="og:description" content="The official website of Students' Chapter CSE AOT." />
        <meta property="og:type" content="website" />
        <title>Students' Chapter Cse</title>
        <script type='text/javascript' src="/logic.js" />
        <script src="/js/logic.js"></script>
      </Head>
      <div id="loader">
        <div id="mainAnim">
          <span className="loading load1"></span>
          <span className="loading load2"></span>
          <span className="loading load3"></span>
        </div>
      </div>
      <div id="mobileMenuPage">
        <div id="close-btn" onClick="closeMenu()">&times;</div>
        <div id="innerMenu">
          <div id="mobMenuOptions">
            NAVIGATION
            <div onClick="location.href='index.html'">Home</div>
            <div onClick="location.href='pages/events.html'">Events</div>
            <div onClick="location.href='pages/teams.html'">Teams</div>
            <div onClick="location.href='pages/gallery.html'">Gallery</div>
            <div onClick="location.href='pages/membership.html'">Become a member</div>
            SOCIALS
            <div id="socialLinksMenu">
              <a href=""><i className="fa-brands fa-instagram"></i></a>
              <a href=""><i className="fa-brands fa-square-facebook"></i></a>
              <a href=""> <i className="fa-brands fa-linkedin"></i></a>
              <a href=""><i className="fa-brands fa-square-github"></i></a>
              <a href=""><i className="fa-brands fa-square-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div id="nav-Left">
          <div className="navText">
            <h1 id="nav-left-top">Students' Chapter</h1>
            <p>CSE</p>
          </div>

        </div>
        <div id="nav-mid">
          <a href="#">HOME</a>
          <a href="/teams">TEAM</a>
          <a href="/gallery">GALLERY</a>
          <a href="/events">EVENTS</a>
          <div id="themeChange"><i className="fa-solid fa-moon"></i></div>
        </div>
        <div id="nav-right">
          <a href="/pages/membership.html">Become a member!</a>
        </div>
        <div id="mobileMenu">
          <div id="mobileToggle"><i className="fa-solid fa-moon"></i></div>
          <div id="mobielMenuToggle"><i className="fa-solid fa-bars"></i></div>
        </div>
      </nav>
      <header id="home-Top">
        <div id="home-Content">
          <div id="home-Image">
            <div id="innerImage"></div>
            <div id="home-Image-Text">
              <div id="home-Image-Text-Left">
                <p>Stride : Day 1</p>
                <p>A seminar on cloud Tech</p>
              </div>
              <div id="home-Image-Text-Right">
                <p>20th September,2022</p>

              </div>

            </div>
          </div>

          <div id="home-Text-Content">
            <p>Hey, there !</p>
            <p>We are,</p>
            <p id="head1">Students' Chapter Cse</p>
            <p>and this is our,</p>
            <p id="head2">Official Website</p>
          </div>
        </div>
      </header>
      <section id="NoteScHead">
        <div id="NoteScHeading" >
          <p>A NOTE FROM THE,</p>
          <p>SC HEAD</p>
        </div>
        <div id="scHeadNote">
          <div id="scHeadImage">
            <div id="scHeadInnerImage">

            </div>
            <div id="scHeadText">
              <p>Person Name</p>
              <p>(post)</p>
            </div>
          </div>
          <div id="scHeadTextMain" >
            <span>"Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span> <br /> Iusto maxime ipsum dolores.
            Corrupti, eveniet
            rem consequatur dignissimos blanditiis mollitia inventore commodi distinctio illo? Expedita illo atque
            maxime rem! Eveniet hic ab reiciendis quasi dignissimos molestias voluptatibus nesciunt perferendis
            perspiciatis facsimus quam, iste sit sint quia aspernatur! At eveniet
            deleniti officiis distinctio voluptatum inventore facilis necessitatibus."
          </div>
        </div>
      </section>
      <section id="upcomingItems">
        <div id="upcomingItemsHead">
          <p>WHAT'S</p>
          <p>UPCOMING?</p>
        </div>
        <div id="upcomingItemsCards">
          <div id="upcomingEventsMainText">
            <h2>MARK YOUR CALENDARS!</h2>
            <div id="upcomingCards">
              {Upciming.map(events => {
                return (<div className="upcomingCard">
                  <div className="upcomingCardleft" >
                    <div className="date">
                      <span >{events.date}</span>{events.suffix}
                    </div>
                    <div className="month">{events.month}</div>
                  </div>
                  <div className="upcomingCardRight">
                    <h3 className="eventName">{events.eventName}</h3>
                    <h4 className="eventDetails">{events.eventDetails}</h4>
                    <div className="upLink"><a href="${events.link}">{events.linkText}</a>
                    </div>
                  </div>
                </div>)

              })}
            </div>
          </div>
        </div>

      </section>
      <section id="news">
        <div id="newsHead" >
          <h2>NEWS</h2>
          <h2>CORNER</h2>
        </div>
        <div id="newsCardsOuterContainer">
          <div id="newsCards">
            {
              News.map(news => {
                return (
                  <div className="newsCard">
                    <div className="newsTopImage">
                      <div className="newsTopInnerImage" style={{ background: news.imageLink }}></div>
                    </div>
                    <div className="newsBottomContent">
                      <div className="newsMainText">
                        <div className="newsBottomHeading">
                          {news.newsHeading}
                        </div>
                        <div className="newsBottomDetails">
                          {news.newsContent}
                        </div>
                      </div>
                      <div className="newsBottomRow">
                        <div className="newsDate"> {news.newsDate}</div>
                        <div className="newsSeeMore"> <a href="${news.clickLink}">See More</a></div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <section id="newsLetter">
        <div id="newsLetterInnerContainer">
          <h2>NEWSLETTER</h2>
          Subscribe to our newsletter to receive updates
          <div id="email">
            <input type="email" id="emailField" placeholder="Enter your Email adddress here" />
            <div id="submitNewsLetter">Submit</div>
          </div>
        </div>
      </section>
      <div className='footer'>
        <div id="footerLeft">
          <h2>CSE Students' Chapter,</h2>
          AOT, Adisaptagram

        </div>
        <div id="footerRight">
          <h3> Contact Us</h3>
          <div className="call"><i className="fa-solid fa-phone"></i><a href="">+1930910291</a></div>
          <div className="mail"><i className="fa-regular fa-envelope"></i><a href="">something@email.com</a></div>
          <div id="socialLinks">
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-square-facebook"></i></a>
            <a href=""> <i className="fa-brands fa-linkedin"></i></a>
            <a href=""><i className="fa-brands fa-square-github"></i></a>
            <a href=""><i className="fa-brands fa-square-twitter"></i></a>
          </div>
        </div>

      </div>



    </div>

  )

}


