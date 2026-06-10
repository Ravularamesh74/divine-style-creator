import { createFileRoute } from "@tanstack/react-router";
import {
    MapPin,
    Phone,
    Clock,
    Navigation,
} from "lucide-react";

export const Route = createFileRoute("/store")({
    component: StoresPage,
});

const stores = [
    {
        name: "Style Daddy Menswear",
        area: "Nacharam",
        address:
            "Nacharam Main Road, Hyderabad, Telangana",
        phone: "+91 6309376811",
        hours: "10:00 AM - 10:00 PM",
        map: "https://maps.google.com",
    },
];

function StoresPage() {
    return (
        <main className="min-h-screen bg-background">

            {/* HERO */}
            <section className="border-b border-border py-12 md:py-24">
                <div className="mx-auto max-w-7xl px-6 text-center">

                    <MapPin className="mx-auto h-12 w-12 text-primary" />

                    <h1 className="mt-6 font-display text-4xl uppercase md:text-7xl lg:text-8xl">
                        Stores
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-muted-foreground">
                        Visit Style Daddy Menswear and discover
                        oversized tees, cargos, hoodies, denim,
                        accessories, and the latest streetwear drops.
                    </p>

                </div>
            </section>

            {/* STORE LIST */}
            <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">

                <div className="grid gap-8">

                    {stores.map((store) => (
                        <div key={store.name} className="border border-border bg-card p-6 md:p-8">

                            <h2 className="font-display text-2xl md:text-4xl uppercase">
                                {store.name}
                            </h2>

                            <div className="mt-8 grid gap-6 md:grid-cols-3">

                                <div className="flex gap-3">
                                    <MapPin className="mt-1 h-5 w-5 text-primary" />

                                    <div>
                                        <p className="font-black uppercase">
                                            Location
                                        </p>

                                        <p className="text-muted-foreground">
                                            {store.address}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Phone className="mt-1 h-5 w-5 text-primary" />

                                    <div>
                                        <p className="font-black uppercase">
                                            Contact
                                        </p>

                                        <p className="text-muted-foreground">
                                            {store.phone}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Clock className="mt-1 h-5 w-5 text-primary" />

                                    <div>
                                        <p className="font-black uppercase">
                                            Working Hours
                                        </p>

                                        <p className="text-muted-foreground">
                                            {store.hours}
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <a
                                href={store.map}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-8 inline-flex w-full justify-center items-center gap-3 rounded-lg bg-fire px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-primary-foreground md:inline-flex md:w-auto md:px-8 md:py-4 md:tracking-[0.2em]"
                            >
                                <Navigation className="h-4 w-4" />
                                Get Directions
                            </a>

                        </div>
                    ))}

                </div>

            </section>

            {/* MAP SECTION */}
            <section className="border-t border-border py-12 md:py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <h2 className="mb-8 text-center font-display text-3xl uppercase md:text-5xl">
                        Find Us
                    </h2>

                    <div className="overflow-hidden border border-border">
                        <iframe
                            title="Style Daddy Store Location"
                            src="https://maps.google.com/maps?q=Nacharam%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="h-56 md:h-[500px] w-full"
                            loading="lazy"
                        />
                    </div>
                    <section className="border-t border-border py-24">
                        <div className="mx-auto max-w-5xl px-6">

                            <h2 className="text-center font-display text-3xl uppercase md:text-5xl lg:text-7xl">
                                        Style Daddy
                                        <span className="block text-gradient-fire">
                                            Menswear
                                        </span>
                                    </h2>

                            <div className="mt-12 space-y-8 text-lg leading-9 text-muted-foreground">

                                <p>
                                    Style Daddy has established itself as one of the most exciting men's
                                    fashion destinations, offering premium streetwear and modern menswear
                                    designed for today's generation. Built around confidence, comfort,
                                    and bold style, Style Daddy delivers oversized tees, cargo joggers,
                                    hoodies, co-ord sets, denim, and everyday essentials that help men
                                    express themselves without compromise.
                                </p>

                                <p>
                                    At Style Daddy, fashion is more than clothing—it's identity.
                                    Every collection is curated to blend street-inspired aesthetics
                                    with wearable comfort, creating outfits that work for college,
                                    weekends, casual outings, content creation, and everyday life.
                                </p>

                                <p>
                                    The Style Daddy online store offers a seamless shopping experience,
                                    making it easy to discover the latest drops, trending styles,
                                    and everyday essentials. Whether you're looking for oversized
                                    t-shirts, street-ready joggers, relaxed-fit denim, hoodies,
                                    or complete outfit combinations, you'll find everything needed
                                    to upgrade your wardrobe in one place.
                                </p>

                                    <div className="grid gap-6 md:grid-cols-2">

                                    <div className="border border-border bg-card p-8">
                                        <h3 className="font-display text-2xl md:text-3xl uppercase text-primary">
                                            Why Style Daddy?
                                        </h3>

                                        <ul className="mt-6 space-y-3">
                                            <li>✓ Premium Oversized T-Shirts</li>
                                            <li>✓ Cargo Joggers & Utility Pants</li>
                                            <li>✓ Heavyweight Hoodies</li>
                                            <li>✓ Co-Ord Sets</li>
                                            <li>✓ Relaxed Fit Denim</li>
                                            <li>✓ Everyday Essentials</li>
                                            <li>✓ Streetwear Accessories</li>
                                        </ul>
                                    </div>

                                    <div className="border border-border bg-card p-8">
                                        <h3 className="font-display text-2xl md:text-3xl uppercase text-primary">
                                            Why Men Choose Style Daddy
                                        </h3>

                                        <ul className="mt-6 space-y-3">
                                            <li>✓ Trend-Driven Collections</li>
                                            <li>✓ Premium Oversized Fits</li>
                                            <li>✓ Streetwear-Inspired Designs</li>
                                            <li>✓ Comfortable Fabrics</li>
                                            <li>✓ Affordable Pricing</li>
                                            <li>✓ Fast Customer Support</li>
                                            <li>✓ Regular New Arrivals</li>
                                            <li>✓ Built For Modern Lifestyles</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 md:p-10 text-center">

                                    <h3 className="font-display text-3xl md:text-4xl lg:text-6xl uppercase">
                                        Built For Real Men.
                                        <span className="block text-gradient-fire">
                                            Real Style. Real Life.
                                        </span>
                                    </h3>

                                    <p className="mx-auto mt-6 max-w-3xl">
                                        Style Daddy is designed for college students, young professionals,
                                        streetwear enthusiasts, content creators, and everyday fashion
                                        lovers. Whether you're heading to class, hanging out with friends,
                                        exploring the city, or creating content, Style Daddy helps you
                                        look confident and feel comfortable.
                                    </p>

                                </div>

                                    <div className="text-center pt-8">

                                    <h3 className="font-display text-3xl md:text-5xl uppercase">
                                        Style Daddy
                                    </h3>

                                    <p className="mt-3 font-display text-xl md:text-2xl uppercase text-gradient-fire">
                                        Built To Flex
                                    </p>

                                    <p className="mx-auto mt-6 max-w-3xl">
                                        Style Daddy isn't just another clothing store. It's a community
                                        built around confidence, individuality, and modern men's fashion.
                                        From oversized tees and cargo joggers to hoodies and statement
                                        pieces, Style Daddy helps you build a wardrobe that reflects
                                        your personality and keeps you ahead of the trend.Style Daddy Menswear is Hyderabad's modern destination for premium streetwear and everyday fashion.
                                        We specialize in oversized tees, cargo joggers, hoodies, denim, shirts, and trend-driven essentials.
                                        Our mission is to help men express confidence through bold and comfortable fashion.
                                        Every collection is designed with a focus on quality, fit, comfort, and style.
                                        Style Daddy combines streetwear culture with modern menswear aesthetics.
                                        We believe fashion should be accessible, affordable, and impactful.
                                        From college wear to weekend outfits, we create styles for every occasion.
                                        Our oversized silhouettes are built for comfort and contemporary appeal.
                                        Premium fabrics and attention to detail define every Style Daddy product.
                                        We constantly introduce fresh arrivals and exclusive fashion drops.
                                        Our collections are inspired by global trends and local street culture.
                                        Style Daddy is trusted by students, professionals, and fashion enthusiasts alike.
                                        We focus on creating versatile pieces that fit seamlessly into everyday life.
                                        Our goal is to deliver premium looks without premium price tags.
                                        Every product is selected to ensure style, durability, and comfort.
                                        We are committed to providing an easy and enjoyable shopping experience.
                                        Customer satisfaction remains at the heart of everything we do.
                                        Style Daddy is more than a clothing brand—it is a lifestyle and community.
                                        We help men build wardrobes that reflect confidence and individuality.
                                        Style Daddy Menswear — Own The Fit. Build The Rotation. Repeat The Damage.
                                    </p>

                                    <p className="mt-8 text-xl font-black uppercase tracking-[0.25em] text-primary">
                                        OWN THE FIT • BUILD THE ROTATION • REPEAT THE DAMAGE
                                    </p>

                                </div>

                            </div>
                        </div>
                    </section>

                </div>

            </section>

        </main>
    );
}