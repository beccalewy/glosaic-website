
import { GradientBlob } from "./GradientBlob";

export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <GradientBlob position="top-left" />
      <GradientBlob position="bottom-right" />
    </div>
  );
}
