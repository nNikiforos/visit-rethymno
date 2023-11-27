<template>
  <slot name="mini-gallery">
    <div class="home__flexcontent-minigallery">
      <h3 class="title">Mini gallery</h3>
      <div class="grid__images">
        <div class="grid__images-miniboxes">
          <a
            id="oldtown"
            href="https://en.wikipedia.org/wiki/Rethymno"
            target="_blank"
          >
            <img src="/img/home/miniboxes/oldtown.jpg" alt="Old Town" />
          </a>
          <a
            id="arkadi"
            href="https://en.wikipedia.org/wiki/Arkadi"
            target="_blank"
          >
            <img src="/img/home/miniboxes/arkadi.jpg" alt="Arkadi" />
          </a>
          <a
            id="fortetza"
            href="https://en.wikipedia.org/wiki/Fortezza_of_Rethymno"
            target="_blank"
          >
            <img src="/img/home/miniboxes/fortetza.jpg" alt="Fortetza" />
          </a>
          <a
            id="preveli"
            href="https://en.wikipedia.org/wiki/Preveli"
            target="_blank"
          >
            <img src="/img/home/miniboxes/preveli.jpg" alt="Preveli" />
          </a>
          <a
            id="Frangokastello"
            href="https://en.wikipedia.org/wiki/Frangokastello"
            target="_blank"
          >
            <img
              src="/img/home/miniboxes/Frangokastello.jpg"
              alt="Frangokastello"
            />
          </a>
          <a
            id="samaria"
            href="https://en.wikipedia.org/wiki/Samari%C3%A1_Gorge"
            target="_blank"
          >
            <img src="/img/home/miniboxes/samaria.jpg" alt="Samaria Gorge" />
          </a>
          <a
            id="kournas"
            href="https://en.wikipedia.org/wiki/Lake_Kournas"
            target="_blank"
          >
            <img src="/img/home/miniboxes/kournas.jpg" alt="Kournas" />
          </a>
          <a
            id="tzami"
            href="https://en.wikipedia.org/wiki/Neradje_Mosque"
            target="_blank"
          >
            <img src="/img/home/miniboxes/tzami.jpg" alt="Tzami" />
          </a>
          <a
            id="lighthouse"
            href="https://www.wikidata.org/wiki/Q28375077"
            target="_blank"
          >
            <img src="/img/home/miniboxes/lighthouse.jpg" alt="Lighthouse" />
          </a>
        </div>
      </div>
    </div>
  </slot>
</template>

<style lang="scss" scoped>
.title {
  text-transform: uppercase;
}
.grid__images {
  &-miniboxes {
    display: grid;
    grid-template-rows: repeat(auto, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    img {
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.772);
    }

    #oldtown {
      grid-column: 1;
      grid-row: 1/3;
    }

    #fortetza {
      grid-column: 3;
      grid-row: 1/1;
    }

    #Frangokastello {
      grid-column: 1/3;
      grid-row: 3;
    }

    #samaria {
      grid-column: 4;
      grid-row: 2/4;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
      transition: transform 0.4s ease-in-out;

      &:hover {
        transform: scale(1.02);
      }
    }
  }
}
</style>
