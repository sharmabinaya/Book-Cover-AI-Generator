import { Stage, Layer, Text, Image } from "react-konva";
import { useState } from "react";

export default function Editor({ initialCover }) {
  const [cover, setCover] = useState(initialCover);

  return (
    <div>
      <h2>Edit Your Cover</h2>
      <Stage width={500} height={700}>
        <Layer>
          <Image image={cover} />
          <Text text="Drag your title here" fontSize={24} draggable />
        </Layer>
      </Stage>
    </div>
  );
}
