import React from "react";
import { View,Text, Dimensions } from "react-native";
import UserAvatar from 'react-native-user-avatar';
var newHeigth = Dimensions.get('window').height;
var newWidth = Dimensions.get('window').width;
const TopBar =()=>{
    return(
        <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 12,
        }}>
        <View style>
          <UserAvatar
            size={48}
            style={{backgroundColor: 'white'}}
            src="https://cdn1.iconfinder.com/data/icons/different-menu-vol-2-1/512/menu_line_Bullet_Hamburger-512.png"
          />
        </View>

        <View>
        <UserAvatar
            size={98}
            style={{backgroundColor: 'white'}}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAADUCAMAAACs0e/bAAAAclBMVEX////vg1T/+/rvgU/2uqPufkzzqIvue0bufEn3yLf0rJLueULudj3vgVHueELudTv2wrD0sZjzpojwjWP98u774dj++PX87ejymXXzooL508X63dPtby/xlW/xkWj40MHwi1/74df1uKH62cztayf86OEdlHOIAAADz0lEQVR4nO3aiW6jMBQFUAMhNjHBJuyB7OX/f3EMiW2IplNpNNK0T/dIXeizol7ZAS9hDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAISg5bZ/dWC31pG/6X/+6fu8aRkzbrWhjbYixoxB1l4MV6XQx9KaIRdxMv4u7P6yK9uMV+ETfg5apILm7Dl2kDkayq5OJqsYobtasqubin1Vg2o7leVqnFLeU6bSAuyzK1uIl4ixt1yzK1uG1k09hYchmLWNw6c51q84rjok4s7sWOZX672liHRZ1YXNenETvYX+NFLlpxazuB3Lf+psUfvgGtuA87pRKaNfaRFC9WgbTiugGcjYz5ZL4BqbihWwzF5mpnr3jlW1CK29uxPN+Nj/bNG99dC1JxXX/OM0c/n4xcC1Jx3QRSzns2Z7tamN7JT5TiVnYs76/z9d12dryxTSjFzV2856PHPZb2hW1CKe7VDt7XNLl2g5vbDUlCcf0WpHgt6Vub321IEoq72ILcPffU3b1qf3q1IRR3sQUZxTP/B/nakKQTt8mCz9kNSTpxdfx5WrchSSdusf88rRnNz7sXmbjN+xbk22h+bkiSibvYgow91+OvDUkycd0WpHkMee5R9NrCoRK3dEdDq43li59YzTMtKnH9WF4dgvkDsmg7XVOJ27lRy8fl3wM/mqdLInFDf1+OVgW34g94z8jEdRs1r0H7m8K8KiQS122nv534+VOUZ7fTiBtm7kmr1p9OYIWwlbSfP3lj8Z8bt7lvnLfS0ZXuDxPXt7v/3LgAZFRJksznfI9NUrOjHivdlLqq9KM3laQvtfles3C60PXRfK++esnvTGdSpVsWntM0FeNFdeOw2QzjST1ymalhd1NcybislVDqY2x5qtL261f9trTMx2tadnJbbXgQCs6C07moecRybrq66WVb3mUe8qAaK9byS3XK3m/hP4iWml3lQ05Hm6fslmdHLURyyXKWiy7f1b3smOZbEzfPE9ZmFRuz4stX/bZ0LFJRjHL6wOdBHse0Owpx7NKR5TFXH2XPozTmfc33amhN3Nu0YPzf//Tf0+Lc5TVLRcPCvQlZRGYsn4MrY6aj2XQSWhxEazJep9ZtNpq+/sFvXi3nI1ydRodrdphWv0JPXyauOB06fcs6VkjTu0HXdU0btyc+TSl/qs3wPARLYsVz87NUqgyHoTYLQJWq4dB/tOwx7MshNXfm6qSUKh5/fsXvLbQT4PqPzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6dX07NLlshQvazAAAAAElFTkSuQmCC"
          />
        </View>
        <View>
          <UserAvatar
            size={48}
            name="Avishay Bar"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
          />
        </View>
        </View>
    )
}
export default TopBar;