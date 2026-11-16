import {useState} from 'react';
import type {Route} from './+types/_index';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Relais Studio · Guestwear & wellness essentials'},
    {
      name: 'description',
      content:
        'Robes, lounge sets and the small comforts your guests carry from treatment room to thermal pool. Natural linen and waffle, made in our Bali studio, finished with your name.',
    },
  ];
};

type Piece = {name: string; taupe: string | null; sage: string | null};

const PIECES: Piece[] = [
  {name: 'Robe', taupe: 'proposed-08', sage: 'proposed-01'},
  {name: 'Lounge set', taupe: 'proposed-14', sage: 'proposed-15'},
  {name: 'Eye mask', taupe: 'proposed-24', sage: 'proposed-24'},
  {name: 'Scrunchie', taupe: 'scrunchie', sage: 'scrunchie'},
  {name: 'Tote', taupe: 'products_mb-07', sage: 'proposed-19'},
  {name: 'Pouch', taupe: 'proposed-36', sage: 'proposed-36'},
  {name: 'Slippers', taupe: 'proposed-40', sage: 'proposed-40'},
];

const img = (k: string) => `/img/${k}.jpg`;

function Wordmark({large = false}: {large?: boolean}) {
  return (
    <a
      className={large ? 'logo lg' : 'logo'}
      href="/"
      aria-label="Relais Studio home"
    >
      <span className="wm">Relais</span>
      <span className="sub">Studio</span>
    </a>
  );
}

