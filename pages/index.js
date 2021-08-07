import Footer from '../components/Footer';
import Link from 'next/link';
import { getAllPosts } from '../infra/getAllPosts';

export default function Home({ allPosts }) {
  return (
    <div>
      <header className="headerContainer">
        <img src="https://avatars.githubusercontent.com/u/60229666?v=4" />
        <h1>Rick's Blog</h1>
      </header>

      <section className="postsContainer">
        {allPosts.map((post) => (
          <article key={post.slug} className="postsContainer__post">
            <Link href={`posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </section>

      <Footer
        facebook="rickschultzofficial"
        twitter="rick_schultz_"
        linkedin="rick-schultz"
        github="rick-schultz"
      />
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts(['title', 'slug', 'excerpt']);
  return {
    props: { allPosts },
  };
}
