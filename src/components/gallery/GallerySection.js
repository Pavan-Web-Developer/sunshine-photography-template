"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ImageList, ImageListItem, Grow } from '@mui/material';

const GallerySection = ({ title, date, images, eventDetails, likeCount, onLikeClick }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <article className="hentry promoted promoted-block-image tag-destination-weddings tag-luxury-wedding">
            <div className="special-content">
                <div className="image-block-outer-wrapper">
                    <figure className="sqs-block-image-figure intrinsic">
                        <Link href="/stories/2021/6/4/kavya-and-karan" className="sqs-block-image-link">
                            <div className="image-block-wrapper">
                                <Image
                                    src="https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1622795114742-QZWQI7GDF3VNTGU5XNUK/Kavgetsgroovy.jpg"
                                    alt="Kavgetsgroovy.jpg"
                                    width={2500}
                                    height={1002}
                                    className="thumb-image"
                                    priority
                                />
                            </div>
                        </Link>
                    </figure>
                </div>
            </div>

            <header>
                <h1 className="entry-title">
                    <Link href="/stories/2021/6/4/kavya-and-karan">
                        {title}
                    </Link>
                </h1>
                <div className="meta">
                    <time className="published" dateTime={date}>
                        {date}
                    </time>
                </div>
            </header>

            <div className="body entry-content">
                <div className="event-details">
                    <p className="text-center">{eventDetails}</p>
                </div>

                <div className="image-gallery">
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {images.map((image, index) => (
                            <Grow
                                in={loaded}
                                key={image.src}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(loaded ? { timeout: 1000 + (index * 300) } : {})}
                            >
                                <ImageListItem>
                                    <img
                                        src={`${image.src}?w=248&fit=crop&auto=format`}
                                        srcSet={`${image.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={image.alt}
                                        loading="lazy"
                                        style={{
                                            borderRadius: '4px',
                                            width: '100%',
                                            height: 'auto'
                                        }}
                                    />
                                </ImageListItem>
                            </Grow>
                        ))}
                    </ImageList>
                </div>
            </div>

            <footer className="gallery-footer">
                <div className="meta">
                    <div className="tags">
                        <span className="tags-title">Tags: </span>
                        <Link href="/tags/destination-weddings">destination weddings</Link>,{' '}
                        <Link href="/tags/luxury-wedding">Luxury wedding</Link>
                    </div>

                    <div className="interactions">
                        <button
                            className="like-button"
                            onClick={onLikeClick}
                        >
                            <span className="like-icon">♥</span>
                            <span>{likeCount} Likes</span>
                        </button>

                        <button className="share-button">
                            Share
                        </button>
                    </div>
                </div>
            </footer>
        </article>
    );
};

export default GallerySection;
