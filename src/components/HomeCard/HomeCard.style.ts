import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex-col
  w-64
  rounded-md
  m-2
  drop-shadow-lg
`;

export const Image = tw.img`
  rounded-md
  -z-50
`;

export const BottomContainer = tw.div`
p-4
rounded-md
bg-white
-mt-8
relative
z-20
`;
