import {ref} from "vue";

export function getLines() {
    const data = ref([])
    const error = ref(null)

    fetch(`http://localhost:3000/stops?_sort=line&_order=asc`)
        .then(res => res.json())
        .then((json) => {
            data.value = json
                .map((stop: IStopData) => stop.line)
                .filter((item: number, i: number, a: number[]) => a.indexOf(item) == i)
        })
        .catch((err) => (error.value = err))

    return {data, error}
}