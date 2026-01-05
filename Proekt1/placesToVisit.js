document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = localStorage.getItem("userName");
  const places = [
    {
      name: "National Museum",
      img: "museum.jpg",
      desc: "The National Museum (Národní Muzeum) in Prague is the largest and oldest museum in Czechia. It occupies two iconic buildings at the top of Wenceslas Square, the Historical Building and the New Building, with an Underground Corridor linking the two. Visitors can also ride a lift up to the grand Cupola to take in views of the city. The focus of the National Museum is nature, the history of Czechia, ethnography, music and literature. In addition, it hosts temporary exhibitions on a variety of topics from communism to ancient Egypt to space travel.",
    },
    {
      name: "Prague ZOO",
      img: "zoo2.jpg",
      desc: "Prague Zoological Garden is situated near the center of the Czech capital, in a unique rugged landscape on the bank of the Vltava River. It opened in 1931 and during its existence of more than 80 years it has risen to become one of the most prestigious zoos in the world. Today, it is the second most visited tourist destination in the Czech Republic, just after Prague Castle. 5,049 animals and 676 species live in Prague Zoo. You can explore 13 pavilions and 150 exhibits over 58 hectares. The kids will love the Bororo Reserve, chairlift, mini-train, observation tower, paddling pool and Children’s Zoo. The pride of the zoo is its Elephant Valley, home to a sizeable herd of Asian elephants. The Giant Salamander House, where you can see the largest amphibians in the world – the critically endangered Chinese Giant Salamanders – is extraordinary as well; and the African House with an adjacent vast meadow inhabited by herds of antelopes and giraffes is worth your attention, too.",
    },
    {
      name: "Astronomical Clock",
      img: "clock2.jpg",
      desc: "The Astronomical Clock (Pražský orloj), dating from the 15th century, is built into the southern wall of the Old Town Hall Tower at Prague's Old Town Square. To witness its intricate construction in motion, join the crowd in front of the tower and watch the Procession of the Twelve Apostles: a trap door opens and Christ leads his disciples out, as a skeleton representing of Death tolls a bell to a statue of a defiant Turk. The spectacle takes place on the hour, every hour from 08:00 to 23:00, and is a must-see for first-time visitors to Prague.",
    },
    {
      name: "Charles Bridge",
      img: "bridge.jpg",
      desc: "Charles Bridge is one of the most beautiful and photographed monuments in the world. It is guarded by thirty statues and sculptures of saints. They represent the great personalities of European and global history, each of whom somehow moved the world and changed it for the better. The spirituality of the saints gives Charles Bridge a mystical aura, a sort of open-air temple enclosed by the bridge towers. The magic of Charles Bridge stands out especially at night, when the light of the gas lamps sculpts new events and relationships into the stone. It is then that Prague legends rise to the surface, with supernatural happenings, statues leaving their pedestals and going to the aid of humans.",
    },
    {
      name: "Letna Park",
      img: "letna2.jpg",
      desc: "Climb up to Letná Park and get yet another breathtaking perspective over Prague. In the past decade, Prague 7 (first-time visitors, take note: Prague is divided into sections and assigned numbers) has morphed from a sleepy residential neighbourhood into one that’s vibrant and full of cool boutiques and restaurants. Letná Park features a massive kinetic sculpture of a moving metronome; its foundation was once the base of an enormous Stalin monument torn down in 1962. Letná beer garden’s park benches and views of the Old Town across the Vltava are an after-work favourite among locals, dog walkers and international travellers. Note that despite the idyllic picnic setting, you’re not allowed to bring any food or drink from outside into the beer garden.",
    },
    {
      name: "Prague Castle",
      img: "castleprague.jpg",
      desc: "Dominated by the Gothic St. Vitus Cathedral, the ninth-century Prague Castle has been a seat of power for Czech emperors, kings and presidents alike. Exploring every corner of these massive fortifications would take an entire trip, so read up in advance and take your pick. Our favourite sights include the tiny houses of Golden Lane, the Romanesque façade of St George’s Basilica, and the manicured landscapes of the South Gardens. Not even to mention Alphonse Mucha’s striking stained-glass windows.",
    },
    {
      name: "Karlovy Lazne Nightclub",
      img: "disco.jpg",
      desc: "Karlovy Lazne is the largest club complex in Central Europe, and one of the coolest places in Prague to hang out.One entrance fee essentially gains you entry to 5 clubs, spread over 5 levels. Each floor at Karlovy Lazne has its own style, ranging from disco to hard-core dance; enough variation to keep even the most ardent clubber entertained all night. The Karlovy Lazne building dates from the 14th/15th centuries. Original mosaic tiles adorn some of the walls and floors, while old spa pools (minus the water) serve as two of the pumping dance floors.",
    },
    {
      name: "A day trip to Karlovy Vary",
      img: "karlovyvary.jpg",
      desc: "Karlovy Vary (Carlsbad) is a spa town in the west Bohemia region of the Czech Republic. Its numerous thermal springs have made it a popular resort since the 19th century. The riverside spa district is home to several colonnades with columned walkways. The modern Hot Spring Colonnade houses the Pramen Vřídlo geyser, which spouts up to 12 meters high.",
    },
    {
      name: "Franz Kafka head",
      img: "kafka2.jpg",
      desc: "The eleven-metre-high statue is a 21st-century technical marvel of Prague. Forty-two moving panels form the face of the great Czech writer Franz Kafka. The statue by David Cerny stands at the Quadrio shopping centre and combines art with modern technologies and the traditional golden hands of Czech craftsmen. Watch the Metamorphosis, wait for the right alignment of the panels and discover Kafka!",
    },
    {
      name: "Dancing House",
      img: "dancinghouse2.jpg",
      desc: "A gem of modern architecture, a symbol of democracy and the freedom of the 1990s, yet also a stylish hotel with a first-class restaurant and a breathtaking view of Prague Castle – the Dancing House is all that. Designed by architects Vlado Milunić and Frank O. Gehry, it has forever changed the appearance of Rašín Embankment. Today, you can relish exquisite cuisine, chill out with a cocktail on the terrace, or spend an unforgettable night in a modernly furnished suite. The Dancing House has much to offer. Shall we dance?",
    },
  ];
  let currentIndex = 0;
  const comments = {};
  const img = document.getElementById("place-image");
  const nameEl = document.getElementById("place-name");
  const descEl = document.getElementById("place-desc");
  const list = document.getElementById("comment-list");
  const input = document.getElementById("comment-input");
  const addBtn = document.getElementById("add-comment");
  const nextBtn = document.getElementById("next-place");
  const prevBtn = document.getElementById("prev-place");

  const setPlace = () => {
    const place = places[currentIndex];
    img.classList.remove("image-fade-in");
    img.src = place.img;
    void img.offsetWidth;
    img.classList.add("image-fade-in");
    nameEl.textContent = place.name;
    descEl.textContent = place.desc;
    setComments();
  };
  const setComments = () => {
    list.innerHTML = "";
    const placeComments = comments[currentIndex] || [];
    placeComments.forEach((commentObject, index) => {
      const li = document.createElement("li");
      const textSpan = document.createElement("span");
      textSpan.textContent = commentObject.text;
      const actionsDiv = document.createElement("div");
      actionsDiv.className = "comment-actions";
      const likeBtn = document.createElement("button");
      likeBtn.className = "like-btn";
      if (commentObject.isLiked) {
        likeBtn.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> (1)';
        likeBtn.classList.add("liked");
      } else {
        likeBtn.innerHTML = '<i class="fa-regular fa-thumbs-up"></i> (0)';
      }
      likeBtn.addEventListener("click", () => {
        commentObject.isLiked = !commentObject.isLiked;
        setComments();
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
      deleteBtn.className = "delete-comment-btn";

      deleteBtn.addEventListener("click", () => {
        const isConfirmed = confirm("Do you want to delete this comment?");
        if (isConfirmed) {
          comments[currentIndex].splice(index, 1);
          setComments();
        }
      });

      li.appendChild(textSpan);
      actionsDiv.appendChild(likeBtn);
      actionsDiv.appendChild(deleteBtn);
      li.appendChild(actionsDiv);
      list.appendChild(li);
    });
  };
  addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;
    if (!comments[currentIndex]) comments[currentIndex] = [];

    const formattedText = `${loggedInUser} said: ${text}`;

    const newComment = {
      text: formattedText,
      isLiked: false,
    };

    comments[currentIndex].push(newComment);
    input.value = "";
    setComments();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % places.length;
    setPlace();
  });
  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = places.length - 1;
    }
    setPlace();
  });

  setPlace();

  const imageFilenames = [
    "trdlo.jpg",
    "christmas.jpg",
    "beer.jpg",
    "spa.jpg",
    "inside.jpg",
    "oldtown.jpg",
    "party.jpg",
    "levels.jpg",
    "jump.jpg",
  ];

  const galleryData = imageFilenames.map((src) => ({
    src: src,
    likes: 0,
    dislikes: 0,
    liked: false,
    disliked: false,
    comments: [],
  }));

  const galleryPrevBtn = document.getElementById("gallery-prev");
  const galleryNextBtn = document.getElementById("gallery-next");
  const galleryContainer = document.querySelector(".gallery-container");

  const galleryImgElements = [
    document.getElementById("img-0"),
    document.getElementById("img-1"),
    document.getElementById("img-2"),
  ];
  const galleryCommentListElements = [
    document.getElementById("gallery-comment-list-0"),
    document.getElementById("gallery-comment-list-1"),
    document.getElementById("gallery-comment-list-2"),
  ];
  const galleryCommentInputElements = [
    document.getElementById("gallery-comment-input-0"),
    document.getElementById("gallery-comment-input-1"),
    document.getElementById("gallery-comment-input-2"),
  ];

  const galleryLikeCountElements = document.querySelectorAll(
    ".gallery-actions .like-count"
  );
  const galleryDislikeCountElements = document.querySelectorAll(
    ".gallery-actions .dislike-count"
  );
  const galleryLikeBtnElements = document.querySelectorAll(
    ".gallery-actions .like-btn"
  );
  const galleryDislikeBtnElements = document.querySelectorAll(
    ".gallery-actions .dislike-btn"
  );

  let galleryCurrentIndex = 0;
  const galleryNumImages = galleryData.length;

  function setGallery() {
    if (galleryImgElements.length < 3) return;

    for (let i = 0; i < 3; i++) {
      const dataIndex = (galleryCurrentIndex + i) % galleryNumImages;
      const data = galleryData[dataIndex];

      galleryImgElements[i].src = data.src;
      galleryLikeCountElements[i].textContent = data.likes;
      galleryDislikeCountElements[i].textContent = data.dislikes;

      if (data.liked) {
        galleryLikeBtnElements[i].classList.add("active");
      } else {
        galleryLikeBtnElements[i].classList.remove("active");
      }
      if (data.disliked) {
        galleryDislikeBtnElements[i].classList.add("active");
      } else {
        galleryDislikeBtnElements[i].classList.remove("active");
      }
      setGalleryComments(i);
    }
  }
  function setGalleryComments(localIndex) {
    const dataIndex = (galleryCurrentIndex + localIndex) % galleryNumImages;
    const data = galleryData[dataIndex];

    const list = galleryCommentListElements[localIndex];
    const comments = data.comments || [];
    list.innerHTML = "";

    comments.forEach((commentObject, commentIndex) => {
      const li = document.createElement("li");

      const textSpan = document.createElement("span");
      textSpan.textContent = commentObject.text;

      const actionsDiv = document.createElement("div");
      actionsDiv.className = "comment-actions";

      const likeBtn = document.createElement("button");
      likeBtn.className = "like-btn gallery-comment-like";
      likeBtn.dataset.localIndex = localIndex;
      likeBtn.dataset.commentIndex = commentIndex;
      if (commentObject.isLiked) {
        likeBtn.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> (1)';
        likeBtn.classList.add("liked");
      } else {
        likeBtn.innerHTML = '<i class="fa-regular fa-thumbs-up"></i> (0)';
      }

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-comment-btn gallery-comment-delete";
      deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
      deleteBtn.dataset.localIndex = localIndex;
      deleteBtn.dataset.commentIndex = commentIndex;

      actionsDiv.appendChild(likeBtn);
      actionsDiv.appendChild(deleteBtn);
      li.appendChild(textSpan);
      li.appendChild(actionsDiv);
      list.appendChild(li);
    });
  }

  if (galleryNextBtn) {
    galleryNextBtn.addEventListener("click", () => {
      galleryCurrentIndex = (galleryCurrentIndex + 3) % galleryNumImages;
      setGallery();
    });
  }

  if (galleryPrevBtn) {
    galleryPrevBtn.addEventListener("click", () => {
      galleryCurrentIndex =
        (galleryCurrentIndex - 3 + galleryNumImages) % galleryNumImages;
      setGallery();
    });
  }

  if (galleryContainer) {
    galleryContainer.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;

      const localIndex = parseInt(btn.dataset.index);
      const dataIndex = (galleryCurrentIndex + localIndex) % galleryNumImages;

      const commentLocalIndex = parseInt(btn.dataset.localIndex);
      const commentDataIndex =
        (galleryCurrentIndex + commentLocalIndex) % galleryNumImages;
      const commentIndex = parseInt(btn.dataset.commentIndex);

      if (
        btn.classList.contains("like-btn") &&
        !btn.classList.contains("gallery-comment-like")
      ) {
        const data = galleryData[dataIndex];
        data.liked = !data.liked;
        data.likes = data.liked ? data.likes + 1 : data.likes - 1;
        if (data.liked && data.disliked) {
          data.disliked = false;
          data.dislikes--;
        }
        setGallery();
      }

      if (btn.classList.contains("dislike-btn")) {
        const data = galleryData[dataIndex];
        data.disliked = !data.disliked;
        data.dislikes = data.disliked ? data.dislikes + 1 : data.dislikes - 1;
        if (data.disliked && data.liked) {
          data.liked = false;
          data.likes--;
        }
        setGallery();
      }

      if (btn.classList.contains("gallery-comment-post")) {
        const input = galleryCommentInputElements[localIndex];
        const text = input.value.trim();
        if (!text) return;

        const formattedText = `${loggedInUser} said: ${text}`;

        const newComment = {
          text: formattedText,
          isLiked: false,
        };

        galleryData[dataIndex].comments.push(newComment);
        input.value = "";
        setGalleryComments(localIndex);
      }

      if (btn.classList.contains("gallery-comment-like")) {
        const comment = galleryData[commentDataIndex].comments[commentIndex];
        comment.isLiked = !comment.isLiked;
        setGalleryComments(commentLocalIndex);
      }

      if (btn.classList.contains("gallery-comment-delete")) {
        if (confirm("Do you want to delete this comment?")) {
          galleryData[commentDataIndex].comments.splice(commentIndex, 1);
          setGalleryComments(commentLocalIndex);
        }
      }
    });
  }

  setGallery();

  const surveyWelcome = document.getElementById("survey-welcome-message");
  const rangeSlider = document.getElementById("rating-slider");
  const rangeValue = document.getElementById("range-value");
  const surveyForm = document.getElementById("survey-form");

  if (surveyWelcome) {
    surveyWelcome.textContent = `Hello, ${loggedInUser}, would you like to answer some questions for us?`;
  }

  if (rangeSlider) {
    rangeSlider.addEventListener("input", () => {
      rangeValue.textContent = rangeSlider.value;
    });
  }

  if (surveyForm) {
    surveyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your feedback!");
      surveyForm.reset();

      if (rangeValue) {
        rangeValue.textContent = "50";
      }
    });
  }
});

window.onload = function () {
  const placesSection = document.getElementById("places");

  if (placesSection) {
    placesSection.scrollIntoView();
  }
};
