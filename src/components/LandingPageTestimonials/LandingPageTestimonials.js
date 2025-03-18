import { ImageList, ImageListItem, Grow, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const LandingPageTestimonials = () => {
    const [loaded, setLoaded] = useState(false);
    const testimonials = [
        {
            id: 1,
            image: "https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/b568ecd3-28fb-40e7-ab18-1355533a3ef0/DSC_7323-2-2.jpg",
            title: "TRISHA X NIHAAL // HYDERABAD //",
            link: "/IN/gallery/stories?trisha-and-nihaal",
            width: 500,
            height: 1000
        },
        {
            id: 2,
            image: "https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1560078190489-57YR27IWNV0ZLCZU6TN9/ashnabrett.jpg",
            title: "ASHNA X BRETT // HYDERABAD //",
            link: "/IN/gallery/stories?ashna-and-brett",
            width: 500,
            height: 1000
        },
        {
            id: 3,
            image: "https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1560078414127-Q07FY2XD2PPEA3VR388F/03_NVP_PIYACYRUS_RECEPTION-4143-side.jpg",
            title: "PIYA X CYRUS // COORG //",
            link: "/IN/gallery/stories?piya-and-cyrus",
            width: 500,
            height: 1000
        }
    ];

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className="px-4 py-4 md:px-0 max-w-7xl mx-auto font-proxima-nova text-[#575757] leading-[1.8em]">
            <ImageList
                variant="standard"
                cols={3}
                gap={24}
                sx={{ overflow: 'hidden' }}
            >
                {testimonials.map((item, index) => (
                    <Grow
                        in={loaded}
                        key={item.id}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(loaded ? { timeout: 1000 + (index * 500) } : {})}
                    >
                        <ImageListItem
                            sx={{
                                height: 'auto !important',
                                overflow: 'hidden'
                            }}
                        >
                            <Link href={item.link} className="block">
                                <div className="group relative">
                                    <div className="relative h-[500px] overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            priority
                                        />
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="text-sm font-light tracking-wider uppercase">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </ImageListItem>
                    </Grow>
                ))}
            </ImageList>
        </div>
    );
};

export default LandingPageTestimonials;
