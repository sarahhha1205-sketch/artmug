/* index.html 의 데이터 블록 복사본 — 상품/포트폴리오를 바꾸면 index.html 과 함께 수정하세요 */
  var VIDEO_KISS = 'videos/뽀뽀.mp4';
  var VIDEO_KISS_VTS = '2D/2D뽀뽀.mp4';
  var VIDEO_HAMMER = 'videos/망치.mp4';
  var VIDEO_WEIGHT = 'videos/무게츄.mp4';
  var VIDEO_PAT = 'videos/쓰담.mp4';
  var VIDEO_VIEWER_THROW = 'videos/시청자던지기.mp4';
  var VIDEO_THROW_MANY = 'videos/던지기여러개.mp4';
  var VIDEO_FOLLOW = 'videos/따라!.mp4';
  var VIDEO_KISS_2 = 'videos/뽀뽀2.mp4';
  var VIDEO_PILE = 'videos/쏟아지기.mp4';
  var VIDEO_PILE_2 = 'videos/쏟아지기2.mp4';
  var VIDEO_PILE_3 = 'videos/치즈깔리기.mp4';
  var VIDEO_WINK = 'videos/윙크.mp4';
  var VIDEO_SLEEP = 'videos/잠자기.mp4';
  var VIDEO_MAGIC = 'videos/마법.mp4';
  var VIDEO_QUESTION = 'videos/물음표.mp4';
  var VIDEO_FLYAWAY = 'videos/날아기기.mp4';
  var VIDEO_FOLLOW_2 = 'videos/팬캐릭터 따라가기 2.mp4';

  var FOLLOW_VARIANTS = [
    { label: '따라다니기 Type 1', desc: '팬 캐릭터가 따라다니게 할 수 있는 기능입니다.', video: VIDEO_FOLLOW },
    { label: '따라다니기 Type 2', desc: '팬 캐릭터가 따라다니게 할 수 있는 기능입니다.', video: VIDEO_FOLLOW_2, objectPosition: '70% center' }
  ];

  var KISS_VARIANTS = [
    { label: '뽀뽀 Type 1', desc: '팬 캐릭터가 다가가 캐릭터의 몸 한 부위에 입술자국을 남깁니다.', video: VIDEO_KISS, vtsVideo: VIDEO_KISS_VTS },
    { label: '뽀뽀 Type 2', desc: '팬 캐릭터가 다가가 캐릭터의 몸 한 부위에 입술자국을 남깁니다.', video: VIDEO_KISS_2 }
  ];
  var VIDEO_THROW_ONE = 'videos/1개던지기.mp4';
  var VIDEO_WATER = 'videos/물쏘기.mp4';
  var VIDEO_STICK = 'videos/달라붙기.mp4';
  var VIDEO_LOCK = 'videos/자물쇠.mp4';
  var VIDEO_CHEEK_PULL = 'videos/팬캐릭터뺨당기기.mp4';

  var THROW_VARIANTS = [
    { label: '한 개 던지기', desc: '캐릭터에게 물건을 한 개 던질 수 있습니다.', video: VIDEO_THROW_ONE, objectPosition: '35% center' },
    { label: '여러 개 던지기', desc: '캐릭터에게 물건을 여러 개 던질 수 있습니다.', video: VIDEO_THROW_MANY, objectPosition: '25% center' }
  ];

  var THROW_CHIPS = ['날아오는 물건 변경 가능', '상호작용 사운드 추가 가능', 'PROP'];
  var THROW_OPTION_HINTS = {
    '날아오는 물건 변경 가능': '캐릭터에게 날아오는 물건의 종류를 변경합니다.',
    '상호작용 사운드 추가 가능': '물건이 맞을 때 나오는 효과음을 추가·변경합니다.'
  };

  var BONK_VARIANTS = [
    { label: '오리지널 PROP', desc: '하늘에서 떨어진 PROP이 캐릭터의 머리를 강타합니다.', video: VIDEO_WEIGHT },
    { label: '악마 망치', desc: '망치로 캐릭터의 머리를 강타합니다.', video: VIDEO_HAMMER }
  ];

  var PILE_CHIPS = THROW_CHIPS;

  var PILE_VARIANTS = [
    { label: '와르르 Type 1', desc: '캐릭터에게 물건들이 쏟아집니다.', video: VIDEO_PILE, vtsVideo: '2D/2D치즈와르르.mp4' },
    { label: '와르르 Type 2', desc: '캐릭터에게 물건들이 쏟아집니다.', video: VIDEO_PILE_2, vtsVideo: '2D/2D와르르2 .mp4' }
  ];

  var OPTION_HINTS = {
    '표정': '캐릭터의 표정을 변경하거나 제거합니다.',
    '파티클': '파티클 효과를 제거하거나 변경합니다.',
    '사운드': '효과음을 추가하거나 변경합니다.',
    '위치': '연출이 적용되는 캐릭터 위치를 설정합니다.',
    '맞춤 연출': '요청에 맞춰 연출 방향을 커스텀 제작합니다.',
    'Prop 제작 가능': 'Warudo에서 사용할 Prop을 새로 제작합니다.',
    '원격 세팅': '원격으로 Warudo에 직접 세팅해 드립니다.'
  };

  /* PROP 목록 — image: '' 비워두면 placeholder (나중에 images/props/xxx.png 등 입력) */
  var THROW_STICK_PROPS = [
    { name: '치즈', image: 'image/치즈.jpg' },
    { name: '하트', image: 'image/하트.png', hint: '색상 변경 가능' },
    { name: '실버 하트', image: 'image/실버하트.png', hint: '색상 변경 가능' },
    { name: '보석 하트', image: 'image/보석하트.png', hint: '색상 변경 가능' },
    { name: '별풍선', image: 'image/하늘별풍.jpg', hint: '색상 변경 가능' }
  ];

  var BONK_DROP_PROPS = [
    { name: '치즈', image: 'image/치즈.jpg' },
    { name: '무게추', image: 'image/무게추 .jpg' },
    { name: '실버 하트', image: 'image/실버하트.png', hint: '색상 변경 가능' },
    { name: '보석 하트', image: 'image/보석하트.png', hint: '색상 변경 가능' },
    { name: '별풍선', image: 'image/하늘별풍.jpg', hint: '색상 변경 가능' }
  ];

  var DEFAULT_PROPS = [
    { name: '오리지널 망치', image: '' },
    { name: '악마 망치', image: 'image/악마 망치.jpg' },
    { name: '치즈', image: 'image/치즈.jpg' },
    { name: '무게추', image: 'image/무게추 .jpg' },
    { name: '치지직 이모티콘', image: '' },
    { name: '물병', image: '' },
    { name: '베개', image: '' }
  ];

  var API_ITEMS = [
    {
      type: 'swipe',
      title: '팬 캐릭터 뽀뽀',
      desc: '팬 캐릭터가 다가가 캐릭터의 몸 한 부위에 입술자국을 남깁니다.<br>팬 캐릭터가 없으면 기본 곰돌이로 세팅해 드립니다. (곰돌이 색상 변경 가능)',
      price: '50,000원',
      isNew: true,
      isSale: true,
      vts: true,
      vtsSingle: true,
      vtsPrice: '70,000원',
      variants: KISS_VARIANTS,
      titleMode: 'static',
      chips: ['위치 변경 가능', '효과 변경 가능'],
      optionHints: {
        '위치 변경 가능': '캐릭터가 뽀뽀하는 위치를 설정합니다.',
        '효과 변경 가능': '파티클·사운드 효과를 변경합니다.'
      }
    },
    {
      type: 'card',
      title: '팬 캐릭터 뺨 당기기',
      desc: '팬 캐릭터가 나타나 캐릭터의 뺨을 당깁니다.<br>팬 캐릭터가 없으면 기본 곰돌이로 세팅해 드립니다. (곰돌이 색상 변경 가능)',
      price: '50,000원',
      isNew: true,
      video: VIDEO_CHEEK_PULL,
      chips: ['속도 조절 가능', '뺨 당기는 정도 조절 가능'],
      optionHints: {
        '속도 조절 가능': '뺨을 당기는 속도를 조절합니다.',
        '뺨 당기는 정도 조절 가능': '뺨이 당겨지는 정도를 조절합니다.'
      }
    },
    {
      type: 'card',
      title: '팬 캐릭터 망치',
      desc: '팬 캐릭터가 나타나 캐릭터의 머리를 망치로 강타합니다.<br>팬 캐릭터가 없으면 기본 곰돌이로 세팅해 드립니다. (곰돌이 색상 변경 가능)',
      price: '70,000원',
      isNew: true,
      isSale: true,
      vtsOnly: true,
      video: '2D/2D팬캐릭터망치.mp4'
    },
    {
      type: 'card',
      title: '팬 캐릭터 돌아다니기',
      desc: '팬 캐릭터가 캐릭터 주변을 돌아다닙니다.<br>도네이션한 시청자의 닉네임을 가진 팬 캐릭터가 나타나 돌아다니게 할 수 있습니다.',
      price: '50,000원',
      isNew: true,
      video: 'videos/팬캐릭터 배회.mp4'
    },
    {
      type: 'card',
      title: '팬 캐릭터 옆에서 둥둥',
      desc: '팬 캐릭터가 캐릭터 옆에서 둥둥 떠다닙니다.<br>팬 캐릭터 돌아다니기에 추가할 수 있는 옵션입니다.',
      price: '+20,000원',
      isNew: true,
      video: 'videos/팬캐릭터옆에서둥둥.mp4'
    },
    {
      type: 'card',
      title: '팬 캐릭터 머리 위에서 뛰기',
      desc: '팬 캐릭터가 캐릭터 머리 위에서 통통 뜁니다.<br>팬 캐릭터 돌아다니기에 추가할 수 있는 옵션입니다.',
      price: '+20,000원',
      isNew: true,
      video: 'videos/팬캐릭터통통튀기.mp4'
    },
    {
      type: 'card',
      title: '팬 캐릭터 던지기',
      desc: '팬 캐릭터를 던질 수 있는 기능입니다.<br>팬 캐릭터 돌아다니기에 추가할 수 있는 옵션입니다.',
      price: '+20,000원',
      isNew: true,
      video: 'videos/팬캐릭터던지기.mp4'
    },
    {
      type: 'card',
      title: '팬 캐릭터 납작',
      desc: '팬 캐릭터를 손바닥으로 눌러 납작하게 만듭니다.<br>팬 캐릭터 돌아다니기에 추가할 수 있는 옵션입니다.',
      price: '+20,000원',
      isNew: true,
      video: 'videos/팬캐릭터납작.mp4'
    },
    {
      type: 'card',
      title: '팬 캐릭터 물건 던지기',
      desc: '팬 캐릭터가 나를 향해 물건을 던집니다.<br>팬 캐릭터 돌아다니기에 추가할 수 있는 옵션입니다.',
      price: '+20,000원',
      isNew: true,
      video: 'videos/팬캐릭터가던지기.mp4'
    },
    {
      type: 'swipe',
      title: '팬 캐릭터 따라다니기',
      desc: '팬 캐릭터가 따라다니게 할 수 있는 기능입니다.',
      price: '20,000원',
      variants: FOLLOW_VARIANTS,
      titleMode: 'static',
      chips: ['따라다니는 속도 변경 가능']
    },
    {
      type: 'card',
      title: '번개 맞기',
      desc: '캐릭터가 번개를 맞습니다.',
      price: '40,000원',
      isNew: true,
      video: 'videos/번개맞기api.mp4'
    },
    {
      type: 'card',
      title: '아봉',
      desc: '일정 시간동안 캐릭터의 입을 막습니다.<br>특정 키 입력으로도 동작하게 할 수 있습니다.',
      price: '30,000원',
      isNew: true,
      video: 'videos/아봉.mp4'
    },
    {
      type: 'card',
      title: '깔리기',
      section: '기본 API',
      desc: '커다란 물건이 내려와 캐릭터의 몸을 깔아뭉갭니다.',
      price: '30,000원',
      isNew: true,
      video: VIDEO_PILE_3,
      chips: ['물건 변경 가능', '효과 변경 가능', '사운드 추가 가능'],
      optionHints: {
        '물건 변경 가능': '캐릭터를 깔아뭉개는 물건의 종류를 변경합니다.',
        '효과 변경 가능': '파티클 효과를 추가·변경합니다.',
        '사운드 추가 가능': '물건이 떨어질 때 나오는 효과음을 추가·변경합니다.'
      }
    },
    {
      type: 'card',
      title: '안경 자물쇠',
      desc: '캐릭터에게 자물쇠가 채워진 안경을 씌워줍니다.',
      price: '40,000원',
      isNew: true,
      video: VIDEO_LOCK
    },
    {
      type: 'swipe',
      title: '동전 / 치즈 먹기',
      price: '30,000원',
      isNew: true,
      vtsOnly: true,
      variants: [
        { label: '동전 먹기', desc: '캐릭터가 동전을 먹습니다.', video: '2D/동전먹기.mp4' },
        { label: '치즈 먹기', desc: '캐릭터가 치즈를 먹습니다.', video: '2D/치즈먹기.mp4' }
      ],
      titleMode: 'static'
    },
    {
      type: 'swipe',
      title: '전광판',
      price: '30,000원',
      isNew: true,
      vtsOnly: true,
      variants: [
        { label: '전광판', desc: '화면에 전광판이 나타나 원하는 문구를 표시합니다.', video: '2D/2D전광판.mp4' },
        { label: '전광판', desc: '화면에 전광판이 나타나 원하는 문구를 표시합니다.', video: '2D/2D전광판2.mp4' }
      ],
      titleMode: 'static',
      chips: ['전광판 글씨 변경 가능', '전광판 내용 변경 가능', '전광판 시청자 닉네임·후원금액 연동 가능'],
      optionHints: {
        '전광판 글씨 변경 가능': '전광판에 표시되는 글씨체·색상을 변경합니다.',
        '전광판 내용 변경 가능': '전광판에 표시되는 문구를 원하는 대로 변경합니다.',
        '전광판 시청자 닉네임·후원금액 연동 가능': '도네이션한 시청자의 닉네임과 후원 금액을 전광판에 자동으로 표시합니다.'
      }
    },
    {
      type: 'card',
      title: '붙이기',
      desc: '원하는 물건이 날아와 캐릭터의 몸에 달라붙습니다.',
      price: '20,000원',
      isNew: true,
      newVtsOnly: true,
      vts: true,
      vtsVideo: '2D/2D붙이기.mp4',
      vtsPrice: '30,000원',
      video: VIDEO_STICK,
      chips: ['붙는 물건 변경 가능', '상호작용 사운드 추가 가능', '표정 (핫키) 연동 가능', 'PROP'],
      vtsOnlyChips: ['표정 (핫키) 연동 가능'],
      optionHints: {
        '붙는 물건 변경 가능': '캐릭터에게 붙는 물건의 종류를 변경합니다.',
        '상호작용 사운드 추가 가능': '물건이 붙을 때 나오는 효과음을 추가·변경합니다.',
        '표정 (핫키) 연동 가능': 'VTube Studio 핫키와 연동해 표정을 자동으로 전환합니다.'
      },
      props: [
        { name: '치즈', image: 'image/치즈.jpg' },
        { name: '하트', image: 'image/하트.png', hint: '색상 변경 가능' },
        { name: '별풍선', image: 'image/하늘별풍.jpg', hint: '색상 변경 가능' }
      ],
      vtsProps: [
        { name: '3D치즈', image: 'image2D/치즈.png' },
        { name: '2D치즈', image: 'image/egg.png' },
        { name: '3D하트', image: 'image/하트.png' },
        { name: '별풍선', image: 'image/하늘별풍.jpg' }
      ]
    },
    {
      type: 'card',
      title: '4컷 사진',
      desc: '다양한 필터와 스티커를 커스텀하여 나만의 방셀을 찍을 수 있습니다.<br>기본 고양이, 안경, 해골 필터가 있으며 원하는 필터 하나를 무료로 제작해 드립니다.<br>도네한 시청자의 이름을 사진 아래에 넣을 수 있고, 찍은 사진은 별도 폴더에 고화질로 저장됩니다.',
      price: '50,000원',
      isNew: true,
      video: 'videos/4컷사진.mp4',
      wide: true,
      resultImage: 'videos/20261008_012553_846_사냥단.png'
    },
    {
      type: 'card',
      title: '악마 소환',
      desc: '마법진에서 소환되는 느낌으로 악마뿔과 날개를 장착한 캐릭터가 등장합니다.<br>마법진 색, 등장 효과, 날개 색상, 포즈나 표정을 자유롭게 커스텀할 수 있습니다.',
      price: '50,000원',
      isNew: true,
      video: 'videos/악마등장.mp4'
    },
    {
      type: 'card',
      title: '천사 강림',
      desc: '하늘에서 강림하는 느낌으로 천사 날개와 헤일로를 장착한 캐릭터가 등장합니다.<br>빛줄기 색, 등장 효과, 날개 색상, 포즈나 표정을 자유롭게 커스텀할 수 있습니다.',
      price: '50,000원',
      isNew: true,
      video: 'videos/천사강림.mp4',
      zoom: 1.2,
      panY: -8
    },
    {
      type: 'card',
      title: '마법소녀 변신',
      desc: '의상, 헤어를 교체하며 변신합니다.<br>변신 파티클, 변신 자세, 변신 시 실루엣 색상 등을 자유롭게 커스텀할 수 있습니다.',
      price: '60,000원',
      isNew: true,
      video: 'videos/마법소녀변신.mp4'
    },
    {
      type: 'card',
      title: '선물상자 짜잔',
      desc: '선물상자가 열리며 캐릭터가 짜잔 하고 등장합니다.',
      price: '30,000원',
      isNew: true,
      video: 'videos/선물상자짜잔.mp4'
    },
    {
      type: 'card',
      title: '불꽃놀이',
      desc: '화면에 불꽃이 터지며 화려한 불꽃놀이가 펼쳐집니다.',
      price: '40,000원',
      isNew: true,
      video: 'videos/불꽃놀이.mp4'
    },
    {
      type: 'card',
      title: '대포 발사',
      desc: '캐릭터가 대포 속으로 들어가 화면 밖으로 발사됩니다.',
      price: '50,000원',
      isNew: true,
      video: 'videos/대포발사.mp4'
    },
    {
      type: 'card',
      title: '운세 뽑기',
      desc: '카드가 펼쳐지고 한 장을 뽑으면 오늘의 운세가 나타납니다.<br>카드 문구와 폰트 색상, 카드 뒷면의 색상을 자유롭게 커스텀할 수 있습니다.',
      price: '50,000원',
      isNew: true,
      video: 'videos/운세뽑기.mp4'
    },
    {
      type: 'card',
      title: '무대 공연',
      desc: '캐릭터가 춤 애니메이션에 맞추어 춤을 춥니다.<br>무대의 색상, 뒷배경 영상, 파티클 등 다양한 효과를 추가하거나 커스텀할 수 있습니다.',
      price: '50,000원',
      isNew: true,
      video: 'videos/무대공연.mp4',
      wide: true
    },
    {
      type: 'card',
      title: '인형뽑기',
      desc: '인형뽑기 기계 안에 캐릭터 인형이 가득 쌓이고, 집게가 하나를 뽑아 출구로 떨어뜨리면 캐릭터가 등장합니다.<br>가짜 캐릭터를 뽑을 수 있습니다. 캐릭터와 원하는 소품을 섞어서 배치할 수 있습니다.',
      price: '문의',
      video: 'videos/인형뽑기진.mp4'
    },
    {
      type: 'card',
      title: '폴댄스',
      desc: '캐릭터가 폴을 잡고 다양한 폴댄스 동작을 선보입니다.',
      price: '문의',
      video: 'videos/폴댄스API.mp4'
    },
    {
      type: 'card',
      title: '자동 잠자기',
      desc: '자리를 비우면 캐릭터가 잠드는 모션을 취합니다.',
      price: '20,000원',
      video: VIDEO_SLEEP,
      chips: ['잠드는 표정 변경 가능']
    },
    {
      type: 'card',
      title: '물음표',
      desc: '시청자의 ? 채팅에 반응해 화면에 물음표를 띄웁니다.',
      price: '15,000원',
      vts: true,
      vtsPrice: '30,000원',
      vtsVideo: '2D/2D물음표.mp4',
      video: VIDEO_QUESTION,
      chips: ['사운드 추가 가능', '표정 (핫키) 연동 가능'],
      vtsOnlyChips: ['표정 (핫키) 연동 가능'],
      optionHints: {
        '표정 (핫키) 연동 가능': 'VTube Studio 핫키와 연동해 표정을 자동으로 전환합니다.'
      }
    },
    {
      type: 'card',
      title: '윙크',
      desc: '캐릭터가 한쪽 눈을 감을 경우, 자동으로 눈가에 하트 파티클이 출력됩니다.',
      price: '20,000원',
      vts: true,
      vtsVideo: '2D/2D윙크.mp4',
      video: VIDEO_WINK,
      chips: ['하트 모양 변경 가능', '표정 (핫키) 연동 가능'],
      vtsOnlyChips: ['표정 (핫키) 연동 가능'],
      optionHints: {
        '표정 (핫키) 연동 가능': 'VTube Studio 핫키와 연동해 표정을 자동으로 전환합니다.'
      }
    },
    {
      type: 'swipe',
      title: '쓰다듬기',
      price: '20,000원',
      vts: true,
      warudoSingle: true,
      variants: [
        { label: '쓰다듬기', desc: '캐릭터의 머리를 쓰다듬어줍니다.', video: VIDEO_PAT, vtsVideo: '2D/쓰담.mp4' },
        { label: '쓰다듬기', desc: '캐릭터의 머리를 쓰다듬어줍니다.', video: VIDEO_PAT, vtsVideo: '2D/쓰담2.mp4' }
      ],
      titleMode: 'static',
      chips: ['쓰다듬는 손의 색상 변경 가능', '상호작용 표정 설정 가능', '표정 (핫키) 연동 가능', 'PROP'],
      vtsHideChips: ['상호작용 표정 설정 가능'],
      vtsOnlyChips: ['표정 (핫키) 연동 가능'],
      vtsChipLabels: {
        '쓰다듬는 손의 색상 변경 가능': '쓰다듬는 손 모양 변경 가능'
      },
      optionHints: {
        '쓰다듬는 손의 색상 변경 가능': '쓰다듬는 손의 색상을 변경합니다.',
        '상호작용 표정 설정 가능': '쓰다듬을 때 캐릭터의 표정을 설정합니다.',
        '표정 (핫키) 연동 가능': 'VTube Studio 핫키와 연동해 표정을 자동으로 전환합니다.'
      },
      propVtsOnly: true,
      vtsProps: [
        { name: '쓰담손', image: 'image2D/쓰담손.png' }
      ]
    },
    {
      type: 'card',
      type: 'card',
      title: '시청자 던지기',
      desc: '도네이션을 한 시청자의 이름이 던지기 프랍에 들어갑니다.',
      price: '30,000원',
      video: VIDEO_VIEWER_THROW,
      chips: ['텍스트 색상', '던지는 물건 변경 가능', 'PROP'],
      optionHints: {
        '텍스트 색상': '시청자 이름 텍스트의 색상을 변경합니다.',
        '던지는 물건 변경 가능': '던지는 물건의 종류를 변경합니다.'
      },
      props: THROW_STICK_PROPS
    },
    {
      type: 'swipe',
      title: '와르르',
      desc: '캐릭터에게 물건들이 쏟아집니다.',
      price: '20,000원',
      vts: true,
      variants: PILE_VARIANTS,
      titleMode: 'static',
      chips: PILE_CHIPS.concat(['사운드 추가 가능', '표정 (핫키) 연동 가능']),
      vtsOnlyChips: ['표정 (핫키) 연동 가능'],
      optionHints: Object.assign({}, THROW_OPTION_HINTS, {
        '사운드 추가 가능': '물건이 쏟아질 때 나오는 효과음을 추가·변경합니다.',
        '표정 (핫키) 연동 가능': 'VTube Studio 핫키와 연동해 표정을 자동으로 전환합니다.'
      }),
      props: THROW_STICK_PROPS,
      vtsProps: [
        { name: '3D치즈', image: 'image2D/치즈.png' },
        { name: '2D치즈', image: 'image/egg.png' },
        { name: '3D하트', image: 'image/하트.png' },
        { name: '별풍선', image: 'image/하늘별풍.jpg' }
      ]
    },
    {
      type: 'card',
      title: '날아가기',
      desc: '캐릭터가 물건을 맞고 멀리 날아갑니다.',
      price: '15,000원',
      video: VIDEO_FLYAWAY,
      chips: THROW_CHIPS,
      optionHints: THROW_OPTION_HINTS,
      props: THROW_STICK_PROPS
    },
    {
      type: 'card',
      title: '머리쾅 (망치)',
      desc: '망치로 캐릭터의 머리를 강타합니다.',
      price: '20,000원',
      vts: true,
      vtsVideo: '2D/2D뿅망치.mp4',
      video: VIDEO_HAMMER,
      chips: ['망치 변경 가능', '상호작용 사운드 추가 가능', '표정 (핫키) 연동 가능', 'PROP'],
      vtsOnlyChips: ['표정 (핫키) 연동 가능'],
      optionHints: {
        '망치 변경 가능': '캐릭터를 강타하는 망치의 종류를 변경합니다.',
        '상호작용 사운드 추가 가능': '망치로 강타할 때 나오는 효과음을 추가·변경합니다.',
        '표정 (핫키) 연동 가능': 'VTube Studio 핫키와 연동해 표정을 자동으로 전환합니다.'
      },
      props: [
        { name: '악마 망치', image: 'image/악마 망치.jpg' },
        { name: '뿅망치', image: 'image/뿅망치.png' }
      ],
      vtsProps: [
        { name: '뿅망치', image: 'image2D/뿅망치.png' }
      ]
    },
    {
      type: 'card',
      title: '마법',
      desc: '캐릭터의 손에서 마법이 나갑니다.',
      price: '30,000원',
      video: VIDEO_MAGIC,
      objectPosition: '35% center',
      chips: ['마법 종류 변경 가능', '핸드 트래킹 필요'],
      optionHints: {
        '마법 종류 변경 가능': '손에서 나가는 마법의 종류를 변경합니다.',
        '핸드 트래킹 필요': '이 연출은 핸드 트래킹 장비가 있어야 정상 작동합니다.'
      }
    },
    {
      type: 'swipe',
      title: '던지기',
      price: '10,000원',
      vts: true,
      warudoSingle: true,
      vtsSingle: true,
      variants: [
        { label: '던지기', desc: '캐릭터에게 물건을 던질 수 있습니다.', video: VIDEO_THROW_ONE, vtsVideo: '2D/2D던지기.mp4', objectPosition: '35% center' },
        { label: '던지기', desc: '캐릭터에게 물건을 던질 수 있습니다.', video: VIDEO_THROW_ONE, objectPosition: '35% center' }
      ],
      titleMode: 'static',
      chips: THROW_CHIPS.concat(['표정 (핫키) 연동 가능']),
      vtsOnlyChips: ['표정 (핫키) 연동 가능'],
      optionHints: Object.assign({}, THROW_OPTION_HINTS, {
        '표정 (핫키) 연동 가능': 'VTube Studio 핫키와 연동해 표정을 자동으로 전환합니다.'
      }),
      props: THROW_STICK_PROPS,
      vtsProps: [
        { name: '3D치즈', image: 'image2D/치즈.png' },
        { name: '2D치즈', image: 'image/egg.png' },
        { name: '3D하트', image: 'image/하트.png' },
        { name: '별풍선', image: 'image/하늘별풍.jpg' }
      ]
    },
    {
      type: 'card',
      title: '물맞기',
      desc: '캐릭터에게 물을 쏠 수 있습니다.',
      price: '15,000원',
      video: VIDEO_WATER,
      chips: ['물줄기 색상 변경 가능']
    },
    {
      type: 'card',
      title: '머리쾅 (떨어지기)',
      desc: '하늘에서 떨어진 PROP이 캐릭터의 머리를 강타합니다.',
      price: '20,000원',
      video: VIDEO_WEIGHT,
      chips: THROW_CHIPS,
      optionHints: THROW_OPTION_HINTS,
      props: BONK_DROP_PROPS
    }
  ];

  /* 팬캐릭터 제작 예시 이미지 — image 폴더의 원본 파일을 팬캐릭터1~5로 매칭 */
  var FANCHAR_DESC = '와루도에서 상호작용 가능한 팬 캐릭터를 제작해 드립니다.';
  var FANCHAR_GALLERY = {
    type: 'swipe',
    key: 'fanchar-gallery',
    title: '팬캐릭터',
    price: '50,000원',
    chips: [],
    titleMode: 'static',
    variants: [
      { label: '팬캐릭터10', desc: FANCHAR_DESC, image: 'image/팬캐릭터10.png' },
      { label: '팬캐릭터11', desc: FANCHAR_DESC, image: 'image/01번.png' },
      { label: '팬캐릭터12', desc: FANCHAR_DESC, image: 'image/사과쨈님팬캐릭터.png' },
      { label: '팬캐릭터13', desc: FANCHAR_DESC, image: 'image/0번 아탕님 팬캐릭터.png' },
      { label: '팬캐릭터0', desc: FANCHAR_DESC, image: 'image/0번.png' },
      { label: '팬캐릭터1', desc: FANCHAR_DESC, image: 'image/1번.png' },
      { label: '팬캐릭터1-1', desc: FANCHAR_DESC, image: 'image/1-1번.png' },
      { label: '팬캐릭터2', desc: FANCHAR_DESC, image: 'image/2번.jpg' },
      { label: '팬캐릭터3', desc: FANCHAR_DESC, image: 'image/3번.png' },
      { label: '팬캐릭터4', desc: FANCHAR_DESC, image: 'image/4번.png' },
      { label: '팬캐릭터5', desc: FANCHAR_DESC, image: 'image/5번.png' },
      { label: '팬캐릭터6', desc: FANCHAR_DESC, image: 'image/6번.jpg' },
      { label: '팬캐릭터14', desc: FANCHAR_DESC, image: 'Port/카우리님 팬 캐릭터.jpg' },
      { label: '팬캐릭터15', desc: FANCHAR_DESC, image: 'Port/나들희님 팬 캐릭터.png' },
      { label: '팬캐릭터16', desc: FANCHAR_DESC, image: 'Port/쿠쿠양님 팬 캐릭터.png' },
      { label: '팬캐릭터17', desc: FANCHAR_DESC, image: 'image/바박수님 팬캐릭터.png' },
      { label: '팬캐릭터18', desc: FANCHAR_DESC, image: 'image/누먕님팬캐릭터.png', fit: 'contain' }
    ]
  };

  var PROP_GALLERY = {
    type: 'swipe',
    key: 'prop-gallery',
    title: 'PROP 제작',
    price: '30,000원',
    chips: [],
    titleMode: 'static',
    variants: [
      { label: '악마 망치', desc: '와루도에서 상호작용 가능한 독창적인 소품을 제작해 드립니다.', image: 'image/악마 망치.jpg' },
      { label: '양망치', desc: '와루도에서 상호작용 가능한 독창적인 소품을 제작해 드립니다.', image: 'image/양망치.jpg' },
      { label: '별풍선', desc: '와루도에서 상호작용 가능한 독창적인 소품을 제작해 드립니다.', image: 'image/하늘별풍.jpg' },
      { label: '보석 하트', desc: '와루도에서 상호작용 가능한 독창적인 소품을 제작해 드립니다.', image: 'image/보석하트.png' },
      { label: '달걀', desc: '와루도에서 상호작용 가능한 독창적인 소품을 제작해 드립니다.', video: 'Port/와루도달걀.mp4', image: 'image/egg.png' },
      { label: '오리지널 소품', desc: '와루도에서 상호작용 가능한 독창적인 소품을 제작해 드립니다.', image: 'Port/빙하유님오리지널소품.png' }
    ]
  };

  var PROP_ITEMS = [
    FANCHAR_GALLERY,
    PROP_GALLERY
    /* 항목 추가 시 위 형식으로 계속 넣으면 됩니다 (video / image) */
  ];


  /* ─────────────────────────────────────────────
     포트폴리오 목록
     - category : 드롭다운에 자동으로 모아집니다 (원하는 이름 자유롭게)
     - video    : 'videos/파일명.mp4' (없으면 image 사용, 둘 다 없으면 placeholder)
     - image    : 'images/파일명.png'
     - date     : 표시용 텍스트 (생략 가능)
     항목 추가 시 아래 형식 그대로 복사해서 넣으면 됩니다.
     ───────────────────────────────────────────── */
  var PORTFOLIO_ITEMS = [
    {
      title: '4컷 사진 API',
      category: '와루도 3D API',
      desc: '다양한 필터와 스티커로 나만의 방셀을 찍는 4컷 사진 API입니다.',
      date: '2026.10',
      video: 'videos/4컷사진.mp4'
    },
    {
      title: '천사 강림 API',
      category: '와루도 3D API',
      group: '천사 강림',
      date: '2026.10',
      video: 'videos/천사강림.mp4'
    },
    {
      title: '마법소녀 변신 API',
      category: '와루도 3D API',
      group: '마법소녀 변신',
      desc: '의상, 헤어를 교체하며 변신합니다. 변신 파티클, 변신 자세, 변신 시 실루엣 색상 등을 자유롭게 커스텀할 수 있습니다.',
      date: '2026.10',
      video: 'videos/마법소녀변신.mp4'
    },
    {
      title: '나들희님 팬캐릭터 뽀뽀 API',
      category: '와루도 3D API',
      group: '팬캐릭터 뽀뽀',
      date: '2025.11',
      video: VIDEO_KISS
    },
    {
      title: '쿠쿠양님 팬캐릭터 뽀뽀 API',
      category: '와루도 3D API',
      group: '팬캐릭터 뽀뽀',
      date: '2026.08',
      video: 'Port/쿠쿠양님.mp4'
    },
    {
      title: '박환몽님 팬 캐릭터',
      category: '팬캐릭터,PROP제작',
      desc: '박환몽님 팬 캐릭터 제작 작업입니다.',
      date: '2026.09',
      image: 'image/팬캐릭터10.png'
    },
    {
      title: '김막댕님 팬 캐릭터',
      category: '팬캐릭터,PROP제작',
      desc: '김막댕님 팬 캐릭터 제작 작업입니다.',
      date: '2026.09',
      image: 'image/01번.png'
    },
    {
      title: '사과쨈님 팬 캐릭터',
      category: '팬캐릭터,PROP제작',
      desc: '사과쨈님 팬 캐릭터 제작 작업입니다.',
      date: '2026.09',
      image: 'image/사과쨈님팬캐릭터.png'
    },
    {
      title: '아탕님 팬 캐릭터',
      category: '팬캐릭터,PROP제작',
      desc: '아탕님 팬 캐릭터 제작 작업입니다.',
      date: '2026.09',
      image: 'image/0번 아탕님 팬캐릭터.png'
    },
    {
      title: '카우리님 팬 캐릭터',
      category: '팬캐릭터,PROP제작',
      desc: '카우리님 팬 캐릭터 제작 작업입니다.',
      date: '2026.08',
      image: 'Port/카우리님 팬 캐릭터.jpg'
    },
    {
      title: '라먀니님 팬 캐릭터',
      category: '팬캐릭터,PROP제작',
      desc: '라먀니님 팬 캐릭터 제작 작업입니다.',
      date: '2026.08',
      image: 'image/1-1번.png'
    },
    {
      title: '나들희님 팬 캐릭터',
      category: '팬캐릭터,PROP제작',
      desc: '나들희님 팬 캐릭터 제작 작업입니다.',
      date: '2025.11',
      image: 'Port/나들희님 팬 캐릭터.png'
    },
    {
      title: '쿠쿠양님 팬 캐릭터',
      category: '팬캐릭터,PROP제작',
      desc: '쿠쿠양님 팬 캐릭터 제작 작업입니다.',
      date: '2026.08',
      image: 'Port/쿠쿠양님 팬 캐릭터.png'
    },
    {
      title: '바박수님 팬 캐릭터',
      category: '팬캐릭터,PROP제작',
      desc: '바박수님 팬 캐릭터 제작 작업입니다.',
      date: '2026.09',
      image: 'image/바박수님 팬캐릭터.png'
    },
    {
      title: '누먕님 팬 캐릭터',
      category: '팬캐릭터,PROP제작',
      desc: '누먕님 팬 캐릭터 제작 작업입니다.',
      date: '2026.09',
      image: 'image/누먕님팬캐릭터.png',
      fit: 'contain'
    },
    {
      title: '서무무님 윙크 API',
      category: '와루도 3D API',
      group: '윙크',
      date: '2026.08',
      image: 'Port/Honeycam_2026-08-14_17-01-49.gif'
    },
    {
      title: '아미아네에나님 물음표 API',
      category: '와루도 3D API',
      group: '물음표',
      date: '2026.08',
      video: 'Port/아미아네에나님_포트폴리오(물음표).mp4'
    },
    {
      title: '도라니님 던지기 API',
      category: '와루도 3D API',
      group: '던지기',
      date: '2026.08',
      video: 'Port/도라니님 던지기.mkv.mp4'
    },
    {
      title: '이뽀님 자동 잠자기 API',
      category: '와루도 3D API',
      group: '자동 잠자기',
      date: '2026.08',
      video: 'Port/이뽀님 잠들기 포트폴리오.mp4'
    },
    {
      title: '이뽀님 윙크 API',
      category: '와루도 3D API',
      group: '윙크',
      date: '2026.08',
      video: 'Port/이뽀님 윙크 포트폴리오.mp4'
    },
    {
      title: '지한이또님 쓰다듬기 API',
      category: '와루도 3D API',
      group: '쓰다듬기',
      date: '2026.08',
      video: 'Port/지한이또 쓰담쓰담.mp4'
    },
    {
      title: '지한이또님 커스텀 API<br>콧물 주르륵',
      category: '와루도 3D API',
      group: '커스텀 제작',
      date: '2026.08',
      video: 'Port/지한이또 커스텀 API (콧물 주르륵).mp4'
    },
    {
      title: '우누님 던지기 API',
      category: '와루도 3D API',
      group: '던지기',
      date: '2026.08',
      video: 'Port/우누님 던지기 + 팬캐릭터.mp4'
    },
    {
      title: '우누님 팬 캐릭터',
      category: '팬캐릭터,PROP제작',
      desc: '우누님 팬 캐릭터 제작 작업입니다.',
      date: '2026.08',
      video: 'Port/우누님 던지기 + 팬캐릭터.mp4'
    },
    {
      title: '양망치',
      category: '팬캐릭터,PROP제작',
      desc: '양망양님 커스텀 망치 에셋 작업입니다.',
      date: '2026.06',
      image: 'image/양망치.jpg'
    },
    {
      title: 'FRY님 프랍 제작',
      category: '팬캐릭터,PROP제작',
      desc: 'FRY님 커스텀 프랍(와루도 동작) 제작 작업입니다.',
      date: '2026.09',
      video: 'Port/와루도달걀.mp4',
      panX: 8,
      zoom: 1.08,
      letterboxColor: '#000'
    },
    {
      title: '빙하유님 오리지널 소품',
      category: '팬캐릭터,PROP제작',
      desc: '빙하유님 오리지널 소품 제작 작업입니다.',
      date: '2026.09',
      image: 'Port/빙하유님오리지널소품.png'
    },
    {
      title: '냥님 커스텀 API<br>아봉',
      category: '와루도 3D API',
      group: '커스텀 제작',
      date: '2026.09',
      video: 'Port/냥님아봉.mp4'
    },
    {
      title: '냥님 날아가기 API',
      category: '와루도 3D API',
      group: '날아가기',
      date: '2026.09',
      video: 'Port/냥님날아가기.mp4'
    },
    {
      title: '별로우님 팬캐릭터 뽀뽀 API',
      category: '와루도 3D API',
      group: '팬캐릭터 뽀뽀',
      date: '2026.09',
      video: 'Port/별로우님팬캐릭터뽀뽀.mp4'
    },
    {
      title: '별로우님 자동 잠자기 API',
      category: '와루도 3D API',
      group: '자동 잠자기',
      date: '2026.09',
      video: 'Port/별로우잠자기.mp4'
    },
    {
      title: '달아님 쓰다듬기 API',
      category: '와루도 3D API',
      group: '쓰다듬기',
      date: '2026.08',
      video: 'Port/쓰담쓰담달아님.mp4'
    },
    {
      title: '달아님 물음표 API',
      category: '와루도 3D API',
      group: '물음표',
      date: '2026.08',
      video: 'Port/물음표 달아님.mp4'
    },
    {
      title: '달아님 커스텀 API<br>웅이아범',
      category: '와루도 3D API',
      group: '커스텀 제작',
      date: '2026.08',
      video: 'Port/웅이아범달아님.mp4'
    },
    {
      title: '아티님 자동 잠자기 API',
      category: '와루도 3D API',
      group: '자동 잠자기',
      date: '2026.08',
      video: 'Port/아티잠자기.mp4'
    },
    {
      title: '도라니님 자동 잠자기 API',
      category: '와루도 3D API',
      group: '자동 잠자기',
      date: '2026.09',
      video: 'Port/도라니잠자기.mp4'
    },
    {
      title: '아티님 물맞기 API',
      category: '와루도 3D API',
      group: '물맞기',
      date: '2026.08',
      video: 'Port/아티물맞기.mp4'
    },
    {
      title: '짜구님 던지기 API',
      category: 'Live2D API',
      group: '던지기',
      date: '2026.08',
      video: 'Port2D/짜구님 2D던지기.mp4'
    },
    {
      title: '짜구님 와르르 API',
      category: 'Live2D API',
      group: '와르르',
      date: '2026.08',
      video: 'Port2D/짜구님2D와르르.mp4'
    },
    {
      title: '짜구님 쓰다듬기 API',
      category: 'Live2D API',
      group: '쓰다듬기',
      date: '2026.08',
      video: 'Port2D/짜구님2D쓰담쓰담.mp4'
    },
    {
      title: '비올라님 던지기 API',
      category: 'Live2D API',
      group: '던지기',
      date: '2026.09',
      video: 'Port2D/비올라님2D던지기.mp4'
    },
    {
      title: '뭉냥이님 물음표 API',
      category: 'Live2D API',
      group: '물음표',
      date: '2026.09',
      video: 'Port2D/뭉냥이2D물음표.mp4'
    },
    {
      title: '박환몽님 팬 캐릭터 뽀뽀 API',
      category: 'Live2D API',
      group: '팬캐릭터 뽀뽀',
      date: '2026.09',
      video: 'Port2D/박환몽님2D팬캐릭터뽀뽀.mp4'
    },
    {
      title: '바박수님 팬 캐릭터 뽀뽀 API',
      category: 'Live2D API',
      group: '팬캐릭터 뽀뽀',
      date: '2026.09',
      video: 'Port2D/바박수님2D팬캐릭터뽀뽀.mp4',
      objectPosition: '65% 15%',
      zoom: 1.1
    },
    {
      title: '사과쨈님 팬 캐릭터 뽀뽀 API',
      category: 'Live2D API',
      group: '팬캐릭터 뽀뽀',
      date: '2026.09',
      video: 'Port2D/사과쨈님2D팬캐릭터뽀뽀.mp4'
    },
    {
      title: '뭉냥이님 붙이기 API',
      category: 'Live2D API',
      group: '붙이기',
      date: '2026.09',
      video: 'Port2D/뭉냥이2D붙이기.mp4'
    },
    {
      title: '뭉냥이님 쓰다듬기 API',
      category: 'Live2D API',
      group: '쓰다듬기',
      date: '2026.09',
      video: 'Port2D/뭉냥이2D쓰다듬기.mp4'
    },
    {
      title: '뭉냥이님 와르르 API',
      category: 'Live2D API',
      group: '와르르',
      date: '2026.09',
      video: 'Port2D/뭉냥이치즈 2D와르르.mp4'
    },
    {
      title: '쏠라님 던지기 API',
      category: 'Live2D API',
      group: '던지기',
      date: '2026.09',
      video: 'Port2D/쏠라2D던지기.mp4'
    },
    {
      title: '쏠라님 물음표 API',
      category: 'Live2D API',
      group: '물음표',
      date: '2026.09',
      video: 'Port2D/쏠라2D물음표.mp4'
    },
    {
      title: '쏠라님 와르르 API',
      category: 'Live2D API',
      group: '와르르',
      date: '2026.09',
      video: 'Port2D/쏠라2D와르르.mp4',
      objectPosition: '35% center'
    },
    {
      title: '최얀미님 던지기 API',
      category: 'Live2D API',
      group: '던지기',
      date: '2026.09',
      video: 'Port2D/최얀미님2D던지기.mp4'
    },
    {
      title: '최얀미님 물음표 API',
      category: 'Live2D API',
      group: '물음표',
      date: '2026.09',
      video: 'Port2D/최얀미님2D물음표.mp4'
    },
    {
      title: '치나리님 붙이기 API',
      category: 'Live2D API',
      group: '붙이기',
      date: '2026.09',
      video: 'Port2D/2D치나리붙이기.mp4'
    },
    {
      title: '빙하유님 물음표 API',
      category: 'Live2D API',
      group: '물음표',
      date: '2026.09',
      video: 'Port2D/2D빙하유물음표.mp4',
      objectPosition: 'center 20%',
      zoom: 1.1
    },
    {
      title: '초몽님 던지기 API',
      category: 'Live2D API',
      group: '던지기',
      date: '2026.09',
      video: 'Port2D/2D초몽던지기.mp4'
    },
    {
      title: '초몽님 와르르 API',
      category: 'Live2D API',
      group: '와르르',
      date: '2026.09',
      video: 'Port2D/2D와르르 초몽.mp4'
    },
    {
      title: '빙하유님 윙크 API',
      category: 'Live2D API',
      group: '윙크',
      date: '2026.09',
      video: 'Port2D/2D빙하유읭크.mp4',
      objectPosition: 'center 20%',
      zoom: 1.1
    },
    {
      title: '웹냥이님 붙이기 API',
      category: 'Live2D API',
      group: '붙이기',
      date: '2026.09',
      video: 'Port2D/웹냥이2D붙이기.mp4',
      objectPosition: 'left 100%',
      zoom: 1.15
    },
    {
      title: '웹냥이님 와르르 API',
      category: 'Live2D API',
      group: '와르르',
      date: '2026.09',
      video: 'Port2D/웹냥이2D와르르.mp4'
    },
    {
      title: '포곰이님 붙이기 API',
      category: 'Live2D API',
      group: '붙이기',
      date: '2026.09',
      video: 'Port2D/2D포곰이님붙이기.mp4'
    },
    {
      title: '포곰이님 쓰다듬기 API',
      category: 'Live2D API',
      group: '쓰다듬기',
      date: '2026.09',
      video: 'Port2D/2D포곰이님쓰담.mp4'
    },
    {
      title: '포곰이님 던지기 API',
      category: 'Live2D API',
      group: '던지기',
      date: '2026.09',
      video: 'Port2D/2D포곰이님치즈맞기.mp4'
    },
    {
      title: '김막댕님 물맞기 API',
      category: '와루도 3D API',
      group: '물맞기',
      date: '2026.09',
      video: 'Port/김막댕님물맞기.mp4'
    },
    {
      title: '김막댕님 팬 캐릭터 따라다니기 API',
      category: '와루도 3D API',
      group: '팬 캐릭터 따라다니기',
      date: '2026.09',
      video: 'Port/김막댕님팬캐릭터따라.mp4'
    },
    {
      title: '김막댕님 천사 / 악마 변신 API',
      category: '와루도 3D API',
      group: '천사 / 악마 변신',
      date: '2026.09',
      video: 'Port/김막댕천사.mp4'
    },
    {
      title: '유세라님 던지기 API',
      category: '와루도 3D API',
      group: '던지기',
      date: '2026.09',
      video: 'Port/유세라님던지기.mp4'
    },
    {
      title: '유세라님 물맞기 API',
      category: '와루도 3D API',
      group: '물맞기',
      date: '2026.09',
      video: 'Port/유세라님물맞기.mp4'
    },
    {
      title: '유세라님 머리쾅 (망치) API',
      category: '와루도 3D API',
      group: '머리쾅 (망치)',
      date: '2026.09',
      video: 'Port/유세라망치.mp4'
    },
    {
      title: '유세라님 쓰다듬기 API',
      category: '와루도 3D API',
      group: '쓰다듬기',
      date: '2026.09',
      video: 'Port/유세라쓰담쓰담.mp4'
    },
    {
      title: '유세라님 안경 자물쇠 API',
      category: '와루도 3D API',
      group: '안경 자물쇠',
      date: '2026.09',
      video: 'Port/유세라님안경자물쇠.mp4'
    },
    {
      title: '민초아가씨님 팬 캐릭터 뽀뽀 API',
      category: '와루도 3D API',
      group: '팬캐릭터 뽀뽀',
      date: '2026.09',
      video: 'Port/민초아가씨팬캐릭터뽀뽀.mp4'
    },
    {
      title: '차원랑님 팬 캐릭터 망치 API',
      category: 'Live2D API',
      group: '팬 캐릭터 망치',
      date: '2026.09',
      video: 'Port2D/차원랑2D뿅망치.mp4'
    },
    {
      title: '차원랑님 팬 캐릭터 뽀뽀 API',
      category: 'Live2D API',
      group: '팬캐릭터 뽀뽀',
      date: '2026.09',
      video: 'Port2D/차원랑2D팬캐릭뽀뽀.mp4'
    },
    {
      title: '헤쯔님 윙크 API',
      category: 'Live2D API',
      group: '윙크',
      date: '2026.09',
      video: 'Port2D/헤쯔2D윙크.mp4'
    },
    {
      title: '사과쨈님 물음표 API',
      category: 'Live2D API',
      group: '물음표',
      date: '2026.09',
      video: 'Port2D/사과쩀님2D물음표.mp4'
    },
    {
      title: '사과쨈님 머리쾅 (망치) API',
      category: 'Live2D API',
      group: '머리쾅 (망치)',
      date: '2026.09',
      video: 'Port2D/사과쨈님2D머리쾅.mp4'
    },
    {
      title: '양망양님 팬 캐릭터 망치 API',
      category: 'Live2D API',
      group: '팬 캐릭터 망치',
      date: '2026.09',
      video: 'Port2D/양망양팬캐릭터망치.mp4'
    },
  ];

  var PORTFOLIO_GROUP_ORDER = ['팬캐릭터 뽀뽀', '윙크', '던지기', '물음표', '자동 잠자기', '쓰다듬기', '머리쾅 (망치)', '와르르', '커스텀 제작'];
