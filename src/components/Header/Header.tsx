import React from 'react';
import avatar from '../../assets/avatar.png'
import {MdHistory, MdTextsms, MdMoreVert, MdSearch} from 'react-icons/md';
import {HeaderBackground, HeaderOne, HeaderTwo, HeaderOneContents, UserPhoto, IconsContainer, IconsLink, HeaderTwoContents, SearchInput, InputContainer, IconLinkInput} from './HeaderStyle';


export default function Header(){
    return(
        <HeaderBackground>
            <HeaderOne>
                <HeaderOneContents>
                    <UserPhoto src={avatar}/>
                    <IconsContainer>

                        <IconsLink href="#">
                            <MdHistory 
                            color="#9c9c9c" 
                            size={25}
                            />
                        </IconsLink>

                        <IconsLink href="#">
                            <MdTextsms 
                            color="#9c9c9c" 
                            size={25}
                            />
                        </IconsLink>

                        <IconsLink href="#">
                            <MdMoreVert 
                            color="#9c9c9c" 
                            size={25}
                            />
                        </IconsLink>

                    </IconsContainer>
                </HeaderOneContents>
            </HeaderOne>

            <HeaderTwo>
                <HeaderTwoContents>
                    <InputContainer>

                        <IconLinkInput>
                            <MdSearch 
                            size={20}
                            />
                        </IconLinkInput>

                        <SearchInput 
                        placeholder="Procure por uma conversa..."
                        />
                        
                    </InputContainer>
                </HeaderTwoContents>
            </HeaderTwo>
        </HeaderBackground>
    )
}