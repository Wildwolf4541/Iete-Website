import styles from '../css/gallery.module.css'
import Heading from '../components/Heading'
import elementos1 from '../assets/photos/elementos/one.jpeg'
import elementos2 from '../assets/photos/elementos/two.jpeg'
import elementos3 from '../assets/photos/elementos/three.jpeg'
import elementos4 from '../assets/photos/elementos/four.jpeg'
import elementos5 from '../assets/photos/elementos/five.jpeg'
import elementos6 from '../assets/photos/elementos/six.jpeg'
import elementos7 from '../assets/photos/elementos/seven.jpeg'

import orientation1 from '../assets/photos/orientation/IMG-20240906-WA0022.jpeg'
import orientation2 from '../assets/photos/orientation/IMG-20240906-WA0031.jpeg'
import orientation3 from '../assets/photos/orientation/IMG-20240906-WA0038.jpeg'
import orientation4 from '../assets/photos/orientation/IMG-20240906-WA0062.jpeg'
import orientation5 from '../assets/photos/orientation/IMG-20240907-WA0022.jpeg'

import satXiete1 from '../assets/photos/satXiete/IMG-20241116-WA0013.jpeg'
import satXiete2 from '../assets/photos/satXiete/IMG-20241117-WA0009.jpeg'
import satXiete3 from '../assets/photos/satXiete/IMG-20241117-WA0013.jpeg'
import satXiete4 from '../assets/photos/satXiete/IMG-20241117-WA0019.jpeg'
import satXiete5 from '../assets/photos/satXiete/IMG-20241118-WA0004.jpeg'
import satXiete6 from '../assets/photos/satXiete/IMG-20241118-WA0036.jpeg'
import satXiete7 from '../assets/photos/satXiete/IMG-20241123-WA0086.jpeg'

import socFair1 from '../assets/photos/soc fair/IMG-20240901-WA0023.jpeg'
import socFair2 from '../assets/photos/soc fair/IMG-20240902-WA0007.jpeg'
import socFair3 from '../assets/photos/soc fair/IMG-20240902-WA0013.jpeg'
import socFair4 from '../assets/photos/soc fair/IMG-20240902-WA0019.jpeg'
import socFair5 from '../assets/photos/soc fair/IMG-20240902-WA0022.jpeg'
import socFair6 from '../assets/photos/soc fair/IMG-20240902-WA0026.jpeg'
import socFair7 from '../assets/photos/soc fair/IMG-20240902-WA0032.jpeg'
import Button from '../components/Button'

const events = [
  {
    id: 1,
    name: 'Elementos',
    images: [
      elementos1,
      elementos2,
      elementos3,
      elementos4,
      elementos5,
      elementos6,
      elementos7,
    ],
  },
  {
    id: 2,
    name: 'Orientation',
    images: [
      orientation1,
      orientation2,
      orientation3,
      orientation4,
      orientation5,
    ],
  },
  {
    id: 3,
    name: 'SatXiete',
    images: [
      satXiete1,
      satXiete2,
      satXiete3,
      satXiete4,
      satXiete5,
      satXiete6,
      satXiete7,
    ],
  },
  {
    id: 4,
    name: 'Society Fair',
    images: [
      socFair1,
      socFair2,
      socFair3,
      socFair4,
      socFair5,
      socFair6,
      socFair7,
    ],
  },
]

const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <Heading text="GALLERY" />

      <div className={styles.eventsContainer}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventSection}>
            <div className={styles.eventHeader}>
              <Button text={event.name} />
            </div>

            <div className={styles.eventGrid}>
              {event.images.map((image, index) => (
                <div key={index} className={styles.eventCard}>
                  <div className={styles.cardContent}>
                    <div className={styles.imageContainer}>
                      <img
                        src={image}
                        alt={`${event.name} photo ${index + 1}`}
                        className={styles.eventImage}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
