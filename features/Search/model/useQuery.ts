import {useSearchParams} from "next/navigation";

export function useQuery(): string{
    const queryParams = useSearchParams()
    return queryParams.toString() ? "&" + queryParams.toString() : ""
}