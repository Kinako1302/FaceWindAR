const mindarThree = new window.MINDAR.FACE.MindARThree({
  container: document.querySelector("#container"),
});

const { renderer, scene, camera } = mindarThree;

const start = async () => {
  console.log("MindAR 起動中...");

  renderer.setSize(window.innerWidth, window.innerHeight);

  const confettiTexture = new THREE.TextureLoader().load("confetti.png");
  const geometry = new THREE.PlaneGeometry(1, 1);
  const material = new THREE.MeshBasicMaterial({ map: confettiTexture, transparent: true });
  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.set(0.5, 0.2, 0);

  const anchor = mindarThree.addAnchor(1);
  anchor.group.add(mesh);

  const animate = () => {
    mesh.position.x -= 0.01;
    if (mesh.position.x < -0.5) mesh.position.x = 0.5;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  await mindarThree.start();
  console.log("MindAR 起動完了！");
  animate();
};

start();
