const mindarThree = new window.MINDAR.FACE.MindARThree({
  container: document.querySelector("#container"),
});

const { renderer, scene, camera } = mindarThree;

const start = async () => {
  console.log("MindAR 起動中...");
  const confettiTexture = new THREE.TextureLoader().load("confetti.png");
  const material = new THREE.SpriteMaterial({ map: confettiTexture, transparent: true });
  const sprite = new THREE.Sprite(material);

  sprite.scale.set(1, 1, 1);
  sprite.position.set(0.5, 0.2, 0);

  const anchor = mindarThree.addAnchor(1);
  anchor.group.add(sprite);

  const animate = () => {
    sprite.position.x -= 0.01;
    if (sprite.position.x < -0.5) sprite.position.x = 0.5;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  await mindarThree.start();
  console.log("MindAR 起動完了！");
  animate();
};

start();
