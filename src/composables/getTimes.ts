import {ref} from "vue";

export function getTimes(lineNumber: number, order: number) {
    const data = ref({})
    const error = ref(null)

    fetch(`http://localhost:3000/stops?line=${lineNumber}&order=${order}`)
        .then(res => res.json())
        .then((json) => {
            data.value = {
                stop: json.length > 0 ? json[0].stop : '',
                times: json.map((item: IStopData) => {
                        return item.time.length === 4 ? `0${item.time}` : item.time
                    }).sort()
            }
        })
        .catch((err) => (error.value = err))

    return {data, error}
}
