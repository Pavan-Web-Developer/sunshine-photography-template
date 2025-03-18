"use client";


import { ImageList } from '@mui/material';
import GalleryArticlePreview from '../../../../components/gallery/GalleryArticlePreview.js';

const GalleryPage = () => {

  const previewArticles = [
    {
      id: "6347e21508dd664e4764bcf5",
      slug: "gallery/stories?alisha-amp-rahul",
      title: "ALISHA & RAHUL",
      date: "2022-10-13",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/b5430788-0168-4bab-a89d-c7056e192cde/bf41c11de117745e925cf64baf4b6cef.jpg",
      imageWidth: 1920,
      imageHeight: 872,
      excerpt: ".",
      likesCount: 92,
      commentsCount: 36
    },
    {
      id: "60b923b3833814232bea922c",
      slug: "gallery/stories?kavya-and-karan",
      title: "KAVYA & KARAN",
      date: "2021-06-04",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1622795114742-QZWQI7GDF3VNTGU5XNUK/Kavgetsgroovy.jpg",
      imageWidth: 2500,
      imageHeight: 1002,
      excerpt: "#kavgetsgroovy",
      likesCount: 146,
      commentsCount: 19,
      tags: [
        { slug: "destination-weddings", name: "destination weddings" },
        { slug: "luxury-wedding", name: "Luxury wedding" }
      ]
    },
    {
      id: "60a524a825c8aa6d5b4862f9",
      slug: "gallery/stories?trisha-and-nihaal",
      title: "TRISHA & NIHAAL",
      date: "2021-05-20",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1621494292958-MCX7MF9LS4AR6M50JT44/TNCOVER.jpg",
      imageWidth: 1440,
      imageHeight: 554,
      excerpt: "It unfolded like a scene straight out of a movie as Nihaal & Trisha took their last phera.",
      likesCount: 137,
      commentsCount: 31,
      tags: [
        { slug: "intimate", name: "intimate" },
        { slug: "weddings", name: "weddings" },
        { slug: "luxury-wedding", name: "Luxury wedding" }
      ]
    }
  ];



  return (
    <div className="article-list hfeed">
      <ImageList variant="masonry" cols={1} gap={6}>

        {previewArticles.map(article => (
          <GalleryArticlePreview
            key={article.id}
            {...article}
          />
        ))}
      </ImageList>

      <div className="post-divider"></div>


    </div>
  );
};

export default GalleryPage;
