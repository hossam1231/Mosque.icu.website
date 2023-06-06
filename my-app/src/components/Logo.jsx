import Image from 'next/image'
import imageAsset from '/public/images/logo.png'

export default function Logo() {
  return (
    <>
      <Image
        src={imageAsset}
        width={50}
        height={50}
        style={{
          borderRadius: '10px',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </>
  )
}
