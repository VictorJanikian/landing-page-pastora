import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { InsertContact } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Sucesso!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Erro ao enviar mensagem. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "pastorjoao@exemplo.com",
      bgColor: "bg-[hsl(225,73%,57%)]"
    },
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      value: "(11) 99999-9999",
      bgColor: "bg-[hsl(158,64%,52%)]"
    },
    {
      icon: "fas fa-clock",
      title: "Horário de Atendimento",
      value: "Segunda a Sexta: 9h às 18h",
      bgColor: "bg-[hsl(38,92%,50%)]"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      bgColor: "bg-[hsl(25,95%,62%)]"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">Entre em Contato</h2>
          <p className="text-xl text-[hsl(215,16%,47%)] max-w-3xl mx-auto">
            Estou aqui para ajudá-lo em sua jornada espiritual. Entre em contato através dos canais abaixo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-semibold text-2xl text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`${info.bgColor} text-white p-3 rounded-lg mr-4`}>
                      <i className={`${info.icon} text-xl`}></i>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{info.title}</div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-semibold text-2xl text-gray-900 mb-6">Agende uma Conversa</h3>
              <p className="text-gray-600 mb-6">
                Gostaria de uma conversa inicial gratuita de 15 minutos? Agende através do Calendly.
              </p>
              <a
                href="#"
                className="block w-full bg-[hsl(225,73%,57%)] hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-center"
              >
                <i className="fas fa-calendar-plus mr-2"></i>
                Agendar Conversa Gratuita
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="font-semibold text-2xl text-gray-900 mb-6">Envie uma Mensagem</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Nome Completo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome completo"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(225,73%,57%)] focus:border-transparent transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(225,73%,57%)] focus:border-transparent transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Assunto</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(225,73%,57%)] focus:border-transparent transition-colors">
                            <SelectValue placeholder="Selecione um assunto" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mentoria">Mentoria Espiritual</SelectItem>
                          <SelectItem value="produtos">Produtos e Cursos</SelectItem>
                          <SelectItem value="oracao">Pedido de Oração</SelectItem>
                          <SelectItem value="aconselhamento">Aconselhamento</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Compartilhe sua mensagem ou pedido..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(225,73%,57%)] focus:border-transparent transition-colors resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-[hsl(225,73%,57%)] hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                >
                  {contactMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
