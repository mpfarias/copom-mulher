import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import {
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Grid,
  Button,
  Stack,
  Alert
} from '@mui/material';

import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function SomAlto() {
  
  
  
  const regioesAdministrativas = [
    { value: 'Água Quente', label: 'Água Quente' },
    { value: 'Águas Claras', label: 'Águas Claras' },
    { value: 'Arapoanga', label: 'Arapoanga' },
    { value: 'Arniqueira', label: 'Arniqueira' },
    { value: 'Brazlândia', label: 'Brazlândia' },
    { value: 'Candangolândia', label: 'Candangolândia' },
    { value: 'Ceilândia', label: 'Ceilândia' },
    { value: 'Cruzeiro', label: 'Cruzeiro' },
    { value: 'Estrutural', label: 'Estrutural' },
    { value: 'Fercal', label: 'Fercal' },
    { value: 'Gama', label: 'Gama' },
    { value: 'Guará', label: 'Guará' },
    { value: 'Itapoã', label: 'Itapoã' },
    { value: 'Jardim Botânico', label: 'Jardim Botânico' },
    { value: 'Lago Norte', label: 'Lago Norte' },
    { value: 'Lago Sul', label: 'Lago Sul' },
    { value: 'Núcleo Bandeirante', label: 'Núcleo Bandeirante' },
    { value: 'Octogonal', label: 'Octogonal' },
    { value: 'Paranoá', label: 'Paranoá' },
    { value: 'Park Way', label: 'Park Way' },
    { value: 'Planaltina', label: 'Planaltina' },
    { value: 'Por do Sol', label: 'Por do Sol' },
    { value: 'Recanto das Emas', label: 'Recanto das Emas' },
    { value: 'Riacho Fundo', label: 'Riacho Fundo' },
    { value: 'Riacho Fundo II', label: 'Riacho Fundo II' },
    { value: 'Samambaia', label: 'Samambaia' },
    { value: 'Santa Maria', label: 'Santa Maria' },
    { value: 'São Sebastião', label: 'São Sebastião' },
    { value: 'SCIA', label: 'SCIA' },
    { value: 'SIA', label: 'SIA' },
    { value: 'Sobradinho', label: 'Sobradinho' },
    { value: 'Sobradinho II', label: 'Sobradinho II' },
    { value: 'Sol Nascente', label: 'Sol Nascente' },
    { value: 'Sudoeste', label: 'Sudoeste' },
    { value: 'Taguatinga', label: 'Taguatinga' },
    { value: 'Varjão', label: 'Varjão' },
    { value: 'Vicente Pires', label: 'Vicente Pires' },
    { value: 'Plano Piloto', label: 'Plano Piloto' }]
    
  const [local, setLocal] = useState('');
  const [assinatura, setAssinatura] = useState('');

  const [state, setState] = useState({
    assinatura: '',
    nome: '',
    endereco: '',
    regiaoAdministrativa: '',
    referencia: '',
    telefone: '',
    text01: 'Solicitante informa perturbação do sossego, porém não quis se identificar. Foi orientado a ligar para a Ouvidora Geral do GDF (162).',
    aviso01: 'ATENÇÃO!! VIATURA NÃO DEVE SER ACIONADA. ENCERRE A OCORRÊNCIA COMO INFORMAÇÃO.',
    text02: 'Informe ao solicitante que o som alto em residência é infração do artigo 42 da Lei de Contravenções Penais, e que para que a Polícia Militar possa atuar, é necessária a assinatura do Termo Circunstanciado de Ocorrência, de acordo com o TJDFT (ACÓRDÃO Nº 1425679). Pergunte se o solicitante deseja assinar o Termo Circunstanciado de Ocorrência.',
    text03: 'Informe ao solicitante que a Polícia Militar somente pode agir na responsabilização criminal do autor, e para isso precisa de vítima. Se o solicitante não quiser assinar o TCO, peça para ligar 162 (OUVIDORIA GDF). Clique no botão "COPIAR TEXTO" e cole (CTRL + V) no campo "Narrativa" do CAD.',
    text04: 'RESPONSABILIDADE DO DETRAN - FAÇA O REGISTRO NORMALMENTE - A OCORRÊNCIA SERÁ ENCAMINHADA AO DETRAN PELO DESPACHANTE.',
    text05: 'Informe ao solicitante que a denúncia deverá ser feita no telefone 162, pois a responsabilidade para atuar em estabelecimento comercial é do IBRAM.',
    text06: 'Solicitante informa som alto em estabelecimento comercial. Foi orientado a ligar na Ouvidora do GDF (162).',
    text07: '',
    text08: "Solicitante informa que veículo está incomodando com o sol alto. Pede apoio do DETRAN."
  });

  const {
    nome,
    telefone,
    endereco,
    regiaoAdministrativa,
    text01,
    aviso01,
    text02,
    text03,
    text04,
    text05,
    text07,
    text06,
    text08
  } = state;

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleCopyField = (fieldName) => {
    const fieldValue = state[fieldName];
    navigator.clipboard.writeText(fieldValue);
  };

  const handleRadioChangePerturbacao = (event) => {
    setAssinatura(event.target.value);
  };

  const handleTelefoneChange = (e, field) => {
    const maxLength = 14;
    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
    handleChange(field, e.target.value);
  };

  const handleChange = (field, value) => {
    setState(prevState => ({ ...prevState, [field]: value }));
  };

  const handleResetForm = () => {
    setState({
      assinatura: '',
      nome: '',
      endereco: '',
      regiaoAdministrativa: 'Plano Piloto',
      referencia: '',
      telefone: '',
      text01,
      aviso01,
      text02,
      text03,
      text04,
      text05,
      text07,
      text06,
      text08,
    });

    setLocal('');
    setAssinatura('');
    document.getElementById('outlined-basic-nome').value = '';
    document.getElementById('outlined-basic-endereco').value = '';
    document.getElementById('outlined-basic-telefone').value = '';
    document.getElementById('outlined-basic-referencia').value = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      text07:` Solicitante${nome === '' ? '' : ': '+nome}, 
${endereco === '' ? '' : ', Endereço: '+endereco} 
${telefone === '' ? '' : ', Telefone: '+telefone} 
${regiaoAdministrativa === null ? '' : ', RA: '+regiaoAdministrativa}
, informa som alto no local, pede PMDF no local pois TEM INTERESSE EM ASSINAR O TCO.`,
    }));
  }, [nome, endereco]);

  const renderOpcoesAssinatura = () => (
    <>
      <Grid item xs={12}>
        <TextField
          sx={{ marginBottom: 0, marginRight: 2, width: '80%' }}
          placeholder="Qual o nome do solicitante ?"
          fullWidth
          id="outlined-basic-nome"
          onChange={(e) => handleChange('nome', e.target.value)}
          label="Qual o nome do solicitante ?"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleCopyField('nome')}
          style={{ backgroundColor: '#32CD32', color: '#FFFFFF', marginBottom: 15 }}>
          <FileCopyIcon />
        </Button>
      </Grid>
      <Grid item xs={12}>
        <InputMask
          mask="(99)99999-9999"
          value={telefone}
          onChange={(e) => handleTelefoneChange(e, 'telefone')}
        >
          {(inputProps) => (
            <TextField
              {...inputProps}
              sx={{ marginBottom: 1, marginRight: 2, width: '80%' }}
              fullWidth
              id="outlined-basic-telefone"
              label="Qual o telefone do solicitante ?"
              name="telefone"
              variant="outlined"
            />
          )}
        </InputMask>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleCopyField('telefone')}
          style={{ backgroundColor: '#32CD32', color: '#FFFFFF', marginBottom: 15 }}>
          <FileCopyIcon />
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ marginBottom: 0, marginRight: 2, width: '80%' }}
          placeholder="Qual endereço do solicitante ?"
          fullWidth 
          id="outlined-basic-endereco"
          onChange={(e) => handleChange('endereco', e.target.value)}
          label="Qual endereço do solicitante ?"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleCopyField('endereco')}
          style={{ backgroundColor: '#32CD32', color: '#FFFFFF', marginBottom: 15 }}>
          <FileCopyIcon />
        </Button>
      </Grid>
      <FormControl fullWidth>
        <FormLabel style={{ fontWeight: 'bold', fontSize: 18,}} id="demo-controlled-radio-buttons-group">Qual a cidade da perturbação ?</FormLabel>
        <Select
          id="regiaoAdministrativa"
          sx={{ marginBottom: 2, width: '50%' }}
          placeholder="regiaoAdministrativa:"
          value={regiaoAdministrativa}
          IconComponent={KeyboardArrowDownIcon}
          variant="outlined"
          onChange={(e) => handleChange('regiaoAdministrativa', e.target.value)}
        >
          {regioesAdministrativas.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid item xs={12}>
        <TextField
          sx={{ marginBottom: 0, marginRight: 2, width: '80%' }}
          placeholder="Qual o ponto de referência ?"
          fullWidth
          id="outlined-basic-referencia"
          label="Qual o ponto de referência ?"
          name="referencia"
          onChange={(e) => handleChange('referencia', e.target.value)}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleCopyField('referencia')}
          style={{ backgroundColor: '#32CD32', color: '#FFFFFF', marginBottom: 15 }}>
          <FileCopyIcon />
        </Button>
      </Grid>
      
      <Grid item xs={12} sx={{ mt: 1 }}>
        <FormLabel style={{ fontWeight: 'bold', fontSize: 18,}} id="demo-controlled-radio-buttons-group" component="legend">Copie o texto abaixo e cole no campo NARRATIVA do CAD:</FormLabel>
        <TextField
          sx={{
            backgroundColor: 'rgba(0, 200, 0, 0.1)',
          }}
          multiline
          fullWidth
          value={assinatura === 'sim' && local === 'residência' ? text07 : text08}
          InputProps={{
            disabled: true
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{ marginBottom: 8 }} sm={6}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleCopyText(text07)}
          style={{ backgroundColor: '#32CD32', color: '#FFFFFF', width: '100%', marginBottom: 15 }}>
          Copiar texto
        </Button>
       
      </Grid>
    </>
  );


  return (
    <Box paddingRight={2} marginTop={4} marginBottom={8}>
      <Grid container sx={{ marginLeft: 1, width: '100%' }} spacing={3}>
        <Grid item style={{ paddingTop: 0 }} xs={12}>
        <FormLabel style={{
            fontWeight: 'bold',
            fontSize: 30,
          }} id="demo-controlled-radio-buttons-group">PERTURBAÇÃO DO SOSSEGO</FormLabel>
          <Box sx={{ mt: 2 }} noValidate autoComplete="off">
            <FormControl>
              <FormLabel style={{ fontWeight: 'bold', fontSize: 18,}} id="demo-row-radio-buttons-group-label">Qual o tipo de local da perturbação ?</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                id="local"
                value={local}
                onChange={(e) => setLocal(e.target.value)}
              >
                <FormControlLabel value="residência" control={<Radio />} label="Residência" />
                <FormControlLabel value="automóvel" control={<Radio />} label="Automóvel" />
                <FormControlLabel value="estabelecimento comercial" control={<Radio />} label="Estabelecimento Comercial" />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        {
                        console.log(local)
                      }
        <Stack sx={{ width: '100%' }} spacing={2}>
          {local === 'residência' && (
            <>
              <Alert severity="warning">{text02}</Alert>
              <FormLabel style={{ fontWeight: 'bold', fontSize: 18,}}id="demo-row-radio-buttons-group-label">Solicitante deseja assinar TCO/PMDF ?</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={assinatura}
                onChange={handleRadioChangePerturbacao}
              >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="não" control={<Radio />} label="Não" />
              </RadioGroup>
              <Grid item xs={12}>
                <Stack sx={{ width: '100%' }} spacing={2}>
                  {assinatura === 'sim' && renderOpcoesAssinatura()}
                  {assinatura === 'não' && (
                    <>
                      <Alert severity="warning">{text03}</Alert>
                      <Grid item xs={12} sx={{ mt: 1 }}>
                        <FormLabel style={{ fontWeight: 'bold', fontSize: 18,}} id="demo-controlled-radio-buttons-group" component="legend">Copie o texto abaixo e cole no campo NARRATIVA do CAD:</FormLabel>
                        <TextField
                          sx={{
                            backgroundColor: 'rgba(0, 200, 0, 0.1)',
                          }}
                          multiline
                          fullWidth
                          value={text01}
                          InputProps={{
                            disabled: true
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sx={{ marginBottom: 8 }} sm={6}>
                        <Button variant="contained"
                          color="secondary"
                          onClick={() => handleCopyText(text01)}
                          style={{ backgroundColor: '#32CD32', color: '#FFFFFF', width: '100%', marginBottom: 15 }}>Copiar texto</Button>
                      </Grid>
                    </>
                  )}

                </Stack>
              </Grid>
            </>
          )}
          {local === 'automóvel' && (
            <>
          <Alert severity="warning">{text04} </Alert>
          {renderOpcoesAssinatura()}
          </>
          )
        }
          {local === 'estabelecimento comercial' && (
            <>
              <Alert severity="warning">{text05} </Alert>
              <Alert severity="warning">{aviso01}</Alert>

              <Grid item xs={12} sx={{ mt: 1 }}>
                <FormLabel style={{ fontWeight: 'bold', fontSize: 18,}} id="demo-controlled-radio-buttons-group" component="legend">Copie o texto abaixo e cole no campo NARRATIVA do CAD:</FormLabel>
                <TextField
                  sx={{
                    backgroundColor: 'rgba(0, 200, 0, 0.1)',
                  }}
                  multiline
                  fullWidth
                  value={text06}
                  InputProps={{
                    disabled: true
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ marginBottom: 8 }} sm={6}>
                <Button variant="contained"
                  color="secondary"
                  onClick={() => handleCopyText(text06)}
                  style={{ backgroundColor: '#32CD32', color: '#FFFFFF', width: '100%', marginBottom: 15 }}>Copiar texto</Button>
              </Grid>
            </>)
          }
        </Stack>
      </Grid >
    </Box>

  );
}
