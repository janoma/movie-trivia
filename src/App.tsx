import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Popover } from "@mui/material";
import { clsx } from "clsx";
import { useState } from "react";

type Movie = {
  nameEmoji: string;
  nameStr: string;
};

const movies = [
  ["🦁🤴", "The Lion King"],
  ["✏️📓👩‍❤️‍👨", "The Notebook"],
  ["🎈👴🏠", "Up"],
  ["🤵🍸🔫", "James Bond"],
  ["🏃‍♂️ + 🌲🌳 + 🏃‍♂️", "Forrest Gump"],
  ["👓⚡️🪄", "Harry Potter"],
  ["👸 + 🐸", "The Princess and the Frog"],
  ["🦇🃏", "Batman"],
  ["🌎🦍🦧", "Planet of the Apes"],
  ["🏝🗺❌🏴‍☠️💰", "Treasure Island"],
  ["⚡️🧔‍♂️🔨", "Thor"],
  ["🗣🎶🌧", "Singin' in the Rain"],
  ["🌃🕛 + 🇫🇷🗼", "Midnight in Paris"],
  ["🍳☕️🍩♣️", "The Breakfast Club"],
  ["👩🧛🐺", "Twilight"],
  ["👻👻 + 🔫", "Ghostbusters"],
  ["❄️🛳👩‍❤️‍👨🚪", "Titanic"],
  ["🍆🍑🔞◻️", "Fifty Shades of Grey"],
  ["🐔 + 🏃‍♂️💨", "Chicken Run"],
  ["🩸 + 💎", "Blood Diamond"],
  ["🤫🐑", "The Silence of the Lambs"],
  ["🔎🐠", "Finding Nemo"],
  ["🔪👩🚿", "Psycho"],
  ["🍽 🙏 ❤️", "Eat Pray Love"],
  ["👸❤️🌹🐻", "Beauty and the Beast"],
  ["🐺🗽💰", "The Wolf of Wall Street"],
  ["🕔🔨🍊", "A Clockwork Orange"],
  ["🇯🇵💣⚓️", "Pearl Harbor"],
  ["🐍🐅📖", "The Jungle Book"],
  ["🤴 + 💬🎙", "The King's Speech"],
  ["👻🎥", "Scary Movie"],
  ["🌊\n+(🔟 x🧍+🧍)", "Ocean's Eleven"],
  ["📞💀🔪", "Scream"],
  ["🐳➡️🌊", "Free Willy"],
  [" 👑👴 + 💍💍", "The Lord of the Rings"],
  ["🐀🧑‍🍳🍝", "Ratatouille"],
  ["🏊🦈💀", "Jaws"],
  ["👳‍♂️🛶🐯", "Life of Pi"],
  ["👉👌 + 🌆", "Sex and the City"],
  ["🌃🏫👱‍♂️🔦", "Night at the Museum"],
  ["🧍‍♀️🧍🎥👻", "Paranormal Activity"],
  ["👩🐇🍄🎩🐛", "Alice in Wonderland"],
  ["🥁🤕", "Whiplash"],
  ["🕺🏻️🛩️", "Airplane!"],
  ["👽📞🚲", "E.T. the Extra-Terrestrial"],
  ["🦈 + 🌪️", "Sharknado"],
  ["🏃🏻🍫🦐", "Willy Wonka and the Chocolate Factory"],
  ["🚂🚽💉", "Trainspotting"],
  ["🧔🏻‍♂️️👨🏼‍🦳👴🏼🧔🏽‍♂️👨🏽‍🦳👴🏽\n🧔🏼‍♂️👴🏻👨🏻‍🦰👴🏼👴🏾🧔🏻‍♂️", "12 Angry Men"],
  ["🏃⚡️⚡️⚡️", "The Flash"],
  ["🪖🇺🇸❄️🪖", "Captain America: The Winter Soldier"],
  ["😃🎬", "The Emoji Movie"],
  ["👸🐸", "The Princess and the Frog"],
  ["💍💍 + 🏢🏢", "The Lord of the Rings: The Two Towers"],
].map(([nameEmoji, nameStr]) => ({ nameEmoji, nameStr } as Movie));

function App() {
  const [movieIdx, setMovieIdx] = useState(0);
  const [movie, setMovie] = useState<Movie>(movies[0]);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const goToNextMovie = () => {
    if (movieIdx < movies.length - 1) {
      const newIdx = movieIdx + 1;
      setMovieIdx(newIdx);
      setMovie(movies[newIdx]);
    }
  };

  const goToPrevMovie = () => {
    if (movieIdx > 0) {
      const newIdx = movieIdx - 1;
      setMovieIdx(newIdx);
      setMovie(movies[newIdx]);
    }
  };

  const arrowClasses = clsx(
    "w-32 h-32 mx-12 border border-gray-300 rounded-full",
    "p-6 bg-gray-50 hover:bg-gray-100 cursor-pointer disabled:text-gray-300",
    "disabled:hover:bg-gray-50 disabled:cursor-not-allowed"
  );

  return (
    <div className="h-svh overflow-hidden flex justify-between items-center *:text-center">
      <button
        className={arrowClasses}
        disabled={movieIdx === 0}
        onClick={goToPrevMovie}
      >
        <ChevronLeftIcon />
      </button>
      <div className="flex flex-col gap-12">
        <button
          className={clsx(
            "text-9xl border border-gray-300 tracking-widest rounded-3xl",
            "bg-gray-50 p-12 hover:bg-gray-100 whitespace-pre-wrap"
          )}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          {movie.nameEmoji}
        </button>
        <Popover
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div className="font-serif text-5xl p-12 italic">{movie.nameStr}</div>
        </Popover>
      </div>
      <button
        className={arrowClasses}
        disabled={movieIdx === movies.length - 1}
        onClick={goToNextMovie}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

export default App;
