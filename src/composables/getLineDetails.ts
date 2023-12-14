import {ref} from "vue";

export function getLineDetails(lineNumber: number) {
    const data = ref({})
    const error = ref(null)

    fetch(`http://localhost:3000/stops?line=${lineNumber}&_sort=stop&_order=asc`)
        .then(res => res.json())
        .then((json) => {
            data.value = {
                line: lineNumber,
                stops: json
                    .filter((item: IStopData, i: number, a: IStopData[]) => {
                        const exItem = a.findIndex((elem) => {
                            return (elem.stop == item.stop);
                        });
                        return exItem === i;
                    })
                    // .sort((a: IStopData, b: IStopData) => a.order-b.order)
            };
        })
        .catch((err) => (error.value = err))

    return {data, error}
}