function CapsuleBuilder() {
  const [on, setOn] = useState<Set<string>>(
    () => new Set(['Robe', 'Slippers', 'Eye mask', 'Tote']),
  );
  const [story, setStory] = useState<'taupe' | 'sage'>('taupe');

  const toggle = (n: string) =>
    setOn((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });

  const sel = PIECES.filter((p) => on.has(p.name));
  const small = on.size <= 4;

  return (
    <div>
      <div className="chips">
        {PIECES.map((p) => (
          <button
            key={p.name}
            type="button"
            className={on.has(p.name) ? 'chip on' : 'chip'}
            onClick={() => toggle(p.name)}
            aria-pressed={on.has(p.name)}
          >
            {p.name}
          </button>
        ))}
      </div>
      <div className="story">
        <button
          type="button"
          className={story === 'taupe' ? 'sw on' : 'sw'}
          style={{background: '#D9CFC1'}}
          aria-label="Taupe and off-white"
          onClick={() => setStory('taupe')}
        />
        <button
          type="button"
          className={story === 'sage' ? 'sw on' : 'sw'}
          style={{background: '#9DA487'}}
          aria-label="Sage and pine"
          onClick={() => setStory('sage')}
        />
        <span>{story === 'taupe' ? 'Taupe & off-white' : 'Sage & pine'}</span>
      </div>
      <div
        className={story === 'sage' ? 'board sage' : 'board'}
        style={{
          gridTemplateColumns: `repeat(${small ? 2 : 3},1fr)`,
          padding: small ? '28px 18%' : '28px',
        }}
      >
        {sel.length ? (
          sel.map((p) => {
            const k = story === 'taupe' ? p.taupe : p.sage;
            return (
              <div className="it" key={p.name}>
                {k ? (
                  <img src={img(k)} alt="" loading="lazy" />
                ) : (
                  <div className="ph">to come</div>
                )}
                <span>{p.name}</span>
              </div>
            );
          })
        ) : (
          <div className="empty">Choose pieces to start your capsule</div>
        )}
      </div>
      <div className="cap">
        Preview only. Final boards use matched studio cutouts in each colour
        story.
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <>
      <header className="hd">
        <div className="wrap">
          <Wordmark />
          <nav>
            <a href="#range">The Range</a>
            <a href="#build">Build your capsule</a>
            <a href="#venues">For your venue</a>
            <a href="#cases">Case studies</a>
            <a href="#making">Materials &amp; making</a>
            <a href="#about">About</a>
          </nav>
          <a className="btn" href="#enquire">
            Enquire
          </a>
        </div>
      </header>

      <main>
        <div className="hero">
          <div className="txt">
            <span className="eyebrow">Guestwear &amp; wellness essentials</span>
            <h1>
              Designed for your space, <em>made for the ritual.</em>
            </h1>
            <p>
              Robes, lounge sets and the small comforts your guests carry from
              treatment room to thermal pool. Natural linen and waffle, made in
              our Bali studio, finished with your name.
            </p>
            <div className="ctas">
              <a className="btn solid" href="#build">
                Build your capsule
              </a>
              <a className="btn" href="#range">
                See the range
              </a>
            </div>
          </div>
          <div className="pics">
            <div className="a">
              <img src={img('ig-12')} alt="Candlelit grotto pool with rolled waffle towels" />
            </div>
            <div>
              <img src={img('ig-24')} alt="Linen kimono robe in the morning" />
            </div>
            <div>
              <img src={img('ig-11')} alt="Floating in an infinity pool at dusk" />
            </div>
          </div>
        </div>

        <div className="trust">
          <div className="wrap">
            <span>Minimums from 50 pieces</span>
            <span>Your logo &amp; label</span>
            <span>Linen · waffle · gauze · recycled canvas</span>
            <span>Made in Bali</span>
          </div>
        </div>

        <section id="venues">
          <div className="wrap">
            <div className="head">
              <div>
                <span className="eyebrow">For your venue</span>
                <h2 style={{marginTop: 14}}>Every space has its own ritual.</h2>
              </div>
              <p>
                Choose a starting point. We&apos;ll suggest a capsule for how
                your guests move through the day, then shape it to you.
              </p>
            </div>
            <div className="seg">
              <a className="card" href="#enquire">
                <div className="im">
                  <img src={img('products_mb-16')} alt="" loading="lazy" />
                </div>
                <h3>Spas &amp; retreats</h3>
                <p>Robes, slippers and eye masks for the treatment-room rhythm.</p>
              </a>
              <a className="card" href="#enquire">
                <div className="im">
                  <img src={img('products_mb-13')} alt="" loading="lazy" />
                </div>
                <h3>Yoga &amp; Pilates</h3>
                <p>Totes, scrunchies and pouches your members carry home.</p>
              </a>
              <a className="card" href="#enquire">
                <div className="im">
                  <img src={img('ig-03')} alt="" loading="lazy" />
                </div>
                <h3>Thermal baths</h3>
                <p>Waffle robes and slippers built for heat, steam and laundry.</p>
              </a>
              <a className="card small" href="#enquire">
                <div className="im">
                  <img src={img('products_mb-05')} alt="" loading="lazy" />
                </div>
                <h3>Boutique hotels</h3>
                <p>In-room and poolside pieces.</p>
              </a>
            </div>
          </div>
        </section>

        <section className="range" id="range">
          <div className="wrap">
            <div className="head">
              <div>
                <span className="eyebrow">The range</span>
                <h2 style={{marginTop: 14}}>Seven pieces. Two colour stories.</h2>
              </div>
              <p>
                Every piece comes in Taupe &amp; off-white or Sage &amp; pine,
                and we can adjust colour, label and fit on each order.
              </p>
            </div>
            <div className="rgrid">
              {[
                ['proposed-08', 'Robe', 'Linen kimono · waffle'],
                ['proposed-14', 'Lounge set', 'Linen · cotton gauze'],
                ['proposed-24', 'Eye mask', 'Matching linen'],
                ['scrunchie', 'Scrunchie', 'Matching linen'],
                ['products_mb-07', 'Tote', 'Recycled canvas'],
                ['proposed-36', 'Make-up pouch', 'Canvas · waffle'],
                ['proposed-40', 'Slippers', 'Waffle'],
              ].map(([k, n, f]) => (
                <div className="card" key={n}>
                  <div className="im">
                    <img src={img(k)} alt={n} loading="lazy" />
                  </div>
                  <h3>{n}</h3>
                  <div className="f">{f}</div>
                </div>
              ))}
            </div>
            <p className="note">MOQ 50 per piece · pricing on enquiry</p>
          </div>
        </section>

        <section id="build">
          <div className="wrap builder">
            <div>
              <span className="eyebrow">Build your capsule</span>
              <h2 style={{marginTop: 14}}>See your range before you commit.</h2>
              <ol className="steps">
                <li>Choose the pieces your guests will use.</li>
                <li>Pick a colour story.</li>
                <li>Add quantities, your logo and timing.</li>
                <li>We send a proposal and sample options.</li>
              </ol>
              <a className="btn solid" href="#enquire">
                Start building
              </a>
            </div>
            <CapsuleBuilder />
          </div>
        </section>

        <div className="band">
          <div className="im">
            <img src={img('proposed-39')} alt="" loading="lazy" />
          </div>
          <div className="t">
            <span className="eyebrow">How it arrives</span>
            <h2 style={{margin: '14px 0 18px'}}>
              Presented as carefully as it&apos;s made.
            </h2>
            <p>
              Folded, wrapped and boxed, ready for the shelf, the room or the
              gift shop. Your name on the label, the pouch and the ribbon.
            </p>
            <div className="pk">
              <div>
                <img src={img('proposed-23')} alt="" loading="lazy" />
              </div>
              <div>
                <img src={img('proposed-32')} alt="" loading="lazy" />
              </div>
              <div>
                <img src={img('proposed-01')} alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <section id="cases">
          <div className="wrap">
            <div className="head">
              <div>
                <span className="eyebrow">Case studies</span>
                <h2 style={{marginTop: 14}}>In the places we love.</h2>
              </div>
            </div>
            <div className="cases">
              <div className="card">
                <div className="im" style={{position: 'relative'}}>
                  <img src={img('ig-30')} alt="" loading="lazy" />
                  <span className="tag">Client</span>
                </div>
                <h3>Alila, Bali</h3>
                <p>Robes and slippers for the spa and villas.</p>
              </div>
              <div className="card">
                <div className="im" style={{position: 'relative'}}>
                  <img src={img('products_mb-12')} alt="" loading="lazy" />
                  <span className="tag">Client</span>
                </div>
                <h3>Siwa, Lombok</h3>
                <p>Poolside totes and guest robes.</p>
              </div>
              <div className="card">
                <div className="im" style={{position: 'relative'}}>
                  <img src={img('ig-01')} alt="" loading="lazy" />
                  <span className="tag">Concept</span>
                </div>
                <h3>The in-room ritual</h3>
                <p>A concept capsule for a 20-key hotel.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="making" id="making">
          <div className="wrap mk">
            <div className="im">
              <img src={img('materials-01')} alt="" loading="lazy" />
            </div>
            <div className="im">
              <img src={img('studio-11')} alt="" loading="lazy" />
            </div>
            <div className="t">
              <span className="eyebrow">Materials &amp; making</span>
              <h2 style={{margin: '14px 0 18px'}}>Natural fibres, made slowly.</h2>
              <p>
                Stone-washed linen, cotton waffle, soft gauze and recycled
                canvas with PET webbing. Cut and sewn by our makers in Bali, in
                small runs, so reorders match.
              </p>
              <div className="proc">
                <span>Brief</span>→<span>Proposal</span>→<span>Sample capsule</span>→
                <span>Production</span>→<span>Reorder</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="about wrap">
            <span className="eyebrow">About</span>
            <p className="q">
              &ldquo;We started making the things we wanted to find in the
              places we love to stay.&rdquo;
            </p>
            <p>
              Relais Studio is Fon and Melina, the team behind Me + Lia, with
              our makers in Bali.
            </p>
          </div>
        </section>

        <div className="cta" id="enquire">
          <span className="eyebrow">Enquire</span>
          <h2>Tell us about your space.</h2>
          <p style={{maxWidth: 460, margin: '0 auto 32px'}}>
            Share your venue, the pieces you&apos;re considering and your
            timing. We&apos;ll come back with a proposal and sample options.
          </p>
          <a
            className="btn"
            href="mailto:hello@relaisstudio.com?subject=Relais%20Studio%20enquiry"
          >
            Start an enquiry
          </a>
        </div>
      </main>

      <footer>
        <div className="wrap">
          <div>
            <Wordmark large />
          </div>
          <div>
            <h4>Studio</h4>
            <a href="#range">The Range</a>
            <a href="#build">Build your capsule</a>
            <a href="#making">Materials &amp; making</a>
            <a href="#about">About</a>
          </div>
          <div>
            <h4>Venues</h4>
            <a href="#venues">Spas &amp; retreats</a>
            <a href="#venues">Yoga &amp; Pilates</a>
            <a href="#venues">Thermal baths</a>
            <a href="#venues">Hotels</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:hello@relaisstudio.com">hello@relaisstudio.com</a>
            <a href="https://cassiaessentiels.com">Cassia Essentiels ↗</a>
          </div>
          <div className="fine">© Relais Studio</div>
        </div>
      </footer>
    </>
  );
}
