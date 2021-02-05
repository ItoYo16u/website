const Clicker = () => {
  const [c, set] = React.useState<
    "bg-black text-white" | "bg-white text-black"
  >("bg-black text-white")
  return (
    <div
      className={`transition ${c}`}
      onClick={() =>
        set(
          c === "bg-white text-black"
            ? "bg-black text-white"
            : "bg-white text-black"
        )
      }
    >
      Click me
    </div>
  )
}
const OnClickOrTouchStart = () => {
  const [click, setc] = React.useState<
      "bg-black text-white" | "bg-white text-black"
    >("bg-black text-white"),
    [touch, sett] = React.useState<
      "bg-black text-white" | "bg-white text-black"
    >("bg-black text-white")
  return (
    <div>
      <button
        onClick={() =>
          setc(
            click === "bg-white text-black"
              ? "bg-black text-white"
              : "bg-white text-black"
          )
        }
        onTouchEnd={() =>
          sett(
            touch === "bg-white text-black"
              ? "bg-black text-white"
              : "bg-white text-black"
          )
        }
      >
        Click?Touch?
      </button>
      <span className={click}>onClick</span>
      <span className={touch}>onTouchEnd</span>
    </div>
  )
}
