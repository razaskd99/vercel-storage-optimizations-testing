import { list } from '@vercel/blob';
import Image from 'next/image';
 
export async function MyImages() {
  async function allImages() {
    const blobs = await list({cache: 'force-cache' });
    return blobs;
  }
  const images = await allImages();
 
  return (
    <section>
      {images.blobs.map((image) => (
        <Image
          priority
          key={image.pathname}
          src={image.url}
          alt="Image"
          width={200}
          height={200}
        />
      ))}
    </section>
  );
}