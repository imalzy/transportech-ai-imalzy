"use client";

import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import { useCharacterStore } from "../store/character.store";
import { useEffect, useState } from "react";
import { Character } from "../types/character.types";
import { useRouter } from "next/navigation";
import { useCharacters } from "../hooks/useCharacters";

const FavoritesPage = () => {
    const favoriteIds = useCharacterStore.getState().favorites;

    const { setCharacter } = useCharacters();
    const router = useRouter();
    const [favorites, setFavorites] = useState<Character[]>([]);

    if (favoriteIds.length === 0) return <span>Empty</span>;

    const handleDetail = (character: Character) => {
        setCharacter(character)
        router.push(`/${character.id}`);
    };

    useEffect(() => {
        const init = async () => {
            const res = await axios.get(
                `https://rickandmortyapi.com/api/character/${favoriteIds}`
            );
            const data = res.data;
            setFavorites((prev) => [...prev, ...data]);
        }
        init();
    }, [favoriteIds])


    return (
        <section className={`py-4 md:py-6 px-4 md:px-8 pb-0!`}>
            <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:max-h-[400px]">

                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-3xl font-bold">List favorites</h1>
                </div>

                {favorites.length === 0 && (
                    <div className="text-center py-28 text-gray-500">
                        <p className="text-lg">You don't have any favorite characters yet.</p>
                        <p>Click on the heart 💙 to save characters.</p>
                    </div>
                )}

                <div className="p-6 space-y-8">
                    {favorites.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {
                                favorites && favorites.map((character) => (
                                    <CharacterCard key={character.id}
                                        id={character.id}
                                        name={character?.name}
                                        status={character?.status}
                                        species={character?.species}
                                        origin={character?.origin?.name}
                                        image={character?.image}
                                        handleClick={() => handleDetail(character)}
                                    />
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default FavoritesPage;