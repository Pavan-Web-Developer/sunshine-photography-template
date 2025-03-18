"use client";
import GallerySection from "@/components/gallery/GallerySection";
import { useState } from 'react';

const StoryPage = () => {
    const [likeCount, setLikeCount] = useState(146);

    const images = [
        {
            id: "60b92595c4ba2819f163ba3d",
            src: "https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1622746532951-X4MO9W9HJZ4ZJY4N28JA/00_NVP_KAVYAKARAN_PREWEDDING-2002.jpg",
            alt: "00_NVP_KAVYAKARAN_PREWEDDING-2002.jpg",
            width: 1920,
            height: 1282
        },

        {
            src: "https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1622746547655-NLHOGJBFHM0L17M2Y8D5/00_NVP_KAVYAKASRAN_PREWEDDING-2381.jpg",
            alt: "Pre-wedding couple photo",
            width: 2500,
            height: 834
        },
        {
            src: "https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1622746515350-9OW1D3AZJC0NR8FEZ8Z4/00_NVP_KAVYAKARAN_PREWEDDING-1188.jpg",
            alt: "Wedding ceremony photo",
            width: 1920,
            height: 1282
        },
        {
            src: "https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1622746532953-N1G2NGH0TLN1SR4BQNR3/00_NVP_KAVYAKARAN_PREWEfDDING-1861.jpg",
            alt: "Wedding portrait",
            width: 2500,
            height: 1871
        },
        // Add mehendi ceremony images
        {
            src: "https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1622746664107-8CPB65SXLXH0FKHXQZRH/02_NVP_KAVYAKARAN_MEHsENDI-1421.jpg",
            alt: "Mehendi ceremony",
            width: 2500,
            height: 1868
        },
        // Add sangeet images
        {
            src: "https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1622746730549-DPS12E784ZSGLQDTTOI1/02_NVP_KAVYAKARANg_SANGEET-1141.jpg",
            alt: "Sangeet celebration",
            width: 2500,
            height: 1871
        },
        // Add reception images
        {
            src: "https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1622747008579-C6VAZV6OM84FK4G40S0S/04_NVP_KAVYAKARAN_MEHFILPOOLPARTY-1132.jpg",
            alt: "Reception party",
            width: 1920,
            height: 1282
        }
    ];
    return (
        <div className="p-4">
            <GallerySection
                title="KAVYA & KARAN"
                date="June 4, 2021"
                images={images}
                eventDetails={`Wedding Planning / Decor: Rimjhim Events & Keeran the wedding planner
Makeup: Bianca Louzado
Outfits: Sabyasachi, Jade by Monika Karishma
Entertainment: Bounce band, DJ Nitesh`}
                likeCount={likeCount}
                onLikeClick={() => setLikeCount(prev => prev + 1)}
            /> </div>
    );
};

export default StoryPage;