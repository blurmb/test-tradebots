type IconProps = {
  type: "img"; // можно добавить поддержку svg, но их в проекте нет
  src: string;
  size?: number;
  alt?: string;
};
export const Icon = ({ src, size = 22, alt }: IconProps) => {
  return <img width={size} height={size} src={src} alt={alt} />;
};
