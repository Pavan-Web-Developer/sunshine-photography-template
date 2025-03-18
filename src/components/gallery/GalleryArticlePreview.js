"use client";

import { ImageListItem, Grow } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const GalleryArticlePreview = ({
    id,
    slug,
    title,
    date,
    imageUrl,
    imageWidth,
    imageHeight,
    excerpt,
    likesCount,
    commentsCount,
    tags = []
}) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <article className="hentry promoted promoted-block-image author-naman-verma post-type-text article-index-1" data-item-id={id}>
            <div className="special-content">
                <div className="image-block-outer-wrapper">
                    <figure className="sqs-block-image-figure intrinsic">
                        <Link href={slug} className="sqs-block-image-link">
                            <div className="image-block-wrapper">
                                <Grow
                                    in={loaded}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(loaded ? { timeout: 1000 } : {})}
                                >
                                    <ImageListItem>
                                        <Image
                                            src={imageUrl}
                                            alt={title}
                                            width={imageWidth}
                                            height={imageHeight}
                                            className="thumb-image"
                                            priority
                                        />
                                    </ImageListItem>
                                </Grow>
                            </div>
                        </Link>
                    </figure>
                </div>
            </div>

            <header>
                <h1 className="entry-title">
                    <Link href={slug}>{title}</Link>
                </h1>
                <div className="meta">
                    <time className="published" dateTime={date}>
                        {new Date(date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                </div>
            </header>

            <div className="body entry-content">
                <p>{excerpt}</p>
                <Link href={slug} className="read-more">
                    Read More
                </Link>
            </div>

            <footer>
                <div className="meta">
                    {tags.length > 0 && (
                        <div className="first meta-row">
                            <span className="tags">
                                <span className="tags-title">Tags</span>
                                {tags.map((tag, index) => (
                                    <span key={tag.slug}>
                                        <Link href={`/stories/tag/${tag.slug}`} rel="tag">
                                            {tag.name}
                                        </Link>
                                        {index < tags.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </span>
                        </div>
                    )}

                    <div className="second meta-row">
                        <span className="sqs-simple-like">
                            <span className="like-icon"></span>
                            <span className="like-count">{likesCount} Likes</span>
                        </span>

                        {commentsCount > 0 && (
                            <span className="comments">
                                <Link href={`${slug}#comments-${id}`}>
                                    {commentsCount} Comments
                                </Link>
                            </span>
                        )}

                        <button className="share-button">Share</button>
                    </div>
                </div>
            </footer>
        </article>
    );
};

export default GalleryArticlePreview;
