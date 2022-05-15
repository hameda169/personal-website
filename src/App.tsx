import { Contact, Skill, SocialMedia, Project } from "./components";
import data from "./data";

export function App(): React.ReactElement {
  return (
    <main>
      <section>
        <h1>About</h1>
        <p dangerouslySetInnerHTML={{ __html: data.about }} />
      </section>
      <section>
        <h1>Skills</h1>
        <ul>
          {data.skills.map((item) => (
            <Skill item={item} />
          ))}
        </ul>
      </section>
      <section>
        <h1>Projects</h1>
        <ul>
          {data.projects.map((item) => (
            <Project item={item} />
          ))}
        </ul>
      </section>
      <section>
        <h1>Blog</h1>
        <div>Nothing yet...</div>
      </section>
      <section>
        <h1>Contact</h1>
        <ul>
          {data.contacts.map((item) => (
            <Contact item={item} />
          ))}
        </ul>
      </section>
      <section>
        <h1>Social Media Connections</h1>
        <nav>
          <ul>
            {data.socialMediaAccounts.map((item) => (
              <SocialMedia item={item} />
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}
