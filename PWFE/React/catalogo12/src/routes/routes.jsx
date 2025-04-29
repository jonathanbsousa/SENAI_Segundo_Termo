import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/home'
import { List } from '../components/list/list'
import { Series } from '../pages/series/series'
import { Profile } from '../pages/profile/profile'
import { ListSeries } from '../components/list/list_series'

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<List />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/series" element={<Series />} >
                <Route index element={<ListSeries />}/>
                </Route>
            </Route>
        </Routes>
    )
}