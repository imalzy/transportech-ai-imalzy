// src/features/characters/hooks/useCharacters.ts
import { useEffect } from "react";
import { getCharacters } from "../api/character.api";
import { useCharacterStore } from "../store/character.store";

export const useCharacters = () => {
  const { currentPage, searchName, statusFilter, setCharacters, setLoading, setError } =
    useCharacterStore();

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await getCharacters(currentPage, searchName, statusFilter);
        console.log(res);
        setError(null);
        setCharacters(res.data || [], res.meta);
      } catch (err) {
        console.log(err);

        setError("Failed to load characters");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [currentPage, searchName, statusFilter]);

  return useCharacterStore();
};
