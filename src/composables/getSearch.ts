import {ref} from "vue";

export function getSearch(search: string) {
    const data = ref([])
    const error = ref(null)

    fetch(`http://localhost:3000/stops?_sort=line&_order=desc&q=${search}`)
        .then(res => res.json())
        .then((json) => {
            data.value = json.filter((item: IStopData, i: number, a: IStopData[]) => {
                const exItem = a.findIndex((elem) => {
                    return (elem.stop == item.stop);
                });
                return exItem === i;
            })
        })
        .catch((err) => (error.value = err))

    return {data, error}
}