interface Props {
  condition: boolean;
  children: JSX.Element;
}

export function Visible({ condition, children }: Props) {
  return condition ? children : null;
}
