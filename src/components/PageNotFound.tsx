import notFound from '../assets/404.svg';

function PageNotFound() {
  return (
    <>
      <div className="grid grid-cols-1 gap-[20px] text-center font-(family-name:--font-body)">
        <div className="my-[var(--s-4)] mx-0 text-[var(--fg-display)] text-[48px] font-(family-name:--font-display) font-normal tracking-[var(--ls-display] leading-[1.04] text-center">
          No one is home at the moment
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          sed velit dapibus, elementum ex eu, congue tortor. Quisque magna
          tellus, placerat eget consequat nec, pulvinar vel libero. Vivamus
          mattis nunc at quam convallis convallis ac ut quam. Sed varius congue
          nisl, vel consequat velit semper tincidunt.
        </p>
        <p>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Ut imperdiet magna in congue euismod. Morbi
          eget metus eu orci consequat tincidunt. Morbi placerat sem vel lacus
          iaculis venenatis. Curabitur eros lectus, consequat ut ornare eget,
          malesuada vel felis. Praesent nec odio fermentum, dapibus eros eget,
          hendrerit nunc. Etiam commodo lobortis metus, et pulvinar nunc
          lobortis vitae.
        </p>
      </div>
      <img src={notFound} />
    </>
  );
}

export default PageNotFound;
