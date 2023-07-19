<template>
    <div>
        <div class="border-t border-gray-300 mb-8 w-[18rem] mx-auto">
        </div>
        <div class="my-8 m-12 text-base md:mx-auto font-semibold border-b-4 tracking-wide border-yellow-300 w-24"> My work</div>
        <div class="flex justify-center gap-4 md:gap-8 mx-8">
            <div v-for="(f, i) in filtred" :key="i"
                class="bg-yellow-300 p-2 px-4 md:text-sm text-xs font-semibold rounded-md grid content-center uppercase">{{
                    f }}</div>
        </div>
        <div class="portfolio grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:px-28 px-4 my-8">
            <div v-for="(work, index) in mywork" :key="index"
                class="lg-width w-[20rem] mx-auto md:w-auto  md:h-[8rem] text-center">
                <img :src="work.imageUrl" :alt="work.name" class="h-full w-full border-grey-400 border-2 " />
            </div>
        </div>
    </div>
</template>
<script >
import madaris from "../assets/img/Madaris.png"
import codingart from "../assets/img/Codingart.png"
import daba from "../assets/img/Daba.png"
import storeino from "../assets/img/Storeino.png"
import POS from "../assets/img/POS.png"

export default {
    data() {
        return {
            mywork: [
                { name: "Madaris", imageUrl: madaris },
                { name: "Codingart", imageUrl: codingart },
                { name: "Daba", imageUrl: daba },
                { name: "Storeino", imageUrl: storeino },
                { name: "POS", imageUrl: POS },
            ],
            filtred: ['ALL', 'FullSTACK', 'FRONT-END']
        };
    },
}

</script>
<style scoped>
@media (min-width: 768px) {
    /* .website {
        height: 6rem;
        width: 11rem;
    } */
}

@media (min-width: 1024px) {
    .portfolio {
        /* gap: 4px;         */
        width: 70rem;
        margin-left: auto;
        margin-right: auto;
    }

    .lg-width {
        width: 17rem;
        height: 10rem;

    }
}
</style>
